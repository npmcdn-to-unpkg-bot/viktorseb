<?php
    require_once('/classes/API.php');

    class FlightAPI extends API{
        protected function doGet(){
            /*$arr = array();
            $curl = new CURL('http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/'.$_GET['market'].'/SGD/en-GB/LON/SIN/'.$_GET['startDate'].'/'.$_GET['endDate'].'?apiKey=prtl6749387986743898559646983194');
            $curl->exec();
            if ($curl->getStatus() == 200){
              $arr['start'] = $curl->getOutput();
              $curl = new CURL('http://partners.api.skyscanner.net/apiservices/browsedates/v1.0/'.$_GET['market'].'/SGD/en-GB/LON/SIN/'.$_GET['startDate'].'/'.$_GET['endDate'].'?apiKey=prtl6749387986743898559646983194');
              $curl->exec();
              if ($curl->getStatus() == 200){
                $arr['end'] = $curl->getOutput();
                $this->sendResponse(200, $curl->getOutput());
              } else {
                $this->sendResponse(400);
              }
            } else {
              $this->sendResponse(400);
            }*/
            echo file_get_contents('http://www.booking.com/searchresults.en-gb.html?label=gen173nr-1DCAEoggJCAlhYSDNiBW5vcmVmaN0BiAEBmAEuuAEHyAEM2AED6AEBqAID&lang=en-gb&sid=36024a2b76454c798bc7c6f62a98805e&sb=1&src=index&src_elem=sb&error_url=http%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Flabel%3Dgen173nr-1DCAEoggJCAlhYSDNiBW5vcmVmaN0BiAEBmAEuuAEHyAEM2AED6AEBqAID%3Bsid%3D36024a2b76454c798bc7c6f62a98805e%3Bsb_price_type%3Dtotal%26%3B&ss=Marina+Bay+Sands%2C+Singapore%2C+Singapore&checkin_monthday=19&checkin_year_month=2016-9&checkout_monthday=20&checkout_year_month=2016-9&room1=A%2CA&no_rooms=1&group_adults=2&group_children=0&ss_raw=marina+bay+sands&ac_position=0&ac_langcode=en&dest_id=245881&dest_type=hotel&ac_pageview_id=cb8287188c720154&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0');
        }
    }

    (new FlightAPI())->run();
?>
