import { Pipe, PipeTransform } from "@angular/core";
import { ContactoI } from "./contacto.interface";

@Pipe({
    name:'ObjectToArray'
})
export class ObjectToArrayPipe implements PipeTransform{
    transform(object: ContactoI[]=[]): any {
        return Object.values(object);
    }   
}