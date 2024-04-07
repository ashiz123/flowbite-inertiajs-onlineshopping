<?php


namespace App\Repositories;

use App\Interfaces\StockRepositoryInterface;
use App\Models\Product;
use App\Models\Stock;
use App\Models\Variant;
use Illuminate\Support\Facades\Log;

class StockRepository implements StockRepositoryInterface
{
    public function createStock($productOrVariant , $quantity) : void
    {
        $stock = new Stock();
        $stock->quantity = $quantity; 
        $productOrVariant->stocks()->save($stock);
    }

    public function updateStock($cartItems): void
    {
        foreach($cartItems as $cartItem)
        {
            
            if($cartItem['variant'] === null)
            {
                $cart_product_id = $cartItem['product_id'];
                $product = Product::find($cart_product_id);
                $stock = Stock::where('stockable_id', $product->id)
                                ->where('stockable_type', get_class($product))   
                                ->first();
            
                $stock->quantity = $stock->quantity - $cartItem['quantity'];
            }else
               {
                $cart_variant_id  = $cartItem['variant']['id'];
                $variant = Variant::find($cart_variant_id);
                $stock = Stock::where('stockable_id', $cart_variant_id)
                                ->where('stockable_type', get_class($variant))   
                                ->first();
                $stock->quantity = $stock->quantity - $cartItem['quantity'];

               }
            
              $stock->save();
            
           
        }
    }
 
   
}