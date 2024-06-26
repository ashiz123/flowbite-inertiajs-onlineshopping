<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController; //this is breeze controller
use App\Http\Controllers\Shop\CartController;
use App\Http\Controllers\Shop\CheckoutController;
use App\Http\Controllers\Shop\FilterController;
use Illuminate\Support\Facades\Route;



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

//PRODUCT
// Route::prefix('product')->controller(ProductController::class)->group(function(){
//   Route::get('/{id}/overview}', 'show')->name('shop.product.show');
//   Route::get('/{color}/color', 'getSizesByColor')->name('shop.product.color');
// });


Route::get('product/{id}/overview', [ProductController::class, 'show'])->name('shop.product.show');
Route::get('/product_id/{productId}/color/{color}', [ProductController::class, 'getSizesByColor'])->name('shop.product.color');
Route::get('product_id/{productId}/size/{size}', [ProductController::class, 'getColorsBySize' ])->name('shop.product.size');

//product filter
Route::get('/filterBy', [FilterController::class, 'filterBy'])->name('filter.name');

//AUTHENTICATING CUSTOMER PAGES
Route::middleware(['auth.customer'])->group(function(){
   Route::post('/logout', [UserController::class, 'logout'])->name('shop.user.logout');
   Route::post('/get-variant-by-attribute', [CartController::class, 'getVariantByAttribute'])->name('cart.getVariantByAttribute');
   Route::post('/add-item-to-cart', [CartController::class, 'addItemToCart'])->name('cart.add');
   Route::get('/get-cart-items', [CartController::class, 'getCartItems'])->name('cart.get');
   Route::delete('/delete-cart-item/{id}', [CartController::class, 'removeItemFromCart'])->name('cart.delete');
   Route::match(['put', 'patch'], '/increase-item-in-cart/{productId}', [CartController::class, 'increaseItemInCart'])->name('cart.item.increase');
   Route::match(['put', 'patch'], '/decrease-item-in-cart/{productId}',[CartController::class, 'decreaseItemInCart'])->name('cart.item.decrease');
 //profile route start

  // Route::get('/profile/create', [ProfileController::class, 'create'])->name('shop.profile.create');
  // Route::post('/profile/address/store', [ProfileController::class, 'store'])->name('profile.address.store');
  // Route::post('/profile/contact/store', [ProfileController::class, 'store'])->name('profile.address.store');
  // Route::post('/profile/payment/store', [ProfileController::class, 'store'])->name('profile.address.store');


  //checkout start
  Route::get('/checkout/create', [CheckoutController::class, 'create'])->name('shop.checkout.create');
  Route::post('/checkout/process', [CheckoutController::class, 'process'])->name('shop.checkout.process');
  
  //checkout address
  Route::post('/checkout/add/address', [CheckoutController::class, 'addAddress'])->name('shop.checkout.address');
  Route::get('/thankyou', [CheckoutController::class, 'checkoutSuccess'])->name('checkout.success');


  
});













