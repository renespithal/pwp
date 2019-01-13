import { ResourceCRUD, ResourceParams, Resource, ResourceHandler, ResourceAction, IResourceMethod, ResourceRequestMethod } from "@ngx-resource/core";
import { Injectable } from "@angular/core";
import { IUser } from "./user";

@Injectable({
    providedIn: 'root'
})
@ResourceParams({
    pathPrefix: '/api/auth'
})
export class AuthResource extends ResourceCRUD<any,any,any> {

    constructor(handler: ResourceHandler) {
        super(handler);
    }

    @ResourceAction({
        // IResourceAction
        method: ResourceRequestMethod.Get,
        path: '/user'
    })
    currentUser: IResourceMethod<any, IUser>;

    @ResourceAction({
        // IResourceAction
        method: ResourceRequestMethod.Post,
        path: '/logout'
    })
    logout: IResourceMethod<any, any>;
    
}