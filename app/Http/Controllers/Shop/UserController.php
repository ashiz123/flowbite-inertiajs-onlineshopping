<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Interfaces\UserRepositoryInterface;
use App\Http\Requests\Shop\UserRequest;
use Illuminate\Support\Facades\Redis;

class UserController extends Controller
{

    private $userRepository;

    public function __construct(UserRepositoryInterface $userRepository)
    {
        return $this->userRepository = $userRepository;
    }

    public function showRegisterForm()
    {
        return $this->userRepository->showRegisterForm();
    }

    public function register(UserRequest $request)
    {
       return $this->userRepository->register($request);
    }
    

    

    public function login()
    {
        return Inertia::render('Shop/Login');
    }



    public function testing()
    {
        return Inertia::render('Shop/testing');
    }


}
