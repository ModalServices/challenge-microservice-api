<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Services\MailService;
use Illuminate\Http\Request;

class MailController extends Controller
{
    private $service;

    public function __construct(MailService $service)
    {
        $this->service = $service;
    }

    public function getAll()
    {
        $this->service->getAllResults();
    }

    public function sendMail(Request  $request)
    {
        return $this->service->send($request->all());
    }
}
