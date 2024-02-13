<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface UserRepositoryInterface
{
    public function showRegisterForm();

    public function register($request);

    public function showLoginForm();

    public function login($request);

    public function logout();

}

