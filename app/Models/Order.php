<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Status;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\OrderDetails;

class Order extends Model
{
    use HasFactory;

    protected $primaryKey = 'order_number'; 
    public $incrementing = false;

    protected $fillable = ['customer_id', 'status_id', 'total_amounts'];
    

    public function customer():BelongsTo
    {
        return $this->belongsTo(User::class, 'customer_id', 'id');
    }

    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class, 'status_id', 'id');
    }

    public function orderDetails(): HasMany
    {
        return $this->hasMany(OrderDetails::class, 'order_number');
    }



  

    
}
