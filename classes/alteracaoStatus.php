<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require 'conexaoPHP.php';


class alteracaoStatus{
    private $banco;
    private $codigo;

    public function __construct($codigo) {
        $this->banco = new conexaoPHP;
        $this->banco = $this->banco->openConection();

        $this->codigo = $codigo;

        $retorno = $this->consultaPermissao();

        echo json_encode($retorno);

    }

    public function consultaPermissao(){

        $sql = "UPDATE permissoes SET status = 'Ativo' WHERE id = {$this->codigo}";

        try {
            $result = $this->banco->query($sql);
        } catch (PDOException $e) {
            echo "Erro: " . $e->getMessage();
        }
        
        return array(true);
        
    }
}

$minhaclass = new alteracaoStatus($_GET['codigo']);