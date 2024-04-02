<?php

namespace App\Providers;


use Illuminate\Support\ServiceProvider;

use App\Repositories\UserRepository;
use App\Interfaces\UserRepositoryInterface;

use App\Repositories\ProfileRepository;
use App\Interfaces\ProfileRepositoryInterface;

use App\Repositories\OrderRepository;
use App\Interfaces\OrderRepositoryInterface;

use App\Repositories\CheckoutRepository;
use App\Interfaces\CheckoutRepositoryInterface;

use App\Interfaces\ProductRepositoryInterface;
use App\Repositories\ProductRepository;

use App\Interfaces\OptionRepositoryInterface;
use App\Repositories\OptionRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(UserRepositoryInterface::class, UserRepository::class);
        $this->app->bind(ProfileRepositoryInterface::class, ProfileRepository::class);
        $this->app->bind(OrderRepositoryInterface::class, OrderRepository::class);
        $this->app->bind(CheckoutRepositoryInterface::class, CheckoutRepository::class);
        $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
        $this->app->bind(OptionRepositoryInterface::class, OptionRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
