<?php

namespace App\Http\Middleware;

use App\Providers\RouteServiceProvider;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;


class IsUserSellerOrCustomer
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    // public function handle(Request $request, Closure $next, string ...$guards): Response
    // {
    //     $guards = empty($guards) ? [null] : $guards;

    //     foreach ($guards as $guard) {
    //         if (Auth::guard($guard)->check()) {
    //             return redirect(RouteServiceProvider::HOME);
    //         }
    //     }

    //     return $next($request);
    // }

    public function handle(Request $request , Closure $next)
    {
        if(Auth::check())
        {
            $user = Auth::user();
            if($user->isSeller()){
                return redirect(RouteServiceProvider::HOME);
            }elseif($user->isCustomer())
            {
                return redirect(RouteServiceProvider::SHOP);
            }
        }
        return $next($request);
    }
}
