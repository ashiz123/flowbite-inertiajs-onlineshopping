<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
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
       $this->userRepository->register($request);
       return redirect('/shop');
    }

    public function showLoginForm()
    {
        return $this->userRepository->showLoginForm();
    }
    

    

    public function loginUser(Request $request)
    {
        return $this->userRepository->login($request); 
    }


    public function logout(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/shop');
    }


    public function testing()
    {
        return Inertia::render('Shop/testing');
    }


}
