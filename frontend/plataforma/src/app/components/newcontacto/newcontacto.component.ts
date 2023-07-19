import { Component, OnInit } from '@angular/core';
import { ContactoI } from 'src/app/contacto.interface';
import { ContactoService } from 'src/app/services/contacto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
Router
@Component({
  selector: 'app-newcontacto',
  templateUrl: './newcontacto.component.html',
  styleUrls: ['./newcontacto.component.css'],
  providers:[UsuarioService,ContactoService]

})
export class NewcontactoComponent implements OnInit {
  nuevoForm = new FormGroup({
    nombre:new FormControl(''),  
    email: new FormControl(''),
    telefono:new FormControl(''),
    comentario:new FormControl(''),
    user_id:new FormControl('')
  });

  constructor(
  private router:Router,
  private usuarioService:UsuarioService,
  private contactoService:ContactoService
  ){

  }
  ngOnInit():void{
    
  }  
  
  OnSubmit(){
    console.log(this.nuevoForm.value);
    this.contactoService.newContacto(Object(this.nuevoForm.value)).subscribe(res=>{
      console.log(res)
    });
    this.router.navigate(['/contacto']);
  }

  
}

