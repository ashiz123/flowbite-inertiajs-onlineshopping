<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use App\Models\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

use Illuminate\Http\JsonResponse;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller


{
    public function getAllNotifications():Response
    {
        $notifications = Auth::user()->notifications;
        return Inertia::render('Seller/Notifications/AllNotifications', ['notifications' => $notifications]);
    }





    public function onRead($id) : JsonResponse
    {
        $user = Auth::user();
        $notification = $user->notifications()->findOrFail($id);
        $notification->markAsRead();
        return response()->json($notification);
     }
}
