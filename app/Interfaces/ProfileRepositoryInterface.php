<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface ProfileRepositoryInterface
{
    public function storeAddress();

    public function storeContact();

    public function storePayment();

}