import { ResourceCRUD, ResourceParams, Resource, ResourceHandler, ResourceAction, IResourceMethod, ResourceRequestMethod } from "@ngx-resource/core";
import { Injectable } from "@angular/core";
import { ResourceCRUDPaginated } from "./common/ResourceCRUD";

export interface IUserAnswer {
    key: string;
    value: string;
}

export interface IUser {
    id: number;
    first_name: string
    gender: number;
    name: string;
    email: string;
    answers: IUserAnswer[]
}

@Injectable({
    providedIn: "root"
})
@ResourceParams({
    pathPrefix: '/api/user'
})
export class UserResource extends ResourceCRUDPaginated<any, IUser, IUser> {

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