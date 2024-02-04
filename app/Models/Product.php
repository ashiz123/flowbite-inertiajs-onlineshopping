<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
Use App\Models\Variant;
Use App\Models\Photo;
Use App\Models\Category;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;


class Product extends Model
{
    use HasFactory;

    protected $table = 'Products';

    protected $fillable = ['title', 'description', 'category_id', 'variant', 'minimum_price' ];

    public function variants(): HasMany
    {
        return $this->hasMany(Variant::class);
    }

    public function Category(): BelongsTo
    {
        return $this->belongsTo(Category::class); 
    }


   public function photo(): HasOne
   {
    return $this->hasOne(Photo::class);
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



 