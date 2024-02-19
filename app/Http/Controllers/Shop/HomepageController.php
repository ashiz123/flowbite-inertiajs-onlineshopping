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
     
      
     
    // $product = Product::with('variants', 'category', 'photo')->find($id);
     $products = Product::with('variants', 'category', 'photo')->get();
     return Inertia::render('Shop/Index', ['products' => $products ]);
   }
}
