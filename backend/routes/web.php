<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\SignUpController;
use Illuminate\Support\Facades\Route;

Route::get('/login', [LoginController::class, 'index']);
// Route::post('api/login', [LoginController::class, 'auth']);

Route::get('/register', [SignUpController::class, 'index']);

Route::post('api/register', [SignUpController::class, 'auth']);

Route::get('api/csrf-token', function () {
    return response()->json(['csrfToken' => csrf_token()]);
});

Route::get('/', function () {
    return view('welcome');
});
