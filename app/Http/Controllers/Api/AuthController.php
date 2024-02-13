<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $fields = $request->validate([
            'name' => 'required|string',
            'email'=> 'required|email|unique:users,email',
            'password'=> 'required|string|confirmed'
        ]);


        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => bcrypt( $fields['password'])
        ]);

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }


    
    public function login(Request $request)
    {
        $fields = $request->validate([
            'email'=> 'required|email',
            'password'=> 'required|string'
        ]);

        if(Auth::attempt($fields))
        {
            $token = auth()->user()->createToken('myapptoken')->plainTextToken;

            $response = [
                'user' => Auth()->user(),
                'token' => $token
            ];
    
            return response($response, 201);
        }


    }


    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response(201);
    }


    public function getUser(Request $request)
    {
        // Retrieve the logged-in user
        $user = Auth::user();

        // Check if the user is authenticated
        if ($user) {
            // User is authenticated, return user data
            return response()->json(['user' => $user]);
        } else {
            // User is not authenticated
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }
}
