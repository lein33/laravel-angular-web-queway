import { Usuario } from "./usuario";

export class Contacto {

    constructor(
        public id:number,
        public nombre:string,
        public telefono:string,
        public email:number,
        public user: Array<Usuario>

        ){
    }
}