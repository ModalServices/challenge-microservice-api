<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SendMailResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'status' => [
                'message' => 'Send email successfully'
            ],
            'content' => [
                'subject' => $this->subject,
                'name' => $this->name,
                'mail' => $this->mail,
            ],
        ];
    }
}
