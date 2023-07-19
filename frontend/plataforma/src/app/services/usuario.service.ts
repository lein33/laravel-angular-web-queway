import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";
import { Contacto } from "../models/contacto";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { urlRecord } from "./contacto.service";

@Injectable()
export class UsuarioService{
    constructor(
        private http:HttpClient
    ){}
    public getUserById():Observable<any>{
        return this.http.get(urlRecord+"users/");
    }  
    
}