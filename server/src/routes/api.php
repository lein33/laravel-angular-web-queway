<?php

use App\Http\Controllers\AutenticarController;
use App\Http\Controllers\ContactoController;
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
#Route::apiResource('users', UserController::class);



Route::group(['middleware'=>['auth:sanctum']],function(){
        Route::post('/cerrarsesion',[AutenticarController::class,'cerrarSesion']);
        Route::controller(UserController::class)->prefix('users')->group(function(){
            Route::get('/','index');
            Route::post('/','store');
            Route::get('/{user}','show');
            Route::put('/{user}','update');
            Route::delete('/{user}','destroy');   
        });
        
        Route::controller(ContactoController::class)->prefix('contacto')->group(function(){
            Route::get('/','index');
            Route::get('/{contacto}','show');
  
            Route::post('/','store');
            Route::put('/{contacto}','update');
            Route::delete('/{contacto}','destroy');     
});        
            
    });
Route::controller(AutenticarController::class)->prefix('acceso')->group(function(){
    Route::post('/','acceso');
      
    });
Route::controller(AutenticarController::class)->prefix('registrar')->group(function(){
    Route::post('/','registro');
      
    });
