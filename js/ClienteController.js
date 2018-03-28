class ClienteController {

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputNome = $("#nome");
		this._inputEmail = $("#email");		
		this._inputEmpresa = $("#empresa");		
	}

	adiciona(event) {
		event.preventDefault();

		let cliente = new Cliente(
			this._inputNome.value,
			this._inputEmail.value,
			this._inputEmpresa.value
		);

		// console.log(cliente);
		if(cliente !== undefined) {
			let cont = cliente.nome.split(" ");
			if(cont.length < 2){
				alert("Insira seu nome completo")
			}else{
				//converter JSON cliente em uma string
				let stringCliente = JSON.stringify(cliente);

				//salvar no local storage
				window.localStorage.setItem('cliente', stringCliente);

				//Resgatando o dado
				let localCliente = window.localStorage.getItem('cliente', stringCliente);
				console.log(localCliente);

				//Construção div de sucesso
				let div = document.getElementById("success");
				let conteudo = document.createTextNode("Cadastro Realizado com Action!");
				let elemento = document.createElement("div");
		    	elemento.appendChild(conteudo);
				elemento.setAttribute("class", "success");
				div.appendChild(elemento); 	
			}
		}else {
			console.log("erro");
		}
	}
}