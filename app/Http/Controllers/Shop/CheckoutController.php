<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\Log;
use App\Models\UserAddress;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App\Models\Stock;

use App\Interfaces\CheckoutRepositoryInterface;
use App\Interfaces\StockRepositoryInterface;



class CheckoutController extends Controller
{
    private $checkoutRepositoryInterface;
    private $stockRepositoryInterface;


    public function __construct(CheckoutRepositoryInterface $checkoutRepositoryInterface, StockRepositoryInterface $stockRepositoryInterface )
    {
        $this->checkoutRepositoryInterface = $checkoutRepositoryInterface;
        $this->stockRepositoryInterface = $stockRepositoryInterface;
    }

    public function create()
    {
        $apiUrl = env('GET_ADDRESS_API');
        $userAddress = UserAddress::where('user_id', Auth::user()->id)->first();
        return Inertia::render('Shop/Checkout/Checkout' , 
        [
            'address_api' => $apiUrl,
            'user_address' => $userAddress
    ]);
    }

    public function process(Request $request)
    {
        // $cartItems = $request->session()->get('cart', []);
        // $total_amount = $this->getTotalAmountOfOrder($cartItems);
       
    try{
        DB::beginTransaction();
        
        $cartItems = $request->session()->get('cart', []);
        $total_amount = $this->getTotalAmountOfOrder($cartItems);

        $order = $this->checkoutRepositoryInterface->orderConfirm($request, $total_amount);

        $this->checkoutRepositoryInterface->orderDetail($order, $cartItems);
     
        $this->stockRepositoryInterface->updateStock($cartItems);

        Session::forget('cart');
        
        
        DB::commit();

        // $currentDate = date('YmdHis');
        return response()->json(['redirect_to' => "/shop/thankyou"], 200);
    }

    catch(\Exception $e)
    {
        DB::rollBack();
        return "Transaction failed: " . $e->getMessage();
    }

   

    }

    



    public function getTotalAmountOfOrder($cartItems)
    {
        $total_amount = 0;
        if($cartItems != null)
        {
           foreach ($cartItems as $ci)
        {
            $sub_total = $ci['quantity'] * $ci['price'];
            $total_amount += $sub_total;
        }
        }   
        return $total_amount;
    }




    public function checkoutSuccess()
    {
        return inertia::render('Shop/Checkout/Thankyou');
    }



    public function addAddress(Request $request)
    {
        $this->checkoutRepositoryInterface->addCheckoutAddress($request);
    }

    
}
