
import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import { TokenService } from "../services/token.service"
export const authGuardFn: CanActivateFn = ()=> {
    const tokenService=inject(TokenService);
    const routerService=inject(Router);
    
    const token = tokenService.get();
    console.log(token);
    if(!token)
    {
        routerService.navigate(['/login']);
        return false;
    }
    return true;
}