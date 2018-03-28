class Cliente {
	constructor(nome,email,empresa) {
		this._nome = nome;
		this._email = email;
		this._empresa = empresa;
		Object.freeze(this);
	}

	get nome() {
		return this._nome;
	}

	get email() {
		return this.email;
	}

	get empresa() {
		return this.empresa;
	}

}