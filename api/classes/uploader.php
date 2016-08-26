<?php
  class Uploader{
      private $type;
      private $directory;
      private $extensions;
      private $rewriteExtensions;
      private $mimes;
      private $maxSize;

      public function __construct($type='file', $directory=''){
          $this->type = $type;
          if ($this->type = 'image'){
              $this->extensions = array('gif', 'jpeg', 'jpg', 'png');
              $this->mimes = array('image/gif', 'image/jpg', 'image/jpeg', 'image/pjpeg', 'image/x-png', 'image/png');
              $this->maxSize = 5242880;
              $this->rewriteExtensions = array('jpeg' => 'jpg');
          } else {
              $this->maxSize = 99999999;
          }
          $this->directory = ($directory == '' ? DirFactory::getUpload() : $directory);
      }

      public function requiredUpload($file){
          try{
              return $this->upload($file);
          } catch (RuntimeException $e){
              http_response_code(400);
              print(json_encode(array($e->getMessage())));
              exit;
          }
      }

      public function upload($file){
          if (!empty($file) && $file['error'] == 0){
              $ext = explode('.', $file['name']);
              $ext = strtolower(end($ext));
              if (isset($this->mimes)){
                  $mime = getimagesize($file['tmp_name']);
                  if (!in_array($mime['mime'], $this->mimes)){
                      throw new RuntimeException('Mime type not allowed');
                  }
              }
              if (isset($this->extensions)){
                  if (!in_array($ext, $this->extensions)){
                      throw new RuntimeException('Extension not allowed');
                  }
              }
              if (isset($this->rewriteExtensions) && in_array($ext, $this->rewriteExtensions)){
                  $ext = $this->rewriteExtensions[$ext];
              }
              if ($file['size'] <= $this->maxSize){
                  $dest = '';
                  $name = '';
                  do{
                      $name = uniqid() . '.' . $ext;
                      $dest = $this->directory . $name;
                  } while (file_exists($dest));
                  if (move_uploaded_file($file['tmp_name'], $dest)){
                      return $name;
                  } else {
                      throw new RuntimeException('Error moving file to directory');
                  }
              } else {
                  throw new RuntimeException('File is too big');
              }
          } else {
              throw new RuntimeException('Error uploading the file');
          }
      }

      public function removeFile($filename){
          unlink($this->directory . $filename);
      }
  }
?>
