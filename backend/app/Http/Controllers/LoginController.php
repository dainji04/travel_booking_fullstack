<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function index(): View
    {
        return view('login');
    }
    public function auth(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        if (Auth::attempt(['email' => $email, 'password' => $password])) {

            return response()->json([
                'status' => 'success',
                'message' => 'Login successful',
                'user' => Auth::user()
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Invalid credentials'
            ]);
        }
    }
}
