<?php
    require_once(__DIR__ . '/classes/API.php');

    class HotelAPI extends API{
        protected function doGet(){
          $curl = new CURL('http://www.booking.com/searchresults.en-gb.html?ss='.$_GET['search'].'&do_availability_check=1&group_adults=2&group_children=0&no_rooms=1&rows=20&offset=0&room1=A%2CA&sb_price_type=total');
          $curl->exec();
          if ($curl->getStatus() == 200){
            $page = $curl->getOutput();
            $page = $this->cutToElemEnd($page, 'id="search_results_table"');
            $page = substr($page, 0, strpos($page, '<div class="clearfix"></div>'));
            $page = $this->cutToElemEnd($page, 'id="hotellist_inner"');
            $arr = explode('<div class="sr_item', $page);
            array_splice($arr, 0, 1);
            $out = array();
            foreach($arr as $key => $val){
              $hotel = array();
              $hotel['name'] = $this->getElemVal($val, 'class="sr-hotel__name"', '</span>');
              $hotel['img'] = $this->getElemVal($this->getElemVal($val, 'sr_item_photo_link', '</a>'), 'src=', '"', '"');
              $address = $this->getElemVal($val, 'class="address"', '</div>');
              $hotel['address'] = $this->getElemVal($address, 'href=', '</a>');
              $url = $this->getElemVal($address, 'href=', '"', '"');
              $url = explode('?',$url);
              $url[1]="aid=1153541".$url[1];
              $url = implode('?', $url);
              $hotel['url'] = 'http://booking.com' . $url;
              $hotel['desc'] = $this->getElemVal($val, 'hotel_desc', '</p>');
              $hotel['stars'] = $this->getElemVal($val, 'data-class=', '"', '"');
              $hotel['score'] = $this->getElemVal($val, 'data-score=', '"', '"');
              $out[] = $hotel;
            }
            $this->sendResponse(200, $out);
          } else {
            $this->sendResponse(400);
          }
        }

        protected function cutToElemEnd($str, $elem){
          return substr($str, strpos($str, ">", strpos($str, $elem))+1);
        }
        protected function getElemVal($str, $elem, $end, $begin=">"){
          $start = strpos($str, $begin, strpos($str, $elem))+1;
          return trim(substr($str, $start, strpos($str, $end, $start) - $start));
        }
        protected function doDelete(){
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
