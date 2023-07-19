<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class UserResouce extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'id'=>$this->id,            
            'email'=>$this->email,
            'celular'=>$this->celular,
            'nombre'=>$this->nombre,
            'estado'=>$this->estado,

            #'fecha_modificada'=>$this->created_at->format('d-m-Y')

        ];
    }
    public function with(Request $request)
        {
            return [
                'res'=>true
            ];
        }
    
}
