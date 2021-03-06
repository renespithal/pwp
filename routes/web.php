<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/logout', function() {
    if (\Auth::check()) {
        \Auth::logout();
    }
    return redirect()->to('/');
});

Route::any('/export', 'HomeController@exportStats')
    ->middleware('auth');

Route::any('{any?}', 'BackendController@index')
    ->where('any', '.*')
    ->middleware('auth');
