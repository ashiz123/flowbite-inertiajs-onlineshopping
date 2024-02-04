<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface UserRepositoryInterface
{
    public function showRegisterForm();

    public function register($request);

    public function showLoginForm();

    public function login();

    public function logout();

}

