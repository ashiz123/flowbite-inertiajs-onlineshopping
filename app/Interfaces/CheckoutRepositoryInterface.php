<?php

namespace App\Interfaces;

use App\Models\Order;
use Illuminate\Http\Client\Request;



interface CheckoutRepositoryInterface
{
    public function orderConfirm($order, $total_amount );

    public function orderDetail( $order, $cartItems);

    public function addCheckoutAddress($address);

    public function handleShippingMethod();

    public function handlePayment();

    public function updateInventory();

    public function handleError();

}