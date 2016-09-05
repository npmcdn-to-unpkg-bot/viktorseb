<?php
    require_once('classes/API.php');

    class BookingAPI extends API{
        protected function doGet(){
          $curl = new CURL('http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/UK/EUR/en-GB/27539733/2016-12-04/2016-12-10/2/1?apiKey=prtl6749387986743898559646983194');
          //$curl->setOpts(array());
          $curl->exec();
          echo $curl->getOutput();
          $curl->close();
          /*$ch = curl_init('http://partners.api.skyscanner.net/apiservices/hotels/liveprices/v2/UK/EUR/en-GB/27539733/2016-12-04/2016-12-10/2/1?apiKey=prtl6749387986743898559646983194');
          curl_setopt($ch, CURLOPT_HTTPHEADER, array(
              'Content-Type: application/json',
              'Accept: application/json'
          ));
          $out = curl_exec($ch);
          //print_r($out);
          $chcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
          if ($chcode == 200){

          }
          curl_close($ch);*/
          //$this->sendResponse(200, $output);
        }
    }

    (new BookingAPI())->run();
?>
