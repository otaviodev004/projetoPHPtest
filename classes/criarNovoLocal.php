<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

require 'conexaoPHP.php';

class criarNovoLocal {

    private $nomeL;
    private $cep;
    private $cidade;
    private $rua;
    private $numero;

    private $banco;
    
    public function __construct($nomeL, $cep, $cidade, $rua, $numero) {
        $this->nomeL = $nomeL;
        $this->cep = $cep;
        $this->cidade = $cidade;
        $this->rua = $rua;
        $this->numero = $numero;
        $this->banco = new conexaoPHP;
        $this->banco = $this->banco->openConection();

        $retorno = $this->consultaLocal();

        echo json_encode($retorno);

    }

    public function consultaLocal(){

        $sql = "SELECT * FROM locais WHERE nomeL = '{$this->nomeL}' and cep = '{$this->cep}' and cidade = '{$this->cidade}' and rua = '{$this->rua}' and numero = '{$this->numero}'";
        $result = $this->banco->query($sql);
        $result = $result->fetchAll(PDO::FETCH_ASSOC);

        if ($result === false) {
            $erroInfor = $this->banco->errorInfo();

            die("Erro na consulta SQL: " . $erroInfor);
        }

        if (empty($result)){
            $sql = "INSERT INTO locais VALUES (null, '{$this->nomeL}', '{$this->cep}', '{$this->cidade}', '{$this->rua}', '{$this->numero}');";
            $result = $this->banco->query($sql);
            $result = $result->fetchAll(PDO::FETCH_ASSOC);

            if ($result === false) {
                $erroInfor = $this->banco->errorInfo();

                die("Erro na consulta SQL: " . $erroInfor);
            }

            // if(empty($result)){
            //     return array('mensagem'=>"Perfil selecionado já existe no banco de dados!", 'status'=>"error");
            //     return false;
            // }else{
            //     return array('mensagem'=>"Perfil cadastrado com sucesso", 'status'=>"sucess");
            // }

            return array('mensagem'=>"Local cadastrado com sucesso!", 'status'=>"cadastrado");

        }else{
            return array('mensagem'=>"Local selecionado já existe no banco de dados!", 'status'=>"existente");
        }
        
    }
}

$minhaclass = new criarNovoLocal($_GET['nomeL'], $_GET['cep'], $_GET['cidade'], $_GET['rua'], $_GET['numero']);