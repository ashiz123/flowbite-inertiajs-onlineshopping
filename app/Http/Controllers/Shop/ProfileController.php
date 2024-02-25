<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function create()
    {
        $apiUrl = env('GET_ADDRESS_API');
        return Inertia::render('Shop/Profile/Profile',['address_api' => $apiUrl] );
    
    }

    public function test()
    {
        return Inertia::render('Shop/Profile/StepperProfile');
    }
}
