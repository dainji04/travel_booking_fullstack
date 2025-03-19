<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

Route::get('api/csrf-token', function () {
    return response()->json(['csrfToken' => csrf_token()]);
});

Route::get('/login', function () {
    return view('login');
});


require __DIR__ . '/auth.php';
