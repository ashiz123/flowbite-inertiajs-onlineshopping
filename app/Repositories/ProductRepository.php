<?php

namespace App\Repositories;
use App\Interfaces\ProductRepositoryInterface;
use App\Models\Product;
use App\Models\Stock;
use Illuminate\Support\Facades\Log;
use App\Models\Photo;
use App\Traits\PhotoStore;

class ProductRepository implements ProductRepositoryInterface
{

    use PhotoStore;

    public function store($validated)
    {
        $product = Product::create([
        'title' => $validated['title'],
        'description' => $validated['description'],
        'category_id' => $validated['category_id'],
        'variant' => $validated['variant'],
        'minimum_price' => $validated['minimum_price']
        ]);
        
        return $product;
    }


 public function storePhoto($request, $product)
    {
        Log::info($request);
        $file =  $request->file('avatar');
        $uploaded = $this->storeToFolder($file);
        
        $photo = new Photo();
        $photo->product_id = $product->id;
        $photo->path = $uploaded;
        $photo->save();
    }

   

}