<?php

declare(strict_types=1);

namespace App\Services;



use App\Repository\Contracts\IMailRepository;

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

}
