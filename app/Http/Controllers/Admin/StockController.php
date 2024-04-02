<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Stock;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StockController extends Controller
{
    public function index()
    {
        // $products = Product::with('getAllStocks')->get();
        $stocks = Stock::with('stockable')->get();
        return Inertia::render('Seller/Stocks/StockIndex', ['stocks' => $stocks]);
    }
}
