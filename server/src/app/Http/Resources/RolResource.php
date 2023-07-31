<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RolResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,            
            'nombre'=>$this->nombre,
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
