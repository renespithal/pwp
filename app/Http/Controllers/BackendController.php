<?php
/**
 *
 * @author Tom Esders
 */

namespace App\Http\Controllers;


use Auth;
use JWTAuth;

class BackendController extends Controller {

    public function index() {

        $files = scandir(public_path('/angular'));
        $scripts = array_filter($files, function($e) {
            return ends_with($e, '.js');
        });
        usort($scripts, function($a, $b) {
            if (stristr($a, 'polyfills')) return -1;
            return 1;
        });
        $styles = array_filter($files, function($e) {
            return ends_with($e, '.css');
        });

        return view('angular', [
            // 'jwt_token' => JWTAuth::fromUser(Auth::user()),
            'scripts' => $scripts,
            'styles' => $styles
        ]);
    }

}