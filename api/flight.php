<?php
    require_once(__DIR__ . '/classes/API.php');

    class FlightAPI extends API{
        protected function doGet(){
            $arr = array();
            $curl = new CURL('http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/'.$_GET['market'].'/SGD/en-GB/LON/SIN/'.$_GET['startDate'].'/'.$_GET['endDate'].'?apiKey=prtl6749387986743898559646983194');
            $curl->exec();
            if ($curl->getStatus() == 200){
              $res = json_decode($curl->getOutput(),true);
              $out = array();
              foreach ($res['Quotes'] as $k => $v){
                $flight = array();
                $flight['price'] = $v['MinPrice'];
                $id = $v['OutboundLeg']['CarrierIds'][0];
                $flight['carrier'] = $id;
                foreach ($res['Carriers'] as $c){
                  if ($c['CarrierId'] == $id) $flight['carrierName'] = $c['Name'];
                }
                $out[$k] = $flight;
              }
              /*$arr['start'] = $curl->getOutput();
              $curl = new CURL('http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/'.$_GET['market'].'/SGD/en-GB/LON/SIN/'.$_GET['startDate'].'/'.$_GET['endDate'].'?apiKey=prtl6749387986743898559646983194');
              $curl->exec();
              if ($curl->getStatus() == 200){
                $arr['end'] = $curl->getOutput();
                $this->sendResponse(200, $curl->getOutput());
              } else {
                $this->sendResponse(400);
              }*/
              $this->sendResponse(200, $out);
            } else {
              $this->sendResponse(400);
            }
          }
    }

    (new FlightAPI())->run();
?>
