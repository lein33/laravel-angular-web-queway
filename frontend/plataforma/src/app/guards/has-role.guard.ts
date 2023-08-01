import { CanActivateFn } from '@angular/router';
import { UserRolService } from '../services/user_rol.service';
import { inject } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { TokenService } from '../services/token.service';
import { map } from 'rxjs';

export const hasRoleGuard: CanActivateFn = (route, state) => {
  const user =inject(UsuarioService);
  const user_rol=inject(UserRolService);
  const allowedRoles=route.data?.['allowedRoles'];
  var nombre:String;
  
  if(!allowedRoles.includes(user.getUser())){
    return false

  }
  return true
  
};
