<?php

namespace App\Interfaces;


interface ProductRepositoryInterface
{

    public function store($request);

    public function storeProductStock($request, $product);

    public function storePhoto($request, $product);

    public function storeVariants();

}

