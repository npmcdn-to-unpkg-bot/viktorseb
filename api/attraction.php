<?php
    require_once('/classes/API.php');

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

<form method="POST" enctype="multipart/form-data">
    <input type="text" name="name">
    <input type="text" name="description">
    <input type="text" name="location">
    <input type="text" name="openTime">
    <input type="text" name="closeTime">
    <input type="number" name="price" value="0.00" step="0.01" min="0.00">
    <input type="file" name="img">
    <input type="text" name="fbPage">
    <input type="submit" value="ee">
</form>