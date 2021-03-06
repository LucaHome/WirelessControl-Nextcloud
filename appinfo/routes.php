<?php

/**
 * WirelessControl
 *
 * @author Jonas Schubert
 * @copyright 2019 Jonas Schubert <guepardoapps@gmail.com>
 *
 * MIT License
 * Copyright (c) 2019 GuepardoApps (Jonas Schubert)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

return [
    'resources' => [
        'ping_api' => ['url' => '/api/v1/ping'],
        'area' => ['url' => '/area'],
        'area_api' => ['url' => '/api/v1/area'],
        'wireless_socket' => ['url' => '/wireless_socket'],
        'wireless_socket_api' => ['url' => '/api/v2/wireless_socket'],
        'periodic_task' => ['url' => '/periodic_task'],
        'periodic_task_api' => ['url' => '/api/v1/periodic_task'],

        'wireless_socket_legacy_api' => ['url' => '/api/v/wireless_socket']
    ],
    'routes' => [
        ['name' => 'page#index', 'url' => '/', 'verb' => 'GET'],

        ['name' => 'settings#get', 'url' => '/settings', 'verb' => 'GET'],
        ['name' => 'settings#set', 'url' => '/settings/{setting}/{value}', 'verb' => 'POST'],

        ['name' => 'ping_api#preflighted_cors', 'url' => '/api/v1/ping/{path}', 'verb' => 'OPTIONS', 'requirements' => ['path' => '.+']],
        ['name' => 'area_api#preflighted_cors', 'url' => '/api/v1/area/{path}', 'verb' => 'OPTIONS', 'requirements' => ['path' => '.+']],
        ['name' => 'wireless_socket_api#preflighted_cors', 'url' => '/api/v2/wireless_socket/{path}', 'verb' => 'OPTIONS', 'requirements' => ['path' => '.+']],
        ['name' => 'periodic_task_api#preflighted_cors', 'url' => '/api/v1/periodic_task/{path}', 'verb' => 'OPTIONS', 'requirements' => ['path' => '.+']],

        ['name' => 'wireless_socket_legacy_api#preflighted_cors', 'url' => '/api/v1/wireless_socket/{path}', 'verb' => 'OPTIONS', 'requirements' => ['path' => '.+']]
    ]
];
