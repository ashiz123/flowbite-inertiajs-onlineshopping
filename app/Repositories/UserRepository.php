<?php

namespace App\Repositories;
use App\Interfaces\UserRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Models\User;

class UserRepository implements UserRepositoryInterface
{
    public function showRegisterForm()
    {
        return Inertia::render('Shop/Register');
    }

    public function register($request)
    {
        
       $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' =>Hash::make($request->password)
       ]);

       return $user;
    }


    public function showLoginForm()
    {
        
    }

    public function login()
    {

    }

    public function logout()
    {

    }
}