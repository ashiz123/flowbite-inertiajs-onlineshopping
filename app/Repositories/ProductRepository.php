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

    public function store($request)
    {
        $product = Product::create([
        'title' => $request->input('title'),
        'description' => $request->input('description'),
        'category_id' => $request->input('category_id'),
        'variant' => $request->input('variant'),
        'minimum_price' => $request->input('minimum_price')
        ]);
        
        return $product;
    }



    public function storeProductStock($request, $product)
    {
        $stock = new Stock();
        $stock->quantity = $request->quantity; 
        $product->stocks()->save($stock);
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

    public function storeVariants()
    {
        
    }

}