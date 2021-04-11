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

    public function send(array  $array)
    {
        try {
            $mail = new SendMail(
                $array['subject'],
                $array['mail'],
                $array['name'],
                $array['body']
            );

            Mail::to('davisson.chrles@gmail.com')->send($mail);
        }catch (\Exception $e){
            return $e->getMessage();
        }

    }

}
