<?php
/**
 *
 * @author Tom Esders
 */

namespace App\Exports;


use App\User;

class MentorExport extends StatsExport {

    /**
     * @return mixed
     */
    public function sourceIds() {
        return User::mentors()->pluck('id');
    }

}