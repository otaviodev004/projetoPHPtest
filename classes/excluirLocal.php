<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require 'conexaoPHP.php';


class excluirLocal{
    private $banco;
    private $codigo;

    public function __construct($codigo) {
        $this->banco = new conexaoPHP;
        $this->banco = $this->banco->openConection();

        $this->codigo = $codigo;

        $retorno = $this->deletaLocal();

        echo json_encode($retorno);

    }

    public function deletaLocal(){

        $sql = "DELETE FROM locais WHERE id = {$this->codigo}";

        try {
            $result = $this->banco->query($sql);
        } catch (PDOException $e) {
            echo "Erro: " . $e->getMessage();
        }
        
        return array(true);
        
    }
}

$minhaclass = new excluirLocal($_GET['codigo']);