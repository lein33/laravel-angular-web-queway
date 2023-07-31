<?php

namespace App\Http\Resources;

use App\Models\Rol;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserRolResource extends JsonResource
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
            'user_id'=>new UserResouce($this->user),
            'rol_id'=>new RolResource($this->rol)
            //'rol_id'=>new RolResource($this->rol),
            

            #'fecha_modificada'=>$this->created_at->format('d-m-Y')

        ];        
    }
}
