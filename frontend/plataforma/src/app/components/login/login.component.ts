import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsuarioService,TokenService]

})
export class LoginComponent {
  public form={
    email:null,
    nombre:null,
    celular:null,
    estado:null

  };

  constructor(
    private router:Router,
    private usuarioService:UsuarioService,
    private tokenService:TokenService,


  ){

  }
  ngOnInit():void{
    
  } 
  OnSubmit(){
    console.log(this.form),
    this.usuarioService.acceso(Object(this.form)).subscribe({
      next:(info:any)=>{
      console.log(Object(info).data);
        localStorage.setItem('token',Object(info).token);
      },
      error:(error)=>console.log("error:" ,error)
    });
  }
 
  }

