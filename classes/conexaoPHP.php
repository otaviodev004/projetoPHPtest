<?php

class conexaoPHP {

    private $dbHost = 'localhost'; // Host do banco de dados
    private $dbUsername = 'root'; // Nome de usuário do banco de dados
    private $dbPassword = ''; // Senha do banco de dados
    private $dbName = 'testPHP'; // Nome do banco de dados
    private $conn;

    public function __construct() {
        
        try {
            $this->conn = new PDO("mysql:host={$this->dbHost};dbname={$this->dbName}", $this->dbUsername, $this->dbPassword);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo json_encode(array("menssagem"=>"Conexão bem-sucedida!")) ;
            // return $this->conn;
            
        } catch (PDOException $e) {
            die("Erro na conexão: " . $e->getMessage());
        }
    }
    

    public function closeConnection() {
        $this->conn = null;
    }

    public function openConection(){
        return $this->conn;
    }

} 
