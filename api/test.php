<?php
  $fdata = fopen('https://graph.facebook.com/v2.7/?id=http://facebook.com/gardensbythebay&access_token=1243426629009918|a7ab781bb2a56006f21c0830bfe77aec', 'r');
  if (!$fdata){
    echo "Cannot create link to the file";
    exit;
  }
  $data = '';
  while (!feof($fdata)){
    $data .= fgets($fdata, 1000);
  }
  fclose($fdata);
  $data = json_decode($data);
  print_r($data);
  echo "<br>D: " . $data->ee;
  if (isset($data->ee)){
    echo 'x';
  } else {
    echo 'y';
  }
?>
