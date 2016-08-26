<?php
    require_once "config.php";

    abstract class API{
        protected $db;
        protected $user;

        public function __construct(){
            $this->db = (new DbFactory())->getConnection();
            $this->user = 1;
        }

        public function run(){
            switch($_SERVER['REQUEST_METHOD']){
                case 'GET': $this->doGet(); break;
                case 'POST': $this->doPost(); break;
                case 'PUT': $this->doPut(); break;
                case 'DELETE': $this->doDelete(); break;
            };
        }

        protected function doGet(){
            $this->sendResponse(405);
        }

        protected function doPost(){
            $this->sendResponse(405);
        }

        protected function doPut(){
            $this->sendResponse(405);
        }

        protected function doDelete(){
            $this->sendResponse(405);
        }

        protected function sendResponse($code, $body = ''){
            http_response_code($code);
            if ($body != ''){
                if (is_array($body)) $body = json_encode($body);
                echo $body;
            }
            exit;
        }

        protected function requireAdmin(){
            requireUser();
            if ($this->user->rank < 3){
                $this->sendError(401);
            }
        }

        protected function requireUser(){
            if ($this->user == 0){
                $this->sendError(401);
            }
        }
    }
?>
