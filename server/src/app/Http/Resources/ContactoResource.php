<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ContactoResource extends JsonResource
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
            'nombre'=>$this->nombre,
            'telefono'=>$this->telefono,
            'email'=>$this->email,
            'comentario'=>$this->comentario, 
            'user_id'=>new UserResouce($this->user),

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
