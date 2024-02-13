<?php

namespace App\Repositories;
use App\Interfaces\UserRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules;
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
        
        
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'type' => $request->type
        ]);

        event(new Registered($user));

        Auth::login($user);

        
    }


    public function showLoginForm()
    {
        return Inertia::render('Shop/Login');
    }

    public function login($request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if(Auth::attempt($credentials))
        {
            $request->session()->regenerate();
            return Auth()->user();
        }
    }

    public function logout()
    {

    }
}