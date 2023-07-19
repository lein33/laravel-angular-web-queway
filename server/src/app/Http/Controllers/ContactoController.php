<?php

namespace App\Http\Controllers;

use App\Http\Requests\ActualizarContactoRequest;
use App\Http\Requests\GuardarContactoRequest;
use App\Http\Resources\ContactoResource;
use App\Models\Contacto;
use Illuminate\Http\Request;
use PharIo\Manifest\ContainsElement;

class ContactoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ContactoResource::collection(Contacto::all());

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GuardarContactoRequest $request)
    {
        return (new ContactoResource(Contacto::create($request->all())))
        ->additional(['msg'=>'Usuario registrado correctamente']);   //
    }

    /**
     * Display the specified resource.
     */
    public function show(Contacto $contacto)
    {
        return new ContactoResource($contacto);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contacto $contacto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ActualizarContactoRequest $request, Contacto $contacto)
    {
        $contacto->update($request->all());
      return (new ContactoResource($contacto))
        ->additional(['msg'=>'Contacto editado correctamente'])
        ->response()
        ->setStatusCode(202); //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contacto $contacto)
    {
        $contacto->delete();
        return new ContactoResource($contacto);        //
    }
}
