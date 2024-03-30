<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Faker\Generator as Faker;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = User::class;

    public function definition(): array
    {
        
        return [
           'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => bcrypt('password'), // Default password for example
            'remember_token' => Str::random(10),
            'type' => $this->faker->randomElement(['seller', 'customer']),
        ];
    }

    public function customer()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Ashiz Hamal',
                'email' => 'hamalashiz@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'), // Default password for example
                'remember_token' => Str::random(10),
                'type' => 'customer',
            ];
        });
        
    }

    public function seller()
    {
        return $this->state(function (array $attributes) {
            return [
                'name' => 'Rajesh Hamal',
                'email' => 'hamalrajesh@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'), // Default password for example
                'remember_token' => Str::random(10),
                'type' => 'seller',
            ];
        });
        
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
