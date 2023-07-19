<?php

namespace App\Http\Controllers;

use App\Http\Requests\GuardarUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResouce;
use App\Models\User;
#use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        #return User::all();
        return UserResouce::collection(User::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GuardarUserRequest $request)
    {
        /*
        User::create($request->all());
        return response()->json([
            'res' => true,
            'msg' => 'usuario guardado'
        ]);*/
        return (new UserResouce(User::create($request->all())))
            ->additional(['msg'=>'Usuario registrado correctamente']);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        /*
        return response()->json([
            'res'=>true,
            'usuario'=>$user
        ]);*/
        return new UserResouce($user);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        /*
       $user->update($request->all());
       return response()->json([
            'res'=>true,
            'user'=>'usuario editado'
       ],200);
       */
      $user->update($request->all());
      return (new UserResouce($user))
        ->additional(['msg'=>'Usuario editado correctamente'])
        ->response()
        ->setStatusCode(202);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        /*
        return response()->json([
            'res'=>true,
            'msg'=>'Paciente eliminado'
        ],200);
        */
        $user->delete();
        return new UserResouce($user);

    }
}
