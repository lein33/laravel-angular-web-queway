import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./components/inicio/inicio.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { ErrorComponent } from "./components/error/error.component";
import { NewcontactoComponent } from "./components/newcontacto/newcontacto.component";
import { EditarcontactoComponent } from "./components/editarcontacto/editarcontacto.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";

const appRoutes: Routes=[
    {path: '',component:InicioComponent},
    {path: 'inicio',component:InicioComponent},
    {path: 'contacto',component:ContactoComponent},
    {path: 'contacto/new',component:NewcontactoComponent},
    {path: 'contacto/update/:id',component:EditarcontactoComponent},
    {path: 'login',component:LoginComponent},
    {path: 'signup',component:SignupComponent},
    {path: '**',loadComponent:()=>import('./components/error/error.component').then(comp=>comp.ErrorComponent)},

]
export const routing:ModuleWithProviders<Object>=RouterModule.forRoot(appRoutes);