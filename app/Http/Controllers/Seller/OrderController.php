<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\OrderDetails;
use App\Models\Product;
use App\Models\Status;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;


class OrderController extends Controller
{

  
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



    public function showProductOfOrder($orderDetailId)
    {
      // $product = Product::with('category', 'variants')->find($id);
      // return $product;

      $orderDetail = OrderDetails::with('product', 'variant')->find($orderDetailId);
      return $orderDetail;
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
