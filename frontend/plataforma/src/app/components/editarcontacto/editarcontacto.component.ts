import { Component } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-editarcontacto',
  templateUrl: './editarcontacto.component.html',
  styleUrls: ['./editarcontacto.component.css'],
  providers:[UsuarioService,ContactoService]

})
export class EditarcontactoComponent {
  editForm = new FormGroup({
    nombre:new FormControl(''),  
    email: new FormControl(''),
    telefono:new FormControl(''),
    comentario:new FormControl(''),
    user_id:new FormControl('')
  });
  public id: string; 

  public contactos:Array<any>;
  constructor(
    private usuarioService:UsuarioService,
    private contactoService:ContactoService,
    private route:ActivatedRoute

    ){
      this.id="";
      this.contactos = [];    
      }
      ngOnInit():void{
        this.route.params.subscribe((params: Params)=>{
          this.id=params["id"];
          console.log("el genero es: ", this.id);
          this.contactoService.getContacto(this.id).subscribe({
            next:(info)=>{
              this.contactos=[info.data];
             
            
            console.log(this.contactos);
     
            },
            error:(error)=>console.log("error:" ,error)
          })
        })
      }
      OnSubmit(){
        console.log(this.editForm.value);
        this.contactoService.newContacto(Object(this.editForm.value)).subscribe(res=>{
          console.log(res)
        });
        //this.router.navigate(['/contacto']);
      }
      
}
