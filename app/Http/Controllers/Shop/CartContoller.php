<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Product;
use App\Models\Variant;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;


class CartContoller extends Controller
{


    public function getVariantByAttribute(Request $request)
    {
        $color = $request['color'];
        $size = $request['size'];

        $variant = Variant::where('color', $color)
                            ->where('size', $size)
                            ->first();
                        
        return response()->json($variant);
      
    }




    public function addItemToCart(Request $request)
    {
        $productData = $request['product'];

        //if no cart_variant, than 
        $product_variant = $request['productVariant'];
       


        $cart = $request->session()->get('cart', []);
        $product = Product::find($productData['id']);
        $user = Auth::user();
        $quantity = 1;
        $count = 0;

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

      

        
        if($product_variant != null)
        {
            $itemId = $product_variant['id'];
        }else{
            $itemId = $product->id;
        }
      
       
        if (array_key_exists($itemId, $cart)) {
            // If the item exists, increase its quantity
            $cart[$itemId]['quantity'] += $quantity;
            $count= $count++;
        } else {
            // If the item doesn't exist, add it to the cart
            $cart[$itemId] = [
                'user_id' => $user->id, //user is not using in frontend
                'product_id' => $product->id,
                'variant' =>  $product_variant,
                'name' => $product->title,
                'quantity' => $quantity,
                'price' => $product->minimum_price,
                'image' => $product->photos[0]->path
               
                // You can add other item details here like name, price, etc.
            ];
            $count = $count++;
        }

        $request->session()->put('cart', $cart);
        return $cart;
       
    }   

    


    
    public function removeItemFromCart(Request $request)
    {
        $cart = $request->session()->get('cart', []);


        $itemId = $request['id'];
        if (array_key_exists($itemId, $cart)) {
            // If the item exists, increase its quantity
            if($cart[$itemId]['quantity'] >= 1)
            {
                $cart[$itemId]['quantity'] -= 1;
            }
           
        }

        $request->session()->put('cart', $cart);
        return $cart;

    }
}
