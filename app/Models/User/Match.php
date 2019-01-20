<?php
/**
 *
 * @author Tom Esders
 */

namespace App\Models\User;


use App\User;
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

    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function toUser() {
        return $this->hasOne(User::class, 'id', 'to_user_id');
    }

}