import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class KeycloakInterceptor implements HttpInterceptor {
constructor(private authenticationService: AuthenticationService) {}

intercept(
    req: HttpRequest<any>,
    next: HttpHandler
): Observable<HttpEvent<any>> {
    const { enableBearerInterceptor, excludedUrls } =
        this.authenticationService;

    if (
        !enableBearerInterceptor ||
        !this.authenticationService.isAuthenticated()
    ) {
        return next.handle(req);
    }

    const excluded =
        excludedUrls.findIndex((url) => url.urlPattern.test(req.url)) > -1;
    if (excluded) {
        return next.handle(req);
    }

    return this.authenticationService.addTokenToHeader(req.headers).pipe(
        mergeMap((headersWithBearer) => {
            const request = req.clone({ headers: headersWithBearer });
            return next.handle(request);
        })
    );
}
}