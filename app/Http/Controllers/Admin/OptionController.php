<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Variant;


class OptionController extends Controller
{
    public function create()
    {
        $product = Product::where('id', 1)->first();
        return Inertia::render('Options/CreateOption', ['product' => $product]);
    }
    

    public function store(Request $request)
    {
        $product = (object)$request->product;
        $options = $request->options;

        try{
            foreach($options as $option)
            {
             $opt = (object)$option; //converting array to object
             $variant = new Variant;
             $variant->product_id = $product->id;
             $variant->sku = $opt->sku;
             $variant->title = $opt->title;
             $variant->size = $opt->size;
             $variant->color = $opt->color;
             $variant->origin = $opt->origin;
             $variant->type = $opt->type;
     
             $variant->quantity = $opt->quantity;
             $variant->price = $opt->price;
     
             $variant->save();
            }
              
            return Inertia::location('/product');

        }
        catch (\Exception $e) {
            // Handle other exceptions
            return Inertia::location('/error');
        }
    }
}
