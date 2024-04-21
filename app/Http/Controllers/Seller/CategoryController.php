<?php

namespace App\Http\Controllers\Seller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
Use App\Models\Category;
use Illuminate\Support\Facades\Log;

class CategoryController extends Controller
{

    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Seller/Category/Categories', ['categories' => $categories]);
    }
    
    public function createCategory()
    {
        $categories = Category::where('publish', 1)->latest()->get();
        return Inertia::render('Seller/Category/CreateCategory', ['categories' => $categories]);
    }

    public function storeCategory(Request $request)
    {
        $parent_id = (int)$request['parent_id'];   

        $attribute = ['title' => $request['title'], 
        'description' => $request['description'], 
        'publish'=> $request['publish'], 
        'parent_id' => $parent_id
        ];
            
        $this->validate(request(), [ 
            'title'   => 'required',
            'description'    => 'required',
            'publish' => 'required',
            'parent_id' => 'required',
        ], [], $attribute);

        Category::create($attribute);
        return to_route('category');
    }


    public function updateCategory($id, Request $request)
    {

        $parent_id = (int)$request['parent_id'];   

        $attribute = ['title' => $request['title'], 
        'description' => $request['description'], 
        'publish'=> $request['publish'], 
        'parent_id' => $parent_id
        ];
            
        $this->validate(request(), [ 
            'title'   => 'required',
            'description'    => 'required',
            'publish' => 'required',
            'parent_id' => 'required',
        ], [], $attribute);

        
        Category::where('id', $id)->update($attribute);
        return to_route('category');


        
    }

    public function getParentByChild($parentId)
    {
        if($parentId != 0)
        {
            $parent = Category::where('id', $parentId)->first()->title;
        }else {
            $parent = null;
        }
      
      
      return $parent;
    }

    public function deleteCategory($id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return to_route('category');
    }
}
