<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController; //this is breeze controller
use App\Http\Controllers\Shop\CartContoller;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


use App\Http\Controllers\Shop\HomepageController;
use App\Http\Controllers\Shop\ProductController;
use App\Http\Controllers\Shop\UserController;
use App\Http\Controllers\Shop\ProfileController;



Route::middleware('guest')->group(function () {
    Route::get('show-register', [UserController::class, 'showRegisterForm'])->name('shop.user.showRegister');
    Route::get('show-login', [UserController::class, 'showLoginForm'])->name('shop.user.showLogin');

});


//AUTHENTICATION REDIRECT
Route::middleware(['auth.user.redirect'])->group(function(){
    Route::post('register', [RegisteredUserController::class, 'store'])->name('shop.user.register');
    Route::post('login', [AuthenticatedSessionController::class, 'store'])->name('shop.user.login');
});

//PAGES
Route::get('/', [HomepageController::class, 'index'])->name('shop.index');
Route::get('product/{id}/overview', [ProductController::class, 'show'])->name('shop.product.show');


//AUTHENTICATING CUSTOMER PAGES
Route::middleware(['auth.customer'])->group(function(){
   Route::post('/logout', [UserController::class, 'logout'])->name('shop.user.logout');
   Route::post('/add-item-to-cart', [CartContoller::class, 'addItemToCart'])->name('cart.add');
 //profile route start
  Route::get('/profile', [ProfileController::class, 'create'])->name('shop.profile.create');

  
});











