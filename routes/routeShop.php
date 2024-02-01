<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Shop\HomepageController;
use App\Http\Controllers\Shop\ProductController;

Route::get('/', [HomepageController::class, 'index'])->name('business.home');
Route::get('/{id}/overview', [ProductController::class, 'show'])->name('shop.product.show');

