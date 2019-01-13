import { AuthService } from '../../common/services/auth.service';
import { ResourceHandlerHttpClient } from "@ngx-resource/handler-ngx-http";
import { IResourceRequest, IResourceResponse } from "@ngx-resource/core";
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

export class CustomResourceHandler extends ResourceHandlerHttpClient {

    constructor(http: HttpClient, 
        protected authService: AuthService,
        protected snackbar: MatSnackBar) {
            super(http);
    }

    protected prepareRequest(req: IResourceRequest): HttpRequest<any> {
        
        if (this.authService) {
            req.headers["Authorization"] = `Bearer ${this.authService.getToken()}`;
        }

        return super.prepareRequest(req);
    }

    protected handleResponse(req: IResourceRequest, response: HttpResponse<any> | HttpErrorResponse): IResourceResponse {

        if (!response.ok) {
            
            if ("error" in response) {
                let errorResponse = (response as any).error;

                if ("error" in errorResponse) {
                    // Authentifizierungsfehler => Logout
                    if ([
                        'token_expired', 
                        'token_not_provided', 
                        'user_not_found'].includes(errorResponse.error)) {
                        this.authService.logout();
                    }
                }

                // Exception => Ausgabe der Message
                if ("message" in errorResponse) {
                    this.snackbar.open(errorResponse.message);
                }

            } 
        }
        
        return super.handleResponse(req, response);
    }

}