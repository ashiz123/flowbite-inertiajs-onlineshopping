<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

use App\Models\Category;
use App\Models\Product;
use App\Models\Photo;
use App\Models\Stock;


use App\Traits\PhotoStore;  //using trait
use App\Http\Requests\ProductFormRequest; //using request for validation
use Illuminate\Support\Facades\Log;
use App\Interfaces\ProductRepositoryInterface;
use App\Interfaces\StockRepositoryInterface;


class ProductController extends Controller
{

   
    use PhotoStore;

    private $ProductRepositoryInterface;
    private $StockRepositoryInterface;


    public function __construct(ProductRepositoryInterface $ProductRepositoryInterface, StockRepositoryInterface $StockRepositoryInterface)
    {
        $this->ProductRepositoryInterface = $ProductRepositoryInterface;
        $this->StockRepositoryInterface = $StockRepositoryInterface;
    }

    
    public function index()
    {
      
      $products = Product::with('category')->get();
      $categories  = Category::all();
      return Inertia::render('Seller/Products/Products', ['products' => $products, 'categories' => $categories]);
    }
    

    public function createProduct()
    {
        
        $categories  = Category::all();
        return Inertia::render('Seller/Products/CreateProduct', ['categories' => $categories,
        'imageUrl' => asset('images/dummy.jpg'),
    
    ]); 
    }

    


    public function storeProduct(ProductFormRequest $request)
    {           
        try{
            DB::beginTransaction();

            $product = $this->ProductRepositoryInterface->store( $request);
            $quantity = $request->quantity;
           
            if($product)
            {
                $this->ProductRepositoryInterface->storePhoto($request, $product);
            }

            if($product->variant === "0")
            {
                $this->StockRepositoryInterface->createStock($product, $quantity);
            }

            DB::commit();
            
            
            //To display variant option if variant checkbox checked otherwise go to product page.
            if($product->variant == "1") 
            {
              return Inertia::render('Seller/Options/CreateOption', ['product' => $product]);
            }

        }

        catch(\Exception $e){
            Log::info($e->getMessage());
            DB::rollBack();
            return Inertia::render('Errors/Integrity', ['error' => $e->getMessage()]);
    }
    }



    public function showProduct($id)
    {
        
        try{
            $product = Product::with('variants', 'category', 'photos')->find($id);
            return Inertia::render('Seller/Products/ShowProduct', ['product' => $product]);
        }
        catch(\Exception $e){   
            return Inertia::render('Errors/Integrity', ['error' => $e->getMessage()]);
       }
       
    }   

    public function editProduct()
    {

    }

    public function updateProduct()
    {

    }

    public function deleteProduct()
    {
        
    }

   

    public function createAttribute()
    {
        // $product = Product::find(request('product_id'));
        // $variants = Variants::all();
        // return Inertia::render('Products/CreateAttribute', ['attributes' => $variants]);
    }



    
    
    public function storeAttribute(Request $request )
    {
       
        //     $checkedAttribute = array(); //new array
        //     foreach ($request->variants as $key => $value) {
        //         if($value == 1){
        //             array_push($checkedAttribute, $key);
        //         }
        //      }
    
        //     $productId = $request->product_id;
        //     $product = Product::find($productId);
        //     try{
        //     if($product->variants()->attach($checkedAttribute));
        //     return Inertia::render('Variant/Template', ['product'=> $product, 'variants'=> $product->productVariants()]);
        //     // return to_route('product.variant.create');
        //     }

        //     catch(\Exception $e){   
        //         return to_route('product.create');
        //   }
        }

      

        


       
      

    
}
