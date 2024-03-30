<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Variant>
 */

class VariantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {


        // dd([
        //     'product' => 1,
        //     'sku' => $this->faker->unique()->uuid,
        //     'title' => $this->faker->name,
        //     'size' => $this->faker->randomElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
        //     'color' => $this->faker->safeColorName(),
        //     'type' => $this->faker->name,
        //     'origin' => $this->faker->randomElements(['Nepal', 'India', 'UK', 'USA']),
        //     'quantity' => $this->faker->numberBetween(0, 100),
        //     'price' => $this->faker->numberBetween(50, 1000)
        // ]);


        return [
            'product_id' => Product::factory(),
            'sku' => $this->faker->unique()->uuid,
            'title' => $this->faker->name,
            'size' => $this->faker->randomElement(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
            'color' => $this->faker->safeColorName(),
            'type' => $this->faker->name,
            'origin' => $this->faker->randomElement(['Nepal', 'India', 'UK', 'USA']),
            'quantity' => $this->faker->numberBetween(0, 100),
            'price' => $this->faker->numberBetween(50, 1000)
        ];
    }
}
