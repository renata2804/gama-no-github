// VALIDAR CAMPOS VAZIOS:
function validar() {
    var nome = document.getElementById("nome");
    var cargo = document.getElementById("cargo");
    var dataNasc = document.getElementById("dataNasc");
    var estadoCivil = document.getElementById("estadoCivil");
    var sexo = document.getElementById("sexo");
    var cep = document.getElementById("cep");
    var logradouro = document.getElementById("logradouro");
    var numero = document.getElementById("numero");
    var bairro = document.getElementById("bairro");
    var cidade = document.getElementById("cidade");
    var uf = document.getElementById("uf");
    var tel = document.getElementById("tel");
    var email = document.getElementById("email");

    if (nome.value == "") {
        alert("Nome não informado");
        nome.focus();
        return;
    }
    if (cargo.value == "") {
        alert("Cargo não informado");
        cargo.focus();
        return;
    }
    if (dataNasc.value == "") {
        alert("Data de nascimento não informada");
        dataNasc.focus();
        return;
    }
    if (estadoCivil.value == "") {
        alert("Estado Civil não informado");
        estadoCivil.focus();
        return;
    }
    if (sexo.value == "") {
        alert("Sexo não informado");
        sexo.focus();
        return;
    }
    if (cep.value == "") {
        alert("CEP não informado");
        cep.focus();
        return;
    }
    if (logradouro.value == "") {
        alert("Logradouro não informado");
        logradouro.focus();
        return;
    }
    if (numero.value == "") {
        alert("Número não informado");
        numero.focus();
        return;
    }
    if (bairro.value == "") {
        alert("Bairro não informado");
        bairro.focus();
        return;
    }
    if (cidade.value == "") {
        alert("Cidade não informada");
        cidade.focus();
        return;
    }
    if (uf.value == "") {
        alert("UF não informada");
        uf.focus();
        return;
    }
    if (tel.value == "") {
        alert("Telefone não informado");
        tel.focus();
        return;
    }
    if (email.value == "") {
        alert("E-mail não informado");
        email.focus();
        return;
    }
    formulario.submit();
    alert("Formulário enviado!");
  // envia o formulário
  //formulario.submit();
}

//VALIDAR CEP:
type="text/javascript">
	$("#cep").focusout(function(){
		$.ajax({
			url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
			dataType: 'json',
			success: function(resposta){
				$("#logradouro").val(resposta.logradouro);
				$("#bairro").val(resposta.bairro);
				$("#cidade").val(resposta.localidade);
				$("#uf").val(resposta.uf);
				$("#numero").focus();
			}
		});
	});

//COLOCAR MÁSCARA (PARÊNTESES E TRAÇO) AO DIGITAR NÚMERO DE TELEFONE:
    function mascara1(tel) { 
        if(tel.value.length == 0) {
            tel.value = '(' + tel.value;
        }
        if(tel.value.length == 3) {
            tel.value = tel.value + ') ';
        }
        if(tel.value.length == 9) {
            tel.value = tel.value + '-';
        }
    }

    function mascara2(cel) { 
        if(cel.value.length == 0) {
            cel.value = '(' + cel.value;
        }
        if(cel.value.length == 3) {
            cel.value = cel.value + ') ';
        }
        if(cel.value.length == 10) {
            cel.value = cel.value + '-';
        }
    }

    function mascara3(cpf) { 
        if(cpf.value.length == 3) {
            cpf.value = cpf.value + '.';
        }
        if(cpf.value.length == 7) {
            cpf.value = cpf.value + '.';
        }
        if(cpf.value.length == 11) {
            cpf.value = cpf.value + '-';
        }
    }

    function mascara4(rg) { 
        if(rg.value.length == 8) {
            rg.value = rg.value + '-';
        }
    }

//VALIDAR CPF:
    function validaCPF(cpf) {
        if (cpf.length != 11) {
            return false;
        } else {
            var numeros = cpf.substring(0, 9);
            var digitos = cpf.substring(9);
    
            var soma = 0;
            for (var i = 10; i > 1; i--) {
                soma += numeros.charAt(10 - i) * i;
            }
            console.log(soma);
    
            var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
    
                if (resultado != digitos.charAt(0)) {
                return false;
            }
    
            soma = 0;
            numeros = cpf.substring(0, 10);
                for (var k = 11; k > 1; k--) {
                soma += numeros.charAt(11 - k) * k;
                }
                
                resultado = (soma % 11) > 2 ? 0 : 11 - (soma % 11);
    
                if (resultado != digitos.charAt(1)) {
                    return false;
                }
            return true;
        }
    }
    
    function validacao() {
        console.log("Iniciando validação do CPF");
        document.getElementById("success").style.display = "none";
        document.getElementById("error").style.display = "none";
        
        var cpf = document.getElementById("cpf_digitado").value;
        
        var resultadoValicacao = validaCPF (cpf);
    
        if (resultadoValicacao) {
            document.getElementById("success").style.display = "block";
        
        } else {
            document.getElementById("error").style.display = "block";
        }
    }