<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\MailController;

Route::group(['prefix' => 'v1'], function() {
    route::get('mails', [MailController::class, 'getAll']);
    route::post('send/mail', [MailController::class, 'sendMail']);
    route::get('mail/fail', [MailController::class, 'failMail']);
});
