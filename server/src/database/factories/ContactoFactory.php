<?php

namespace Database\Factories;

use App\Models\Contacto;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ContactoFactory extends Factory
{
    protected $model = Contacto::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        return [
            'nombre' => $this->faker->name(2),
            'telefono' => $this->faker->randomNumber(6),
            'email' => $this->faker->email(),
            'comentario' => $this->faker->paragraph(1),
            'user_id'=>  $this->faker->unique()->random(10, User::count())
        ];
    }
}
