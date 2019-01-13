<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * UserPolicy constructor.
     */
    public function __construct() {
        $this->authorizeResource(User::class);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\User $user
     * @return User
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, User $user) {

        $this->validate($request, [
            'name' => 'required|min:1',
            'first_name' => 'required|min:1',
            'gender' => 'required|integer|in:0,1',
            'questions.questions' => 'nullable|array',
            'questions.questions.*.key' => 'nullable|string',
            'questions.questions.*.value' => 'nullable|string',
        ]);

        $user->update($request->only(['name', 'first_name', 'gender']));

        foreach($request->input('questions.questions') as $answer) {
            $user->answers()->updateOrCreate(
                array_only($answer, 'key'),
                array_only($answer, 'value')
            );
        }

        return $user;
    }

    /**
     * @param Request $request
     * @param User $user
     */
    public function uploadImage(Request $request, User $user) {



    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
