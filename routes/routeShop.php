<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\Shop\HomepageController;

Route::get('/', [HomepageController::class, 'index'])->name('business.home');

