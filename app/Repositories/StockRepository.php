<?php


namespace App\Repositories;

use App\Interfaces\StockRepositoryInterface;
use App\Models\Product;
use App\Models\Stock;
use Illuminate\Support\Facades\Log;

class StockRepository implements StockRepositoryInterface
{
    public function createStock($productOrVariant , $quantity) : void
    {
        $stock = new Stock();
        $stock->quantity = $quantity; 
        $productOrVariant->stocks()->save($stock);
    }

    public function updateStock($cartItems)
    {
        foreach($cartItems as $cartItem)
        {
            Log::info($cartItem);
            $cart_product_id = $cartItem['product_id'];
            $product = Product::find($cart_product_id);
             $stock = Stock::where('stockable_id', $product->id)
                            ->where('stockable_type', get_class($product))   
                            ->first();
        
            $stock->quantity = $stock->quantity - $cartItem['quantity'];
            $stock->save();
            Log::info($stock);
           
        }
    }
 
   
}