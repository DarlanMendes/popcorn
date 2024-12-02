import { HttpInterceptorFn } from "@angular/common/http";
import { environment } from "../environments/environment.development";

export const authInterceptor:HttpInterceptorFn = (req, next)=>{
    const cloneReq = req.clone({
        setHeaders:{
            Authorization:`Bearer ${environment.token}`
        }
        
    })
    return next(cloneReq)
}