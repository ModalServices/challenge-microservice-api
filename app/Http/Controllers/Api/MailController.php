<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\FailMailResource;
use App\Http\Resources\SendMailResource;
use App\Services\MailService;
use Illuminate\Http\Request;
use function PHPUnit\Framework\isInstanceOf;

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
        $this->service->getAllResults();
    }

    /**
     * @param Request $request
     * @return SendMailResource|\Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function sendMail(Request  $request)
    {
        $send = $this->service->send($request->all());

        if(is_object($send)){
            return new SendMailResource($send);
        }else{
            return response()->json(['status' => 'Error', 'message' => 'Could not send email, check the log']);
        }
    }

    /**
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function failMail()
    {
        return FailMailResource::collection($this->service->getFailedMails());
    }
}
