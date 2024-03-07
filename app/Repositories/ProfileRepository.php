<?php


namespace App\Repositories;
use App\Interfaces\ProfileRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use App\Models\User;


class ProfileRepository implements ProfileRepositoryInterface
{
    

    public function storeAddress()
    {
        
    }

    public function storeContact()
    {
        
    }

    public function storePayment()
    {

    }
}