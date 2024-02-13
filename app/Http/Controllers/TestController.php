<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index()
    {
        return 'testing with sanctum';
    }


    public function testing()
    {
        return Inertia::render('testing');
    }


    public function customer()
    {
        return auth()->user();
    }
}
