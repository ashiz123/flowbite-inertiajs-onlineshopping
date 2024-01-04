<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Category>
 */
class CategoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->unique()->name(),
            'description' => fake()->paragraph(),
             'parent_id' => Category::count() > 0 ? Category::pluck('id')->random() : 0,
             'publish' => rand(0,1)
        ];
    }
}
