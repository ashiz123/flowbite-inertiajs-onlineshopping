<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Seller\OptionController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\TestController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::get('/testingonly', [TestController::class, 'testing'])->name('api.testing');

Route::post('/register', [AuthController::class, 'register'])->name('user.register');
Route::post('/login', [AuthController::class, 'login'])->name('user.login');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:sanctum')->group(function(){
    Route::delete('/logout', [AuthController::class, 'logout'])->name('user.logout');
    Route::get('/get-user', [AuthController::class, 'getUser' ])->name('user.logout');
});



Route::get('/option/{id}', [OptionController::class, 'show'])->name('option.show');



// Route::middleware('auth:sanctum')->group(function () {
//     Route::get('/option/{id}', [OptionController::class, 'show'])->name('option.show');
// });