<?php

namespace App\Listeners;

use App\Events\OrderPlacedEvent;
use App\Models\User;
use App\Notifications\OrderReceivedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NotifySellerOrderPlaced implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(OrderPlacedEvent $event): void
    {
        $order = $event->order;
        
        
        $admin = User::where('type', 'seller')
        ->where('email', 'ashiz@gmail.com')
        ->first();

        $admin->notify(new OrderReceivedNotification($order));

    }
}
