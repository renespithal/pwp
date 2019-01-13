import { ResourceCRUD, ResourceParams, Resource, ResourceHandler, ResourceAction, IResourceMethod, ResourceRequestMethod } from "@ngx-resource/core";
import { Injectable } from "@angular/core";
import { ResourceCRUDPaginated } from "./common/ResourceCRUD";


export interface IUser {
    id: number;
    name: string;
    email: string;
}

@Injectable({
    providedIn: "root"
})
@ResourceParams({
    pathPrefix: '/api/user'
})
export class UserResource<UserType extends IUser> extends ResourceCRUDPaginated<any, UserType, UserType> {

    constructor(handler: ResourceHandler) {
        super(handler);
    }

    @ResourceAction({
        // IResourceAction
        method: ResourceRequestMethod.Put,
        path: '/{!id}'
    })
    updatePart: IResourceMethod<Partial<IUser>, IUser>;

}