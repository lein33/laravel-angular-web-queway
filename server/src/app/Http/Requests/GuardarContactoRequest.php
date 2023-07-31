<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Http;
use Illuminate\Validation\ValidationException;

class GuardarContactoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "email" =>  "required | unique:contactos,email",
            "nombre"=>  "required |unique:contactos,nombre",
            "telefono"=> "required",            
            "user_id"=>  "required |unique:contactos,user_id",
        ];
    }
    public function messages()
    {   
        return [
            'email.unique' => 'Er, you forgot your email address!',
            'email.unique' => 'Email already taken m8',
            'user_id' => 'Email already taken m8',
            'nombre' => 'Email already taken m8',
        ];
    }
    protected function failedValidation(Validator $validator)
    {
        $errors= (new ValidationException($validator))->errors();
        
        throw new HttpResponseException(
            response()->json([
                'resp'=>'error en algunos campos',
                'error'=>$errors
            ])
                
        );
    }
}
