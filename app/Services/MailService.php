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
     * Retrieve all results
     * @return object
     */
    public function getAllResults()
    {
        return $this->repository->getAllcursor();
    }

    /**
     * Send mail
     * @param array $data
     * @return object
     * @throws \Exception
     */
    public function send(array $array)
    {
        foreach ($array as $data){
            $this->sendMail($data, $this->save($data));
        }

    }

    /**
     * Retrieve all fail mails
     * @return object
     */
    public function getFailedMails()
    {
        return $this->repository->getWhereAll('fail', true);
    }

    /**
     * Save data in database
     * @param array $data
     * @return object
     * @throws \Exception
     */
    private function save(array $data): object
    {
        return $this->repository->store([
            'subject' => $data['subject'],
            'mail' => $data['mail'],
            'name' => $data['name'],
            'body' => $data['body'],
        ]);
    }

    /**
     * Send Mail
     * @param array $data
     * @param object $sendMail
     * @throws \Exception
     */
    private function sendMail(array $data, object $sendMail)
    {
        try {
            $mail = new SendMail(
                $data['subject'],
                $data['mail'],
                $data['name'],
                $data['body']
            );

           return Mail::to('challenge@LiveOnSolutions.com')->send($mail);

        }catch (\Exception $e){
            $this->saveLogFail($sendMail, $e->getMessage());
        }

    }

    /**
     * Saved Logs fails to send mail
     * @param object $sendMail
     * @param $message
     * @throws \Exception
     */
    private function saveLogFail(object $sendMail, $message)
    {
        $this->repository->update($sendMail->id, [
            'fail' => true,
            'exception' => $message
        ]);
    }

}
