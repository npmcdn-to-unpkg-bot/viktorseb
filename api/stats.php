<?php
    require_once('./classes/API.php');

    class StatsAPI extends API{
        protected function doGet(){
            $stmt = $this->db->prepare("SELECT (SELECT COUNT(*) FROM `attractions`) as cntattr, (SELECT COUNT(*) FROM `users`) as cntusers");
            $stmt->execute();
            $res = $stmt->fetch(PDO::FETCH_ASSOC);
            if (!empty($res)){
                $this->sendResponse(200, $res);
            } else {
                $this->sendResponse(204);
            }
        }
    }

    (new StatsAPI())->run();
?>