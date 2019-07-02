

class Atendente{
    constructor(){
        this.nome = randomizar_nomes(); 
    }
}
class Pessoa{
    constructor(numero){
        this.nome = randomizar_nomes();
        let data = randomizar_data_nascimento();
        this.data_nascimento = data[0];
        this.dia =  data[1];
        this.mes =  data[2];
        this.ano =  data[3];
        this.email = randomizar_email(this.nome);
        this.nacionalidade = randomizar_nacionalidade();
        this.numero = numero;
        this.no_apartemento = randomizar_boleano();
        this.pagamento = randomizar_pagamento();
        let data_repr =  randomizar_data_nascimento();
        this.data_entrada = data_repr[0]; 
        this.data_saida = (data_repr[1]+randomizar_inteiro(1, 10))+'/'+
                            (data_repr[2]+randomizar_inteiro(1, 5))+'/'+
                            (data_repr[3]+randomizar_inteiro(1, 100));
    };
    setStatus(){
        if(this.no_apartemento == false){
            this.no_apartemento = true;
        }
        else{
            this.no_apartemento = false;
        }
    };
}
class Apartemento{
    constructor(numero, maximo){
        this.numero = numero;
        this.tipo = randomizar_apartamento_tipo();
        this.status = randomizar_status();
        
        if(this.status == 'Occupied' || this.status == 'Reservated'){
            this.dono = new Pessoa(numero);
        }
    }
    setStatus(status){
        if(this.status != 'Occupied'){
            this.dono = undefined;
        }
        else{
            this.dono = new Pessoa(numero);    
        }
        this.status = status;
    }
}

class Mensagem{
    constructor(pessoa){
        this.usuario = pessoa;
        let ipsum = new LoremIpsum();
        this.mensagem = ipsum.paragraph();
    }
}