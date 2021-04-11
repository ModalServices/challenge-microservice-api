<?php

declare(strict_types=1);

namespace App\Repository\Core;

use App\Entities\Mail;
use App\Repository\Contracts\IMailRepository;

class MailRepository extends BaseReposiroty implements IMailRepository
{
    /**
     * Make object Client ORM.
     *
     * @return void
     */
    public function entity()
    {
        return Mail::class;
    }
}
