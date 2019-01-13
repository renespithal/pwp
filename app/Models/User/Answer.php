<?php
/**
 *
 * @author Tom Esders
 */

namespace App\Models\User;


use Illuminate\Database\Eloquent\Model;

class Answer extends Model {

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users_answers';

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

}