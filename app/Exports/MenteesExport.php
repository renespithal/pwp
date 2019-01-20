<?php
/**
 *
 * @author Tom Esders
 */

namespace App\Exports;


use App\User;

class MenteesExport extends StatsExport {

    public function sourceIds() {
        return User::mentees()->pluck('id');
    }
}