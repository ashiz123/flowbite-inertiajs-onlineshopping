<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Category;
use App\Models\Product;
use App\Models\Variant;


class ProductController extends Controller
{
    public function index()
    {
      
      $products = Product::with('category')->get();
      $categories  = Category::all();
      return Inertia::render('Products/Products', ['products' => $products, 'categories' => $categories]);
    }
    

    public function createProduct()
    {
        
        $categories  = Category::all();
        return Inertia::render('Products/CreateProduct', ['categories' => $categories,
        'imageUrl' => asset('images/dummy.jpg'),
    
    ]);
    }

    public function storeProduct(Request $request)
    {
       
        $validated = $request->validate([
            'title' => 'required|unique:products|max:255',
            'description' => 'required',
            'category_id'  => 'required',
            'variant' => 'required'
        ]);
        $variants = Variant::all();
        
        try{
            $product = Product::create($validated);
            return Inertia::render('Options/CreateOption', ['product' => $product]);
        }

        catch(\Exception $e){   
              return Inertia::render('Errors/Integrity', ['error' => $e->getMessage()]);
        }
 
    }

    public function showProduct($id)
    {
        $product = Product::with('variants', 'category')->find($id);
         return Inertia::render('Products/EditProduct', ['product' => $product]);
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
        $variants = Variants::all();
        return Inertia::render('Products/CreateAttribute', ['attributes' => $variants]);
    }



    
    
    public function storeAttribute(Request $request )
    {
       
            $checkedAttribute = array(); //new array
            foreach ($request->variants as $key => $value) {
                if($value == 1){
                    array_push($checkedAttribute, $key);
                }
             }
    
            $productId = $request->product_id;
            $product = Product::find($productId);
            try{
            if($product->variants()->attach($checkedAttribute));
            return Inertia::render('Variant/Template', ['product'=> $product, 'variants'=> $product->productVariants()]);
            // return to_route('product.variant.create');
            }

            catch(\Exception $e){   
                return to_route('product.create');
          }
        }

        public function createVariant()
        {

            return  Inertia::render('Variant/Template');
        }

        


       
      

    
}
