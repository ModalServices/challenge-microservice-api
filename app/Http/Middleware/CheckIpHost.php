<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckIpHost
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
        if($_SERVER["REMOTE_ADDR"] == config('AllowHostIp.allow.ip')){
            return $next($request);
        }else{
            return response()->json([
                'status' => 'Fail',
                'message' => 'Ip not allowed for this operation'
            ], 500);
        }
    }
}
