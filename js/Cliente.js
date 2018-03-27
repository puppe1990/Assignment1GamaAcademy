class Cliente {
	constructor(nome,email) {
		this._nome = nome;
		this._email = email;
		Object.freeze(this);
	}

	get nome() {
		return this._nome;
	}

	get email() {
		return this.email;
	}

}