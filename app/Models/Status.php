<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Order;

class Status extends Model
{
    use HasFactory;

    protected $table = 'status';

    protected $fillable = ['title'];


    public function orders():HasMany
    {
        return $this->hasMany(Order::class);
    }
    



}
