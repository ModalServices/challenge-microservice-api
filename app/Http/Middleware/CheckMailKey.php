<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckMailKey
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $key = env('MAIL_USERNAME');
        if($key != ""){
            return $next($request);
        }else{
            return response()->json([
                'status' => 'Fail',
                'message' => 'Key to send mail not found'
            ], 500);
        }

    }
}
