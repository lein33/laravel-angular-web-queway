import { Injectable } from "@angular/core";
import { Usuario } from "../models/usuario";
import { Contacto } from "../models/contacto";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { urlRecord } from "./contacto.service";
import { UserI } from "../user.interface";
import { ResponseI } from "../response.interface";
import { RegistroI } from "../registro.interface";
const headers = new HttpHeaders({
'Authorization': `Bearer ${localStorage.getItem('token')}`
});
@Injectable()
export class UsuarioService{
    
    constructor(
        private http:HttpClient
    ){}
    public getUserById():Observable<any>{
        return this.http.get(urlRecord+"users/");
    }
    public acceso(form:UserI):Observable<ResponseI>{
        return this.http.post<ResponseI>(urlRecord+'acceso/',form);
    }
    public registro(form:RegistroI):Observable<ResponseI>{
        return this.http.post<ResponseI>(urlRecord+'registrar/',form);
    } 
    
}