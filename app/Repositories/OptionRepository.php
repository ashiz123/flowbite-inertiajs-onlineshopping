<?php

namespace App\Repositories;
use App\Interfaces\OptionRepositoryInterface;
use App\Models\Variant;
use App\Models\Stock;
use App\Models\Photo;
use App\Traits\PhotoStore;
use GuzzleHttp\Psr7\Response;
use Illuminate\Http\RedirectResponse;

class OptionRepository implements OptionRepositoryInterface
{

    use PhotoStore;

    public function storeOption($opt, $product)
    {
        
        $variant = new Variant;
        $variant->product_id = $product->id;
        $variant->sku = $opt->sku;
        $variant->title = $opt->title;
        $variant->size = $opt->size;
        $variant->color = $opt->color;
        $variant->origin = $opt->origin;
        $variant->type = $opt->type;
        $variant->quantity = $opt->quantity;
        $variant->price = $opt->price;
        if($variant->save()){
             $this->storeOptionFile($opt, $variant);
        }

        return $variant;

    }

    public function storeOptionFile($opt, $variant): void
    {
        $file =  $opt->avatar;
        $uploaded = $this->storeToFolder($file);

        $photo = new Photo();
        $photo->variant_id = $variant->id;
        $photo->path = $uploaded;
        $photo->save();

        
    }



    

}