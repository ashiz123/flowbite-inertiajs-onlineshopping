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


class CartController extends Controller
{


    public function getVariantByAttribute(Request $request)
    {
        $color = $request['color'];
        $size = $request['size'];
        $productId = $request['product_id'];
     

        $variant = Variant::where('product_id', $productId)
                            ->where('color', $color)
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

        $itemId = $this->getItemId($product_variant, $product->id);
      
       
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
        return array_values($cart);
       
    }   


    public function getCartItems()
    {
        $cart = Session::get('cart');
        return array_values($cart);

    }

    


    
    public function removeItemFromCart(Request $request)
    {
           
        $cart = $request->session()->get('cart', []); // Retrieve cart from session, default to empty array
        $product_id = $request['id'];

        // to get the id of cart
        foreach ($cart as $item) {
         if($item['product_id']  == $product_id)
          {
           $itemId = $this->getItemId($item['variant'], $request['id']);
          }else{
            continue;
          }
         
        }

        $updatedCart = $this->removeItemFromSession($cart, $itemId);
        $request->session()->put('cart', $updatedCart);
        return array_values($updatedCart);
    }




  //to remove item from cart
    public function removeItemFromSession($cart, $itemId)
    {
       unset($cart[$itemId]);
        return $cart;
    }



    //to get item id of cart which can be product id or variant id
    public function getItemId($variant, $productId)
    {
        if($variant)
        {
          $itemId = $variant['id'];
        }else{
          $itemId = $productId;
        }

        return $itemId;
    }


    public function increaseItemInCart($productId, Request $request)
    {
        $cart = $request->session()->get('cart', []); 
        $itemId = $this->getItemId($request['variant'], $productId);


        if (array_key_exists($itemId, $cart)) {
            // If the item exists, increase its quantity
            $cart[$itemId]['quantity'] += 1 ;
            $request->session()->put('cart', $cart);
            return array_values($cart);
        }
    }


    public function decreaseItemInCart($productId, Request $request)
    {
        $cart = $request->session()->get('cart', []); 
        $itemId = $this->getItemId($request['variant'], $productId);


        if (array_key_exists($itemId, $cart)) {
            // If the item exists, increase its quantity
            if($cart[$itemId]['quantity'] > 1)
            {
                $cart[$itemId]['quantity'] -= 1 ;
             }
            else
            {
             $cart =  $this->removeItemFromSession($cart,$itemId);
            }
            $request->session()->put('cart', $cart);
            return array_values($cart);
            
        }
    }



      
  

       
    
}
