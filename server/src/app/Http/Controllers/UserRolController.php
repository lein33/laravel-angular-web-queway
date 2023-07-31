<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserRolResource;
use App\Models\UserRol;
use Illuminate\Http\Request;

class UserRolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return UserRolResource::collection(UserRol::all());

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
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(UserRol $userRol)
    {
        return new UserRolResource($userRol);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(UserRol $userRol)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, UserRol $userRol)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(UserRol $userRol)
    {
        //
    }
}
