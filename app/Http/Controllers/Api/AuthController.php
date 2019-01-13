<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
//use App\Http\Resources\CurrentUserResource;
use App\User;
use Illuminate\Http\Request;

class AuthController extends Controller {

    /**
     * @param Request $request
     * @return mixed
     */
    public function user(Request $request) {
        return User::where('id', $request->user()->id)
            ->with(['answers'])
            ->first();
    }


}