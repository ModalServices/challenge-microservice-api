<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendMail extends Mailable
{
    use Queueable, SerializesModels;

    private $subj;
    private $mail;
    private $name;
    private $body;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($subj, $mail, $name, $body)
    {
        $this->subj = $subj;
        $this->mail = $mail;
        $this->name = $name;
        $this->body = $body;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->subject($this->subj);
        $this->to($this->mail, $this->name);
        return $this->view('Mail.SendMail', [
            'body' => $this->body
        ]);
    }
}
