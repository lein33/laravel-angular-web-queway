import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseI } from "../response.interface";
import { urlRecord } from "./contacto.service";


@Injectable()
export class UserRolService{
    constructor(
        private http:HttpClient
    ){}  
    public getUserRol(id:String):Observable<any>{
        return this.http.get<any>(urlRecord+'user_rol/'+id);
    }
}