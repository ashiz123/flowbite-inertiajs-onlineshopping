<?php

namespace App\Interfaces;


interface ProductRepositoryInterface
{

    public function store($request);

    public function storePhoto($request, $product);

    

}

