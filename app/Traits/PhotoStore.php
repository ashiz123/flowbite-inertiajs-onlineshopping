<?php

namespace App\Traits;
use Illuminate\Http\Request;

trait PhotoStore
{
    public function storeToFolder($file)
    {
        $ext = $file->getClientOriginalExtension();
        $filename = uniqid() . '.' . $ext;
        return $file->storeAs('images', $filename , 'public');
    }

}
