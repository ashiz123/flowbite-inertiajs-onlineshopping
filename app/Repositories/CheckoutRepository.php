<?php


namespace App\Repositories;

use App\Interfaces\CheckoutRepositoryInterface;
use App\Models\Order;
use App\Models\OrderDetails;
use App\Models\UserAddress;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;


class CheckoutRepository implements CheckoutRepositoryInterface
{

    

    public function orderConfirm($request, $total_amount)
    {
  
      $order = new Order();
      $order->order_number = date('YmdHis');
      $order->customer_id = Auth::user()->id;
      $order->status_id = 1;
      $order->total_amounts = $total_amount;
      $order->save();
      return $order;
      
    }

    public function orderDetail( $order, $cartItems)
    {
      foreach($cartItems as $cartItem)
      {
        $orderDetails = new OrderDetails();
        $orderDetails->order_number = $order['order_number'];
        $orderDetails->product_id = $cartItem['product_id'];
        if($cartItem['variant'])
        {
          $orderDetails->variant_id = $cartItem['variant']['id'];
        }else{
          $orderDetails->variant_id = null;
        }
       
        $orderDetails->order_quantity = $cartItem['quantity'];
        $orderDetails->save();
        Log::info($orderDetails);
       } 
       return ;
     }

   


    public function addCheckoutAddress($address)
    {
       $userAddress = new UserAddress();
       $userAddress->user_id = Auth::user()->id;
       $userAddress->postal_code = $address->postcode;
       $userAddress->address_type = 'home';  //home address//outdoor address
       $userAddress->address = $address->housenumber;
       $userAddress->city = $address->city;
       $userAddress->state = $address->reigion;
       $userAddress->country = $address->country;
       $userAddress->save();

       Log::info($userAddress);

       return $userAddress;

    }

    public function handleShippingMethod()
    {
      return 'handle shipment';
    }

    public function handlePayment()
    { 
      return 'handle payment';
    }

    public function updateInventory()
    {
      return 'update inventory';
    }

    public function handleError()
    {
        
    }

}