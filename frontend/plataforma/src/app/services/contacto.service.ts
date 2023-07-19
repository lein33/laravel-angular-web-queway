import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ContactoI } from "../contacto.interface";
import { ResponseI } from "../response.interface";
export var urlRecord="http://localhost:8000/api/";

@Injectable()
export class ContactoService{
    constructor(
        private http:HttpClient
    ){}
    public getContactoById():Observable<any>{
        return this.http.get<any>(urlRecord+'contacto/');
    }  
    public newContacto(form:ContactoI):Observable<ResponseI>{
        return this.http.post<ResponseI>(urlRecord+'contacto/',form);
    }  
    public getContacto(id:string):Observable<any>{
        return this.http.get<any>(urlRecord+'contacto/'+id);
    }
}