<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


require 'conexaoPHP.php';

class criarNovaPermissao {

    private $emailPermissao;
    private $nome;
    private $criarNew;
    private $acessPermissao;

    private $banco;

    public function __construct($nome, $emailPermissao, $criarNew, $acessPermissao) {
        $this->emailPermissao = $emailPermissao;
        $this->nome = $nome;
        $this->criarNew = $criarNew;
        $this->acessPermissao = $acessPermissao;
        $this->banco = new conexaoPHP;
        $this->banco = $this->banco->openConection();


        $retorno = $this->consultaPermissao();

        echo json_encode($retorno);

    }

    public function consultaPermissao(){

        $sql = "SELECT * FROM permissoes WHERE nome = '{$this->nome}' and emailPermissao = '{$this->emailPermissao}' and criarNew = '{$this->criarNew}' 
        and acessPermissao = '{$this->acessPermissao}'";

        $result = $this->banco->query($sql);
        $result = $result->fetchAll(PDO::FETCH_ASSOC);

        if ($result === false) {
            $erroInfor = $this->banco->errorInfo();

            die("Erro na consulta SQL: " . $erroInfor);
        }

        if (empty($result)){
            $sql = "INSERT INTO permissoes VALUES(null, '{$this->nome}', '{$this->emailPermissao}', '{$this->criarNew}', '{$this->acessPermissao}', '{$this->emailPermissao}', 'Enviado');";
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

            return array('mensagem'=>"Usuario cadastrado com sucesso", 'status'=>"cadastrado");

        }else{
            return array('mensagem'=>"Perfil selecionado já existe no banco de dados!", 'status'=>"existente");
        }
        
    }

    

}

$minhaclass = new criarNovaPermissao($_GET['nome'], $_GET['emailPermissao'], $_GET['criarNew'], $_GET['acessPermissao']);