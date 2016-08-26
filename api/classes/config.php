<?php
  require_once "uploader.php";
  require_once "curl.php";

  class DbFactory{
      //Config
      private $dbhost = 'localhost';
      private $dbname = 'travify';
      private $dbuser = 'root';
      private $dbpass = '';
      //End of config

      public function getConnection(){
          $db = null;
          try{
              $db = new PDO("mysql:dbname=".$this->dbname.";host=".$this->dbhost, $this->dbuser, $this->dbpass);
          } catch (PDOException $e){
              error_log("There was an error with database connection: ", $e->getMessage());
          }
          return $db;
      }
  }

  class DirFactory{
      private static $dirs = [
          'base' => __DIR__ . '/../../',
          'upload' => 'static/upload/', //Relative to base
          'attraction' => 'attractions/' //Relative to upload
      ];

      public static function getBase(){
          return self::$dirs['base'];
      }
      public static function getUpload(){
          return self::getBase() . self::$dirs['upload'];
      }
      public static function getAttraction(){
          return self::getUpload() . self::$dirs['attraction'];
      }
  }
?>
