<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface StockRepositoryInterface
{
   public function createStock($productOrVariant, $quantity);

   public function updateStock($cartItems);

  

}
 
