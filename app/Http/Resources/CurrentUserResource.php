<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CurrentUserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $this->resource->load(['images', 'answers']);
        return array_merge(parent::toArray($request), [
            'images' => UserImageResource::collection($this->resource->images)
        ]);
    }
}
