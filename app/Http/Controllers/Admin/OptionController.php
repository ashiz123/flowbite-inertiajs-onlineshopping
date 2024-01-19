<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Traits\PhotoStore;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Variant;
use App\Models\Photo;


 


class OptionController extends Controller
{
    use PhotoStore;
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

            if($variant->save())
             {
                $file =  $opt->avatar;
                $uploaded = $this->storeToFolder($file);
        
                $photo = new Photo();
                $photo->variant_id = $variant->id;
                $photo->path = $uploaded;
                $photo->save();
             }
            }
              
            return Inertia::location('/product');

        }
        catch (\Exception $e) {
            // Handle other exceptions
            return Inertia::location('/error'. ['error', $e]);
        }
    }

   //Route is in API
    public function show($id)
    {
        $variant = Variant::with('product', 'photo')->find($id);
        // return inertia::render('Options/ShowOption', ['variant' => $variant]);
        return response()->json([
            'variant' =>  $variant
        ]); 
    }

    public function addVariant($id)
    {
        try{
            $product = Product::with('variants.photo')->find($id);
            return Inertia::render('Options/AddOption', ['product' => $product]);
        }
        catch(\Exception $e)
        {
            return $e;
        }
     
    }

    public function updateVariant($id, Request $request)
    {
        dd($request);
      


    }

}
