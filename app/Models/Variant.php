<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

use App\Models\Product;
use App\Models\Photo;

class Variant extends Model
{
    use HasFactory;

    protected $fillable = ['quantity', 'price', 'sku'];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function photo(): HasOne
    {
        return $this->hasOne(Photo::class);
    }
}
