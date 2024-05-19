<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use App\Models\Product;


class FilterController extends Controller
{
    public function filterBy(Request $request)
    { 
       
       $name = $request['search'];
      if($request->has('color'))
       {
          $color = $request['color'];
          $filteredProduct = Product::with('photos')->byName($name)->whereHas('variants', function($query) use($color) {
          $query->where('color', $color);
          })->get();
        
       }else{
           $filteredProduct =  Product::with('photos')->byName($name)->get();
       }
       
       return Inertia::render('Shop/Filter/Filter', ['filteredProduct' => $filteredProduct]);
    }

  




   
}
