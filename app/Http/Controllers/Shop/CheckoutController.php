<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
    public function create()
    {
        $apiUrl = env('GET_ADDRESS_API');
        return Inertia::render('Shop/Checkout/Create' , ['address_api' => $apiUrl] );
    }
}
