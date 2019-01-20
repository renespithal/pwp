<?php

use Illuminate\Http\Request;
use Illuminate\Routing\Router;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['jwt.auth'])->namespace("Api")->group(function(Router $route) {

    // Auth
    $route->get('/auth/user', 'AuthController@user');
    $route->post('/auth/logout', 'AuthController@logout');

    //
    $route->post('/user/{user}/uploadimage', 'UserController@uploadimage');
    $route->resource('user', 'UserController');

    //
    $route->post('/user/{user}/matches/match/{image}', 'User\MatchController@match');
    $route->resource('user.matches', 'User\MatchController');


});