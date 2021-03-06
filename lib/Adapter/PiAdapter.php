<?php

namespace OCA\WirelessControl\Adapter;

class PiAdapter implements IPiAdapter
{
    /** @var int */
    private $receiverPort = 2302;

    public function __construct()
    { }

    /**
     * @brief sends command to cpp server
     * @param int gpio
     * @param string code
     * @param int state
     * @return string Response
     */
    public function send433MHz(int $gpio, string $code, int $state)
    {
        return $this->sendMessage("WSO:$gpio:$code:$state");
    }

    /**
     * @brief sends message to cpp server
     * @param string message
     * @return string Response
     */
    private function sendMessage(string $message)
    {
        $socket = fsockopen('udp://127.0.0.1', $this->receiverPort, $errno, $errstr, 10);
        if (!$socket) {
            return "$errstr ($errno)";
        } else {
            $out = "";
            fwrite($socket, "$message");
            $out = fread($socket, 65536);
            fclose($socket);
            return $out;
        }
    }
}
