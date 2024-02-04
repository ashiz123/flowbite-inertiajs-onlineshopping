<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Shop\HomepageController;
use App\Http\Controllers\Shop\ProductController;
use App\Http\Controllers\Shop\UserController;

Route::get('/', [HomepageController::class, 'index'])->name('shop.index');
Route::get('product/{id}/overview', [ProductController::class, 'show'])->name('shop.product.show');

Route::get('show-register', [UserController::class, 'showRegisterForm'])->name('shop.user.showRegister');
Route::post('register', [UserController::class, 'register'])->name('shop.user.register');



Route::get('login', [UserController::class, 'login'])->name('shop.user.login');


Route::get('testing', [UserController::class, 'testing']);
