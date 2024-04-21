<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use App\Events\OrderPlaced;
use App\Events\OrderPlacedEvent;
use App\Events\OrderReceivedEvent;
use App\Listeners\NotifyCustomerOrderPlaced;
use App\Listeners\NotifySellerOrderPlaced;
use App\Listeners\OrderPlacedListener;

// use App\Observers\OrderObserver;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        
        OrderPlacedEvent::class => [ //event
            NotifyCustomerOrderPlaced::class,  //1 listener (buyer)
            NotifySellerOrderPlaced::class //2 listener (seller)
          
        ],

       
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        //
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
