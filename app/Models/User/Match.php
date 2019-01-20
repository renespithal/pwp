<?php
/**
 *
 * @author Tom Esders
 */

namespace App\Models\User;


use Illuminate\Database\Eloquent\Model;

class Match extends Model {

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users_matches';

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

}