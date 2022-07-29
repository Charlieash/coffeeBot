<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" href="coffeeStyle.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap" rel="stylesheet">
</head>

<body>
    <div class="warning" id="warning"></div>
    <div class="orderComplete" id="orderComplete"><p id="orderCompleteP" class="orderCompleteP"></p></div>
    <div class="title">
        <h1>
            coffeeBot
        </h1>
    </div>
    <div class="row" id="row1"></div>
    <div class="row" id="row2"></div>
    <br>
    <div class="row">
        <div class="confirm">
            <p class="confirm" id="demo"> <?php writeOrderId() ?></p>
            
        </div>
        <div class="addOrder">
            <p class="addOrder" id="addToOrder"></p>
        </div>
    </div>
</body>
<script src="scripts\coffeeFunctions.js"></script>
<script src="scripts\evalVersion.js"></script>
</html>
<?php 
$id = 0;
if(isset($_COOKIE["order"])){
    $order =$_COOKIE["order"];  

    $xml=simplexml_load_file("order.xml");

    $id = $xml->id;
    $id+=1;

	$dom = new DOMDocument();

	$dom->encoding = 'utf-8';

	$dom->xmlVersion = '1.0';

	$dom->formatOutput = true;

	$xml_file_name = 'order.xml';

	$root = $dom->createElement('order', $order);

    $id = $dom->createElement('id', $id);

    $root-> appendChild($id);

    $dom->appendChild($root);

	$dom->save($xml_file_name);

}
function writeOrderId(){
    $xml=simplexml_load_file("order.xml");
    $id = $xml->id + 1;
    echo("last order Id: ". $id);
}
?>