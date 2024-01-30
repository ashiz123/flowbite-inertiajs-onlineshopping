<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class HomepageController extends Controller
{
   public function index()
   {
     $products = Product::all();
     return Inertia::render('Shop/Index', ['products' => $products]);
   }
}
