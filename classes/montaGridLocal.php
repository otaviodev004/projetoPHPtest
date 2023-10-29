<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require 'conexaoPHP.php';

class montaGridLocal{
    private $banco;

    public function __construct() {
        $this->banco = new conexaoPHP;
        $this->banco = $this->banco->openConection();

        $retorno = $this->consultaLocal();

        echo json_encode($retorno);

    }

    public function consultaLocal(){

        $sql = "SELECT id, nomeL FROM locais";

        $result = $this->banco->query($sql);
        $result = $result->fetchAll(PDO::FETCH_ASSOC);

        if ($result === false) {
            $erroInfor = $this->banco->errorInfo();

            die("Erro na consulta SQL: " . $erroInfor);
        }

        // $dados = $this->dadosGrid($result);
        return $result;
        
    }

    // public function dadosGrid($dados){
    //     $html = "";

    //     if(!empty($dados)){
    //         foreach($dados as $valor){
    //             $html .= "<ion-row>
    //             <ion-col size='4'>$valor->nome</ion-col>
    //             <ion-col size='4'>$valor->status</ion-col>
    //             <ion-col size='4'><ion-icon name='create-outline'></ion-icon><ion-icon name='trash-outline'></ion-icon></ion-col>
    //           </ion-row>";
    //         }
    //     }

    //     return $html;
    // }
}

$minhaclass = new montaGridLocal();