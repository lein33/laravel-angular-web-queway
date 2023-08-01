import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';
import { UserRolService } from 'src/app/services/user_rol.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsuarioService,TokenService,UserRolService]

})
export class LoginComponent {
  public user={}
  public form={
    email:null,
    nombre:null,
    celular:null,
    estado:null

  };

  constructor(
    private router:Router,
    private usuarioService:UsuarioService,
    private user_rolService:UserRolService,
    
  ){

  }
  ngOnInit():void{
  } 
  OnSubmit(){
    this.usuarioService.acceso(Object(this.form)).subscribe({
      next:(info:any)=>{
        localStorage.setItem('token',Object(info).token);
        console.log(Object(info).data);
        this.user=info.data,
        this.user_rolService.getUserRol(Object(this.user).id).subscribe({
          next:(r:any)=>{
              localStorage.setItem('user',Object(r).data.rol_id.nombre);

              console.log(r.data.rol_id.nombre)
          },
          error:(error)=>console.log("error:" ,error)

      })
      //console.log(Object(this.user).id)
      },
      error:(error)=>console.log("error:" ,error)
    });
  };
  
  }

