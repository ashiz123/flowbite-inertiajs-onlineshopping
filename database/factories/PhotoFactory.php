<?php

namespace Database\Factories;

use App\Models\Photo;
use App\Models\Product;
use App\Models\Variant;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Photo>
 */
class PhotoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Photo::class;


    public function definition(): array
    {
        
        $imagePath = 'images/' . $this->faker->image('storage/app/public/images', 400, 300, null, false);

        return [
            'product_id' => Product::factory(),
            'variant_id' => null,
            'path' => $imagePath
            
        ];
    }
}
