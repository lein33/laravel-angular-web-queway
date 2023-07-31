<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRol extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'rol_id',
    ];

    public function user(){
        return $this->belongsTo('App\Models\User');
    }
    public function rol(){
        return $this->belongsTo('App\Models\Rol');
    }
}
