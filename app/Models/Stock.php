<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Variant;


class Stock extends Model
{
    use HasFactory;

    public function stockable()
    {
        return $this->morphTo();
    }


    // public function product()
    // {

    // }

    


    
}
