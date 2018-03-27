class ClienteController {

	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputNome = $("#nome");
		this._inputEmail = $("#email");		
	}

	adiciona(event) {
		event.preventDefault();

		let cliente = new Cliente(
			this._inputNome.value,
			this._inputEmail.value
		);

		// console.log(cliente);
		//converter JSON cliente em uma string
		let stringCliente = JSON.stringify(cliente);

		//salvar no local storage
		window.localStorage.setItem('cliente', stringCliente);

		//Resgatando o dado
		let localCliente = window.localStorage.getItem('cliente', stringCliente);
		console.log(localCliente);

	}
}