<?php

namespace App\Listeners;

use App\Events\OrderPlacedEvent;  //event
use App\Models\Notification;
use App\Models\User;
use App\Notifications\OrderPlacedNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;


class NotifyCustomerOrderPlaced implements ShouldQueue
{
    /**
     * Create the event listener.
     */

  


    public function __construct()
    {
        
    }

    /**
     * Handle the event.
     */
    public function handle(OrderPlacedEvent $event): void
    {
        $order = $event->order;
        $customer = User::find($order->customer_id);
        
        $customer->notify(new OrderPlacedNotification($order));
    }
}
