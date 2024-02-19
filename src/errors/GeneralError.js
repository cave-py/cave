class GeneralError extends Error {
    #detail = {}; // PRIVADO - Objeto del detalle del error de forma privada
    extensions = {};
    code = '';
    constructor(detail, message, extensions, code) {
        super(message);
        this.#detail = detail;
        this.extensions = extensions;
        this.code = code;
    }

    toString() {
        return JSON.stringify({
            message: this.message,
            extensions: this.extensions,
            detail: this.#detail,
        });
    }

    toJSON() {
        return {
            message: this.message,
            extensions: this.extensions,
            detail: this.#detail,
        };
    }
}

module.exports = GeneralError;
