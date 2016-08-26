<?php
    require_once('/classes/API.php');

    class HotelAPI extends API{
        protected function doGet(){
          if (!empty($_GET['hotelName'])){
            $curl = new CURL('http://partners.api.skyscanner.net/apiservices/hotels/autosuggest/v2/'.$_GET['market'].'/SGD/en-GB/'.urlencode($_GET['hotelName']).'?apikey=prtl6749387986743898559646983194');
            $curl->exec();
            if ($curl->getStatus() == 200){
              $this->sendResponse(200, $curl->getOutput());
              /*$res = json_decode($curl->getOutput(), true);
              $res = $res["results"];
              echo "<pre>";
              print_r($res["results"]);
              $res = array_filter($res, function($val){
                return $val['geo_type'] == "City";
              });
              $elem = current($res);
              $id = $elem['individual_id'];
              $curl = new CURL('http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/'.
                                $_GET['market'].'/SGD/en-GB/'.$id.'/'.$_GET['startDate'].'/'.$_GET['endDate'].'/'.$_GET['guests'].'/'.$_GET['rooms'].'?apiKey=prtl6749387986743898559646983194');
              $curl->exec();
              print_r(json_decode($curl->getOutput(), true));*/
              //$res[0] = array_merge($res[0], json_decode($curl->getOutput(), true));
            } else {
              $this->sendResponse(400);
            }
          }
          else {
            $curl = new CURL('http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/'.
                              $_GET['market'].'/SGD/en-GB/27539733/'.$_GET['startDate'].'/'.$_GET['endDate'].'/'.$_GET['guests'].'/'.$_GET['rooms'].'?apiKey=prtl6749387986743898559646983194');
            $curl->exec();
            if ($curl->getStatus() == 200){
              $this->sendResponse(200, $curl->getOutput());
            } else {
              $this->sendResponse(400);
            }
          }
        }
    }

    (new HotelAPI())->run();
?>
