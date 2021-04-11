<?php

declare(strict_types=1);

namespace App\Services;

use App\Mail\SendMail;
use App\Repository\Contracts\IMailRepository;
use Illuminate\Support\Facades\Mail;

class MailService
{
    /**
     * @var IMailRepository
     */
    private $repository;

    public function __construct(IMailRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * @return object
     */
    public function getAllResults()
    {
        return $this->repository->getAllcursor();
    }

    public function send(array $data)
    {
        try {
            $this->sendMail($data);
            return $this->save($data);

        }catch (\Exception $e){
            return $e->getMessage();
        }
    }

    private function save(array $data)
    {
        return $this->repository->store([
            'subject' => $data['subject'],
            'mail' => $data['mail'],
            'name' => $data['name'],
            'body' => $data['body'],
        ]);
    }

    private function sendMail(array $data)
    {
        $mail = new SendMail(
            $data['subject'],
            $data['mail'],
            $data['name'],
            $data['body']
        );

        Mail::to('davisson.chrles@gmail.com')->send($mail);
    }

}
