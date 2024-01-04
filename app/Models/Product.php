<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
Use App\Models\Variant;
Use App\Models\Size;
Use App\Models\Category;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $table = 'Products';

    protected $fillable = ['title', 'description', 'category_id', 'variant' ];

    public function variants(): HasMany
    {
        return $this->hasMany(Variant::class);
    }

    public function Category(): BelongsTo
    {
        return $this->belongsTo(Category::class); 
    }


    public function productVariants(){
        return $this->variants()->get();
    }


    public function sizes()
    {
        return $this->hasMany(Size::class);
    }

    public function categoryTitle()
    {
        return $this->category->title;
    }

    // public function colors()
    // {
    //     return $this->hasMany(Color::class);
    // }
}



 