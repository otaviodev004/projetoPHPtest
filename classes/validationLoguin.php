<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require 'conexaoPHP.php';

class validationLoguin {

    private $banco;
    private $senha;
    private $email;

    public function __construct($senha, $email) {
        $this->senha = $senha;
        $this->email = $email;
        $this->banco = new conexaoPHP;
        $this->banco = $this->banco->openConection();


        $retorno = $this->consultaLoguin();

        echo json_encode($retorno);

    }

    public function consultaLoguin(){

        $sql = "SELECT * FROM login WHERE email = '{$this->email}' and senha = '{$this->senha}'";
        $result = $this->banco->query($sql);
        $result = $result->fetchAll(PDO::FETCH_ASSOC);

        if ($result === false) {
            $erroInfor = $this->banco->errorInfo();

            die("Erro na consulta SQL: " . $erroInfor);
        }

        if (empty($result)){
            return array('mensagem'=>"Usuario não encontrado, Email ou Senha invalida!", 'status'=>"alerta");
        }else{
            return array('mensagem'=>"Logado com Sucesso!", 'status'=>"sucess");
        }
        
    }

    

}

$minhaclass = new validationLoguin($_GET['senha'], $_GET['email']);


