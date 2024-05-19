<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

use App\Models\Product;
use App\Models\Photo;
use App\Models\OrderDetails;

class Variant extends Model
{
    use HasFactory;

    protected $fillable = ['quantity', 'price', 'sku'];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function photos(): HasMany
    {
        return $this->hasMany(Photo::class);
    }


    //distinct() function use to retrieve data for once if duplicated
    public function ScopeSizesByColor($query, $color)
    {
        return $query->where('color', $color)->distinct()->pluck('size');
    }

    public function ScopeColorsBySize($query, $size)
    {
        return $query->where('size', $size)->distinct()->pluck('color');
    }


    public function stocks()
    {
        return $this->morphMany('App\Models\Variant', 'stockable');
    }

   
}
