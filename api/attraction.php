<?php
    require_once('classes/API.php');

    class AtrractionAPI extends API{
        protected function doGet(){
            if (isset($_GET['id']) && ($id = intval($_GET['id']))){
                $stmt = $this->db->prepare("SELECT * FROM `attractions` WHERE `id` = ?");
                $stmt->execute(array($id));
            } else {
                $stmt = $this->db->prepare("SELECT * FROM `attractions`");
                $stmt->execute();
            }
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (!empty($res)){
                $this->sendResponse(200, $res);
            } else {
                $this->sendResponse(204);
            }
        }
        protected function doPost(){
            $this->validateData();
            //$uploader = new Uploader('image', DirFactory::getAttraction());
            //$img = $uploader->requiredUpload($_FILES['img']);
            $img ='';

            if (strpos($_POST['facebook'], 'facebook.com') !== false){
              $fdata = fopen('https://graph.facebook.com/v2.7/?id='.$_POST['facebook'].'&access_token=1243426629009918|a7ab781bb2a56006f21c0830bfe77aec', 'r');
              if (!$fdata){
                $this->sendResponse(202, 'There was an error decoding the url, please check if its correct.');
              }
              $data = '';
              while (!feof($fdata)){
                $data .= fgets($fdata, 1000);
              }
              fclose($fdata);
              $data = json_decode($data);
              if (!isset($data->id)){
                $this->sendResponse(202, 'There was an error decoding the url, please check if its correct.');
              }
              $_POST['facebook'] = $data->id;
            }

            $stmt = $this->db->prepare("INSERT INTO `attractions`(`name`, `openTime`, `closeTime`, `description`, `price`, `img`, `location`, `facebook`, `instagram`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute(array($_POST['name'], $_POST['openTime'], $_POST['closeTime'], $_POST['description'], floatval($_POST['price']), $img, $_POST['location'], $_POST['facebook'], $_POST['instagram']));
            if ($stmt->rowCount() == 1){
                $this->sendResponse(201);
            } else {
                //$uploader->removeFile($img);
                $this->sendResponse(202, 'There was an error adding the attraction to database');
            }
        }
        protected function doDelete(){
            if (isset($_GET['id']) && ($id = intval($_GET['id']))){
                $stmt = $this->db->prepare("SELECT * FROM `attractions` WHERE `id` = ?");
                $stmt->execute(array($id));
                $res = $stmt->fetch(PDO::FETCH_ASSOC);
                if (empty($res)) $this->sendResponse(202, 'Attraction does not exsist');

                $stmt = $this->db->prepare("DELETE FROM `attractions` WHERE `id` = ?");
                $stmt->execute(array($id));
                if ($stmt->rowCount() == 1){
                    $uploader = new Uploader('image', DirFactory::getAttraction());
                    $uploader->removeFile($res['img']);
                    $this->sendResponse(201);
                } else {
                    $this->sendResponse(202, 'There was an error deleting the attraction');
                }
            } else {
                $this->sendResponse(202);
            }
        }

        protected function validateData($extended = false){
            $errors = array();
            $_POST = json_decode(file_get_contents('php://input'), true);
            if (empty($_POST['name']) || empty($_POST['description']) || empty($_POST['location']) || empty($_POST['openTime']) || empty($_POST['closeTime'])
                || !isset($_POST['price']) || empty($_POST['facebook']) || empty($_POST['instagram'])){
                $errors[] = "Please fill all the fields";
            } else if (strlen($_POST['openTime']) != 8 || strlen($_POST['closeTime']) != 8){
                $errors[] = 'Open and close times need to be in hh:mm:ss format';
            } else if (floatval($_POST['price']) < 0){
                $errors[] = "Price cannot be lower than 0";
            }
            if ($extended){
                if (empty($_FILES['img']['name'])) $errors[] = "Please set the miniature image";
            }
            if (!empty($errors)){
                $this->sendResponse(202, $errors);
            }
        }
    }

    (new AtrractionAPI())->run();
?>
