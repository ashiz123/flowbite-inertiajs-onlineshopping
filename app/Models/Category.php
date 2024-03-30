<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{
    use HasFactory;

    protected $table = 'categories';

    protected $fillable = ['title', 'description', 'publish', 'parent_id'];

    public function parent():BelongsTo
    {
        return $this->belongsTo(self::class, 'parent_id', 'id');
    }

    public function getParent()
    {
        return $this->parent()->get();
    }

     public function titleOfParentId()
    {
        return $this->getParent()->first()->title;
    }

    public function children(): HasMany
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    public function products()
    {
        return $this->hasMany(Product::class);
    }

   


    public function testing()
    {
        return 'testing';
    }

    
}
