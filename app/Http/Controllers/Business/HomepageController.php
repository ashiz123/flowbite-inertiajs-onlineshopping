<?php

namespace App\Http\Controllers\Business;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{
   public function index()
   {
    return Inertia::render('Business/Index');
   }
}
