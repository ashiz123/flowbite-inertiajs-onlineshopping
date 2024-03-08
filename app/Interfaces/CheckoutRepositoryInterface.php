<?php

namespace App\Interfaces;


interface CheckoutRepositoryInterface
{
    public function orderConfirm();

    public function handleShippingMethod();

    public function handlePayment();

    public function updateInventory();

    public function handleError();

}