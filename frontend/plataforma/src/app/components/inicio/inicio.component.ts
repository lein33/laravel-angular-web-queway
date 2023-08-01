import { Component } from '@angular/core';
import { ContactoService } from 'src/app/services/contacto.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers:[UsuarioService,ContactoService]

})
export class InicioComponent {


}
