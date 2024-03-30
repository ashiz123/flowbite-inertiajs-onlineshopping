<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

   
    public function definition(): array
    {
        return [
            'title' => $this->faker->name,
            'description'=> $this->faker->paragraph,
            'variant' => $this->faker->randomElement([0,1]),
            'category_id' => Category::factory()->create()->id,
            'minimum_price' => $this->faker->numberBetween(10, 1000)
         ];
    }
}
