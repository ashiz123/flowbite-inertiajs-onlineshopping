<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Variant;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function show($id)
    {
        $product = Product::with('variants', 'category', 'photos')->find($id);
        return Inertia::render('Shop/ProductOverview', ['product' => $product]);
    }

    public function getSizesByColor($productId, $color)
    {
       
        $sizes = Variant::where('product_id', $productId)->sizesByColor($color);
        return response()->json(['sizes' => $sizes]);
    }

    public function getColorsBySize($productId, $size)
    {
        $colors = Variant::where('product_id', $productId)->colorsBySize($size);
        return response()->json(['colors' => $colors]);
    }
}
