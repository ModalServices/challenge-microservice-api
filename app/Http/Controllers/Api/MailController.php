<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FailMailResource;
use App\Http\Resources\SendMailResource;
use App\Services\MailService;
use Illuminate\Http\Request;

class MailController extends Controller
{
    /**
     * @var MailService
     */
    private $service;

    public function __construct(MailService $service)
    {
        $this->service = $service;
    }

    /**
     * Get all mails
     */
    public function getAll()
    {
        return SendMailResource::collection($this->service->getAllResults());
    }

    /**
     * @param Request $request
     * @return SendMailResource|\Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function sendMail(Request  $request)
    {
        $send = $this->service->send($request->all());

        return response()->json([
            'status' => 'Send',
            'message' => 'Sent emails, check if there was an error in the endpoint: mail/fail'
        ], 200);
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function failMail()
    {
        return FailMailResource::collection($this->service->getFailedMails());
    }
}
