<?php

namespace App\Http\Controllers\Shop;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Interfaces\ProfileRepositoryInterface;

class ProfileController extends Controller
{
    private $ProfileRepositoryInterface;

    public function __construct(ProfileRepositoryInterface $profileRepo)
    {
        return $this->ProfileRepositoryInterface = $profileRepo;
    }

    public function create()
    {
        $apiUrl = env('GET_ADDRESS_API');
        return Inertia::render('Shop/Profile/StepperProfile' , ['address_api' => $apiUrl]);
    }

    public function addressStore()
    {

    }

    public function contactStore()
    {

    }

    public function paymentStore()
    {
        
    }


}
