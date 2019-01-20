import { ResourceCRUD, ResourceParams, Resource, ResourceHandler, ResourceAction, IResourceMethod, ResourceRequestMethod } from "@ngx-resource/core";
import { Injectable } from "@angular/core";
import { ResourceCRUDPaginated } from "./../common/ResourceCRUD";
import { IUser, IUserImage } from '../user';

export interface IUserMatch {
    id: number;
}


@Injectable({
    providedIn: "root"
})
@ResourceParams({
    pathPrefix: '/api/user/{user_id}/matches'
})
export class UserMatchResource extends ResourceCRUDPaginated<any, IUserMatch, IUserMatch> {

    @ResourceAction({
        isArray: true
    })
    query: IResourceMethod<{user_id: number}, IUserImage[]>;

    @ResourceAction({
        method: ResourceRequestMethod.Post,
        path: '/match/{id}'
    })
    match: IResourceMethod<{user_id: number, id: number, match: boolean}, void>;

    constructor(handler: ResourceHandler) {
        super(handler);
    }


}