<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class SignUpController extends Controller
{
    public function index(): View
    {
        return view('register');
    }

    public function auth(Request $request)
    {
        $username = $request->input('name');
        $phoneNumber = $request->input('number');
        $email = $request->input('email');
        $password = $request->input('password');

        // Create a new user
        $user = new User();
        $user->name = $username;
        $user->email = $email;
        $user->password = $password;
        $user->phoneNumber = $phoneNumber;
        $user->role = 'user';
        $user->save();

        return redirect('/');
    }
}
