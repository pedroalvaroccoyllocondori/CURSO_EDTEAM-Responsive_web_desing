<?php


$lista=['no','no','si'];
$cantidadNo=0;

foreach($lista as $listaIterada){
    if ($listaIterada=='no') {

        $cantidadNo=$cantidadNo+1;
    }
}
echo $cantidadNo


?>