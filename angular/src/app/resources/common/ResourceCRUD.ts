import { Resource, IResourceMethod, ResourceAction, ResourceRequestMethod, ResourceCRUD } from "@ngx-resource/core";

export interface PaginatedData<DataType> {
    data: DataType[],
    meta: {
        total: number,
        per_page: number,
    }
}

export abstract class ResourceCRUDPaginated<TQuery, TShort, TFull> extends ResourceCRUD<TQuery, TShort, TFull> {

    @ResourceAction({
        path: '?page={pageId}',
        params: {
            pageId: 1
        }
    })
    queryPaginated: IResourceMethod<TQuery, PaginatedData<TShort>>;
  
  
  }