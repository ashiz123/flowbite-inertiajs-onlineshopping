<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Variant;
use App\Models\Product;
use Illuminate\Support\Facades\Log;

class OrderDetails extends Model
{
    use HasFactory;

    protected $table = 'order_details';

    protected $primaryKey = 'id';

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function variant(): BelongsTo
    {
        return $this->belongsTo(Variant::class, 'variant_id');
    }
}
