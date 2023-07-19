<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Contacto;

use App\Models\Sanctum\PersonalAccessToken;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Laravel\Sanctum\Sanctum;
class User extends Model
{
    use HasApiTokens, HasFactory, Notifiable;


    protected $fillable = [
        'email',
        'nombre',
        'celular',
        'estado',
    ];
    public function contacto(){
        #$contacto = Contacto::where('user_id',$this->id)->first();
        return $this->hasOne(Contacto::class);
    }
}
