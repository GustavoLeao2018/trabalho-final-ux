angular.module('ux', []);
angular.module('ux').controller('uxCtrl', ($scope)=>{
    $scope.titulo = "Eagle hotel";
    $scope.subtitulo = "Welcome!";

    let atendente = new Atendente();

    $scope.status_login = "Logout - "+atendente.nome;

    $scope.apartamentos = [];
    $scope.usuarios = [];

    let quantidade_aps = 600;
    // console.log("****************************************");
    for(let i = 400; i <= quantidade_aps; i++){
        let ap = new Apartemento(i, quantidade_aps);
        // console.log(ap.status);        
        $scope.apartamentos.push(ap);
    }
    // console.log("****************************************");
    $scope.apartamentos.forEach((valor, chave) => {
        if(valor.dono != undefined && valor.status == 'Occupied'){
            $scope.usuarios.push(valor.dono);
        }      
    });

    $scope.geraId = (nome) => {
        return nome.toLowerCase().replace(/\s/igm, '-');
    };

    $scope.chamar_close_and_pay = (id, numero, nome, estado, desligar) =>{
        document.querySelector('#'+geraId(id)+'-'+numero+'').style.display = estado;
        if(desligar == true){
            $scope.close_and_pay(nome);
        }
    };

    $scope.close_and_pay = (nome)=>{
        let parcial_usuarios = [];
        let parcial_apartamentos = [];
        let numero = 0;

        for(let i = 0; i < $scope.usuarios.length; i++){
            if($scope.usuarios[i] != null){
                if($scope.usuarios[i].nome != nome){
                    numero =  $scope.usuarios[i].numero;
                    parcial_usuarios.push($scope.usuarios[i]);
                }
            }            
        }

        for(let i = 0; i < $scope.apartamentos.length; i++){
            if($scope.apartamentos[i] != null){
                if($scope.apartamentos[i].numero != numero){
                    parcial_apartamentos.push($scope.apartamentos[i]);
                }
            }
        }
        $scope.usuarios = parcial_usuarios;
        $scope.apartamentos = parcial_apartamentos;


    };

    $scope.trocaSubtitulo = (subtitulo) =>{
        $scope.subtitulo = subtitulo;
    };


    $scope.quantidadeEmManutencao = 0;
    $scope.quantidadeOcupados = 0;
    let parcialQuantidadeOcupados = 0;
    $scope.quantidadeReservados = 0;

    $scope.apartamentos.forEach((valor, chave) => {
        if(valor.status == 'Maintenance'){
            $scope.quantidadeEmManutencao++;
        }
        else if(valor.status == 'Occupied'){
            parcialQuantidadeOcupados++;
        }      
        else if(valor.status = 'Reservated'){
            $scope.quantidadeReservados++;
        }
    });

    $scope.quantidadeOcupados = Math.floor((parcialQuantidadeOcupados / $scope.apartamentos.length) * 100);
    
    $scope.quantidade_mensagens = randomizar_inteiro(1, $scope.usuarios.length);

    $scope.mensagens = [];
    for(let i  = 0; i < $scope.quantidade_mensagens; i++){
        $scope.mensagens.push(new Mensagem(randomizar_lista($scope.usuarios)));
    };
    
    

    $scope.nacionalidades = [
            "South African", "German", "Argentine", "Australian", "Belgium",	
            "Bolivian",	"Brazilian",  "Canadian", "Chilean", "Chinese",	
            "Colombian", "Korean", "Ecuadorian", "Spanish", "American",	
            "Dannish", "Fins ou Finnish",  "French", "Greek", "Indian",
            "English ou British", "Israeli", "Italian", "Japanese",
            "Mexican", "Norwegian", "Paraguayan", "Peruvian", "Portugues",
            "Russian", "Swiss", "Uruguayan", "Venezuelan", "Persian / Iranian",
            "Iraqi", "Egyptian", "Lebanese", "Turkish", "Pakistani",
            "Syrian", "Thai", "Vietnamese", "Costa Rican"
    ];

    $scope.modo_pagamento = [ 'Money', 'Card', 'Cheq'];

    // console.log($scope.apartamentos);
    
});