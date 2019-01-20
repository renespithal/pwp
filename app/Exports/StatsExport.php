<?php

namespace App\Exports;

use App\Models\User\Match;
use App\User;
use Maatwebsite\Excel\Concerns\FromCollection;

abstract class StatsExport implements FromCollection
{

    public abstract function sourceIds();

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection() {
        return collect($this->getMatchingFromUsers($this->sourceIds()));
    }

    /**
     * @param $userIds
     * @return array
     */
    public function getMatchingFromUsers($userIds) {

        $matches = Match::query()
            ->whereIn('from_user_id', $userIds)
            ->select(['from_user_id', 'to_user_id'])
            ->groupBy(['from_user_id', 'to_user_id'])
            ->get();

        $data = [['from_id', 'from_mail', 'to_id', 'to_mail', 'correlation_answer', 'correlation_images']];

        foreach ($matches as $match) {
            $fromUser = User::find($match->from_user_id);
            $toUser = User::find($match->to_user_id);
            $data[] = [
                'from' => $fromUser->id,
                'from_mail' => $fromUser->email,
                'to' => $toUser->id,
                'to_mail' => $toUser->email,
                'correlation_answers' => $this->getUserAnswerCorrelationScore($fromUser, $toUser),
                'correlation_images' => $this->getUserImageCorrelationScore($fromUser, $toUser)
            ];
        }

        return $data;

    }

    /**
     * @param User $user1
     * @param User $user2
     * @return float
     */
    protected function getUserAnswerCorrelationScore(User $user1, User $user2) {

        $answers1 = $user1->answers()->get()->keyBy('key');
        $answers2 = $user2->answers()->get()->keyBy('key');

        $answered = [];
        foreach ($answers1 as $answer) {
            $correspondingAnswer = $answers2->get($answer->key);
            if (!$correspondingAnswer) continue;

            if ($answer->value == $correspondingAnswer->value) {
                $answered[] = 1;
            } else {
                $answered[] = 0;
            }

        }

        if (count($answered) == 0) {
            return 0;
        }
        return array_sum($answered) / count($answered);

    }

    /**
     * @param User $user1
     * @param User $user2
     * @return float|int
     */
    protected function getUserImageCorrelationScore(User $user1, User $user2) {

        $matches = $user1
            ->matches()
            ->where('to_user_id', $user2->id)
            ->get();

        $matchedCount = $matches->reduce(function($prev, $match) {
            return $prev + $match->matches;
        }, 0);

        return $matchedCount / $matches->count();
    }


}
