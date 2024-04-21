<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Product;
use App\Models\Status;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;


class OrderController extends Controller
{

    public function __construct()
    {
       
    }
    public function index()
    { 
        $orders = Order::with(['customer', 'status'])->latest()->get();
        $status = Status::all();
        return Inertia::render('Seller/Orders/Orders', ['orders' => $orders, 'status' => $status] );
    }



    public function showOrder($orderNumber)
    {
        $order = Order::where('order_number', $orderNumber)->with('orderDetails')->first();
        return Inertia::render('Seller/Order/OrderPage', ['order' => $order]);
    } 

    public function showProductOfOrder($id)
    {
      Log::info($id);
      $product = Product::with('category')->find($id);
      Log::info($product);
      return $product;
    }


    public function updateStatus($orderNumber, Request $request)
    {
      
      $order = Order::where('order_number', $orderNumber)->first();
      $status = $request->json()->all();
      $order->update([
        'status_id' => $status[0]
      ]);
        return $order->status;
     }

    
}
