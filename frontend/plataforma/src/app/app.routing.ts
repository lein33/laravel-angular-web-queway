import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./components/inicio/inicio.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { ErrorComponent } from "./components/error/error.component";
import { NewcontactoComponent } from "./components/newcontacto/newcontacto.component";
import { EditarcontactoComponent } from "./components/editarcontacto/editarcontacto.component";

const appRoutes: Routes=[
    {path: '',component:InicioComponent},
    {path: 'inicio',component:InicioComponent},
    {path: 'contacto',component:ContactoComponent},
    {path: 'contacto/new',component:NewcontactoComponent},
    {path: 'contacto/update/:id',component:EditarcontactoComponent},


    {path: '**',component:ErrorComponent},

]
export const routing:ModuleWithProviders<Object>=RouterModule.forRoot(appRoutes);