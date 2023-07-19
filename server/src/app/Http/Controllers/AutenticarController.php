<?php

namespace App\Http\Controllers;

use App\Http\Requests\AccesoRequest;
use App\Http\Requests\RegistroRequest;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AutenticarController extends Controller
{
    public function registro(RegistroRequest $request)
    {
        $user= new User();
        $user->email=$request->email;
        $user->nombre=$request->nombre;
        $user->celular=$request->celular;
        $user->estado=$request->estado;
        $user->save();

        return response()->json([
            'res' => true,
            'msg' => 'usuario registrado'
        ],200);      
    }
    public function acceso(AccesoRequest $request){
        $user = User::where('email', $request->email)->first();
 
        if (! $user || $request->nombre !== $user->nombre) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
     
        $token= $user->createToken($request->email)->plainTextToken;
        return response()->json([
            'res'=>true,
            'token'=>$token
        ]);
    }
    public function cerrarSesion(Request $request){
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'res'=>true,
            'msg'=>'token elimkinado correctamente'
        ]);

    }
}
