<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;


class DashboardController extends Controller
{
    public function index()
    {
        $notifications = Auth::user()->unreadNotifications;
        $products = Product::with('category', 'variants')->latest()->paginate(6);
        return Inertia::render('Seller/Dashboard/dashboard', ['products' => $products, 'notifications' => $notifications]);
    }
}
