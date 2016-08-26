<?php
  class CURL{
    private $conn;
    private $output;
    private $status;

    public function __construct($url){
      $this->conn = curl_init($url);
      curl_setopt_array($this->conn, array(CURLOPT_HEADER => false, CURLOPT_RETURNTRANSFER => true, CURLOPT_FOLLOWLOCATION => true, CURLOPT_HTTPHEADER => array('Content-Type: application/json', 'Accept: application/json')));
    }

    public function setOpts($opts){
      curl_setopt_array($this->conn, $opts);
    }

    public function exec(){
      $this->output = curl_exec($this->conn);
      $this->status = curl_getinfo($this->conn, CURLINFO_HTTP_CODE);
      curl_close($this->conn);
    }

    public function getOutput(){
      return $this->output;
    }

    public function getStatus(){
      return $this->status;
    }

    public function close(){
      curl_close($this->conn);
    }
  }
?>
