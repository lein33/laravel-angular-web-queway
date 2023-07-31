<?php

namespace Database\Factories;

use App\Models\UserRol;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserRol>
 */
class UserRolFactory extends Factory
{
    protected $model = UserRol::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'=>  $this->faker->numberBetween(1,20),
            'rol_id'=>  $this->faker->numberBetween(1,3)

        ];
    }
}
