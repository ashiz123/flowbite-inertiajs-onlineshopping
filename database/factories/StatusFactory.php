<?php

namespace Database\Factories;

use App\Models\Status;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Status>
 */
class StatusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

     protected $model =  Status::class;


    public function definition(): array
    {
       
        return [
            'title' => 'pending'
         ];
        
    }

    public function completed()
    {
        return $this->state(function (array $attributes) {
            return [
                'title' => 'completed'
            ];
        });
        
    }

    public function cancelled()
    {
        return $this->state(function (array $attributes) {
            return [
                'title' => 'cancelled'
            ];
        });
        
    }



    
}
