<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $products = Product::with('category', 'variants')->latest()->paginate(6);
        return Inertia::render('Dashboard/dashboard', ['products' => $products]);
    }
}
