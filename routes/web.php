<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\OptionController;
use App\Http\Controllers\Admin\OrderController;
use App\Http\Controllers\Admin\TestController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*å
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__.'/auth.php';

// Include routes for the Admin concern
Route::prefix('shop')->group(function () {
    require __DIR__.'/routeShop.php';
});

// Include routes for the User concern
Route::prefix('seller')->group(function () {
    require __DIR__.'/routeSeller.php';
});



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//profile
Route::middleware('auth.seller')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
//end profile


//dashboard route
Route::middleware(['auth.seller', 'verified'])->prefix('dashboard')->controller(DashboardController::class)->group(function(){
    Route::get('', 'index')->name('dashboard');
});

// Route::prefix('profile')->controller(ProfileController::class->group(function(){
    
// }))


// category 
Route::middleware('auth.seller')->prefix('category')->controller(CategoryController::class)->group(function(){
    Route::get('/', 'index')->name('category');
    Route::get('/create', 'createCategory')->name('category_create');
    Route::post('/store', 'storeCategory')->name('category_store');
    Route::get('/edit', 'editCategory')->name('category_edit');
    Route::match(['put', 'patch'], '/update/{id}', 'updateCategory')->name('category.update');
    Route::delete('/delete/{id}', 'deleteCategory')->name('delete.category');
});
// end category


//product 
Route::middleware('auth.seller')->prefix('product')->controller(ProductController::class)->group(function(){
    Route::get('/', 'index')->name('product.index');
    Route::get('/create', 'createProduct')->name('product.create');
    Route::post('/store', 'storeProduct')->name('product.store');
    Route::get('/show/{id}', 'showProduct')->name('product.show');
    Route::get('/edit', 'editProduct')->name('product.edit');
    Route::match(['put', 'patch'], '/update/{id}', 'updateProduct')->name('product.update');
    Route::delete('/delete/{id}', 'deleteProduct')->name('product.delete');

});
//end product


//option
Route::middleware('auth.seller')->prefix('option')->controller(OptionController::class)->group(function(){
    Route::get('/create', 'create')->name('option.create');
    Route::post('/store', 'store' )->name('option.store');
    Route::get('/show/{id}', 'show')->name('option.show');
    Route::get('/addVariant/{productId}', 'addVariant')->name('option.add');
    Route::match(['put', 'patch'], '/updateVariant/{productId}', 'updateVariant')->name('option.update');
    Route::delete('/deleteVariant/{variantId}', 'deleteVariant' )->name('option.delete');
});
//end option



//orders
Route::middleware('auth.seller')->prefix('orders')->controller(OrderController::class)->group(function(){
    Route::get('', 'index')->name('orders.index');
});
//end orders



//error
Route::get('/error', function () {
    return Inertia::render('Errors/error');
})->name('error');

//end error

