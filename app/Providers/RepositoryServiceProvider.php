<?php

namespace App\Providers;

use App\Repository\Contracts\IBaseRepository;
use App\Repository\Contracts\IMailRepository;
use App\Repository\Core\BaseReposiroty;
use App\Repository\Core\MailRepository;
use Carbon\Laravel\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            IBaseRepository::class,
            BaseReposiroty::class
        );

        $this->app->bind(
            IMailRepository::class,
            MailRepository::class
        );

    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
    }
}
