<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Product;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;


class CartContoller extends Controller
{
    public function addItemToCart(Request $request)
    {
     
        $cart = $request->session()->get('cart', []);
        $product = Product::find($request->id);
        $user = Auth::user();
        $quantity = 1;
        $count = 0;

    //    Log::info($product->variant);//need to check the variant

        if (!$product) {
            return response()->json(['error' => 'Product not found'], 404);
        }

        $itemId = $request['id'];

        if (array_key_exists($itemId, $cart)) {
            // If the item exists, increase its quantity
            $cart[$itemId]['quantity'] += $quantity;
            $count= $count++;
        } else {
            // If the item doesn't exist, add it to the cart
            $cart[$itemId] = [
                'user_id' => $user->id, //user is not using in frontend
                'product_id' => $product->id,
                'variant_id' => null,
                'name' => $product->title,
                'quantity' => $quantity,
                'price' => $product->minimum_price,
                'image' => $product->photos[0]->path
                // You can add other item details here like name, price, etc.
            ];
            $count = $count++;
        }

        $request->session()->put('cart', $cart);
        Log::info($cart);
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
