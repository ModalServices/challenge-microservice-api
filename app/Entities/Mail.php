<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    use HasFactory;

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = true;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'mails';

    /** The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'subject',
        'mail',
        'name',
        'body',
        'fail',
        'exception'
    ];

}
