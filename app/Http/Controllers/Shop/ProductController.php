<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;

class ProductController extends Controller
{
    public function show($id)
    {
        $product = Product::with('variants', 'category', 'photo')->find($id);
        return Inertia::render('Shop/ProductOverview', ['product' => $product]);
    }
}
