<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{

    public function __construct()
    {
       
    }
    public function index()
    {
        return Inertia::render('Seller/Orders/Order');
    }

    public function order()
    {
        
    }

    
}
