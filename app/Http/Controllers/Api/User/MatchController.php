<?php

namespace App\Http\Controllers\Api\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserImageResource;
use App\Models\User\Image;
use App\Models\User\Match;
use App\User;
use Illuminate\Http\Request;

class MatchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {
        return UserImageResource::collection(
            Image::query()
                ->whereNotIn('id', $user->images()->pluck('id'))
                ->whereNotIn('id', $user->matches()->pluck('to_image_id'))
                ->take(50)
                ->get()
                ->shuffle()
        );
    }

    /**
     * @param Request $request
     * @param User $user
     * @param Image $image
     */
    public function match(Request $request, User $user, Image $image) {

        abort_unless($image->user()->exists(), 404);

        $match = Match::firstOrNew([
            'from_user_id' => $user->id,
            'to_image_id' => $image->id,
            'to_user_id' => $image->user()->first()->id
        ]);
        $match->matches = $request->input('match');
        $match->save();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Responsew
     */
    public function store(Request $request, User $user)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @param  \App\Models\User\Match  $match
     * @return \Illuminate\Http\Response
     */
    public function show(User $user, Match $match)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @param  \App\Models\User\Match  $match
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, Match $match)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @param  \App\Models\User\Match  $match
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, Match $match)
    {
        //
    }
}
