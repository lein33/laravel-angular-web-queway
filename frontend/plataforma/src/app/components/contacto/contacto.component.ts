import { Component } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  providers:[UsuarioService,ContactoService]

})
export class ContactoComponent {
 // public contacto:string;

  public contactos:Array<any>;
  constructor(
    private usuarioService:UsuarioService,
    private contactoService:ContactoService
    ){
      //this.contacto="contactos";
      this.contactos = [];
      this.contactoService.getContactoById().subscribe({
        next:(info)=>{
          this.contactos=info.data;
         
        
        console.log(this.contactos)
 
        },
        error:(error)=>console.log("error:" ,error)
      })
        
      }
    }
    
  


