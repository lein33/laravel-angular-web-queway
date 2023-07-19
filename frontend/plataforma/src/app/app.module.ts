import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from "@angular/material/icon";
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PieComponent } from './components/pie/pie.component';
import { ErrorComponent } from './components/error/error.component';
import { routing } from './app.routing';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { ObjectToArrayPipe } from './objectToArray.pipe';
import { NewcontactoComponent } from './components/newcontacto/newcontacto.component';
import { EditarcontactoComponent } from './components/editarcontacto/editarcontacto.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    InicioComponent,
    ContactoComponent,
    PieComponent,
    ErrorComponent,
    NavegacionComponent,
    ObjectToArrayPipe,
    UsuarioComponent,
    NewcontactoComponent,
    EditarcontactoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
