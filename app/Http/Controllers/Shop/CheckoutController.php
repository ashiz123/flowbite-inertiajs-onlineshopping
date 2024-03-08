<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Interfaces\CheckoutRepositoryInterface;
use Illuminate\Support\Facades\Log;

class CheckoutController extends Controller
{
    private $checkoutRepositoryInterface;


    public function __construct(CheckoutRepositoryInterface $checkoutRepositoryInterface)
    {
        $this->checkoutRepositoryInterface = $checkoutRepositoryInterface;
    }

    public function create()
    {
        $apiUrl = env('GET_ADDRESS_API');
        return Inertia::render('Shop/Checkout/Create' , ['address_api' => $apiUrl] );
    }

    public function process(Request $request)
    {
       Log::info($request);
       return $request;
    }

    
}
