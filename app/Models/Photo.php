<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Product;

class Photo extends Model
{
    use HasFactory;

    protected $table =  'photos';

    protected $fillable = [];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function getImagePath()
    {
        return $this->path; 
    }

    
}
