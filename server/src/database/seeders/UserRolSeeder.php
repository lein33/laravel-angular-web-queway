<?php

namespace Database\Seeders;

use App\Models\UserRol;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserRolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserRol::factory()->count(21)->create();

    }
}
