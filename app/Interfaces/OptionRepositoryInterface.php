<?php

namespace App\Interfaces;


interface OptionRepositoryInterface
{
    public function storeOption($opt, $product);

    public function storeOptionFile($opt, $variant);

   
}