import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[UsuarioService]

})
export class SignupComponent {

  public form = {
    email: null,
    nombre: null,
    celular: null,
    estado: null
  };
  public error = null;

  constructor(
    private usuarioService:UsuarioService,

  ) { }

  OnSubmit() {
    console.log(this.form),
    this.usuarioService.registro(Object(this.form)).subscribe(
      res=>{
        console.log(res)
    })
      
  }
  
  

  ngOnInit() {
  }

}
