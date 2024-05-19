<?php

namespace App\Http\Controllers\Seller;
use Illuminate\Support\Facades\DB;

use App\Http\Controllers\Controller;
use App\Traits\PhotoStore;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Product;
use App\Models\Variant;
use App\Models\Photo;
use App\Models\Stock;
use App\Interfaces\OptionRepositoryInterface;
use Illuminate\Support\Facades\Log;
use App\Interfaces\StockRepositoryInterface;

class OptionController extends Controller
{

    protected $OptionRepositoryInterface;
    protected $StockRepositoryInterface;
    use PhotoStore;


    public function __construct(OptionRepositoryInterface $OptionRepositoryInterface , StockRepositoryInterface $StockRepositoryInterface)
    {
        $this->middleware('log.errors');
        $this->OptionRepositoryInterface = $OptionRepositoryInterface;
        $this->StockRepositoryInterface = $StockRepositoryInterface;
    }
    
    public function create()
    {
        $product = Product::where('id', 1)->first();
        return Inertia::render('Seller/Options/CreateOption', ['product' => $product]);
    }
    

    public function store(Request $request)
    {
        
        $product = (object)$request->product;
        $options = $request->options;


        try{
            DB::beginTransaction();
            foreach($options as $option)
            {
             $singleOption = (object)$option; //converting array to object
             $quantity = $singleOption->quantity;
             $variant = $this->OptionRepositoryInterface->storeOption($singleOption, $product);

                if($variant)
                {
                    $this->StockRepositoryInterface->createStock($variant, $quantity );
                }
            }
            DB::commit();
              
            return Inertia::location('/product');

        }
        catch (\Exception $e) {
            // Handle other exceptions
            Log::info($e->getMessage());
            DB::rollBack();
            return Inertia::location('/error'. ['error', $e]);
        }
    }



   //Route is in API
    public function show($id)
    {
        $variant = Variant::with('product', 'photo')->find($id);
        // return inertia::render('Options/ShowOption', ['variant' => $variant]);
        return response()->json([
            'variant' =>  $variant
        ]); 
    }

    

    public function addVariant($id)
    {
        try{
            $product = Product::with('variants.photo')->find($id);
            return Inertia::render('Seller/Options/AddOption', ['product' => $product]);
        }
        catch(\Exception $e)
        {
            return $e;
        }
     
    }

    public function updateVariant( $id, Request $request)
    {
        $requestAsObject = (object)$request->variant;

        $variant = new Variant;
        $variant->product_id = $id;
        $variant->sku = $requestAsObject->sku;
        $variant->title = $requestAsObject->title;
        $variant->size = $requestAsObject->size;
        $variant->color = $requestAsObject->color;
        $variant->origin = $requestAsObject->origin;
        $variant->type = $requestAsObject->type;

        $variant->quantity = $requestAsObject->quantity;
        $variant->price = $requestAsObject->price;

        if($variant->save())
        {
           $file =  $requestAsObject->avatar;
           $uploaded = $this->storeToFolder($file);
   
           $photo = new Photo();
           $photo->variant_id = $variant->id;
           $photo->path = $uploaded;
           $photo->save();
        }
    }

    public function getProduct($variantId)
    {
        $product = Variant::with('product')->find($variantId);
        return response()->json($product);
        // Log::info($product);
    }

    public function deleteVariant($id)
    {
        DB::table('variants')->where('id', $id)->delete();

    }

}
