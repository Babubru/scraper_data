const { palavrasPositivas, palavrasNegativas } = require("../keywords");

const filtrarComentario = (comentario) => {
    let result = "";
    let positivo = 0;
    let negativo = 0;

    for (let i = 0; i < 20; i++) {
        if (comentario.includes(palavrasPositivas[i])) {
            positivo++
        } else if (comentario.includes(palavrasNegativas[i])) {
            negativo++
        }

    }

    if (positivo > negativo) {
        return "Comentário positivo"
    }
    else {
        return "comentário Negativo"
    }
}

module.exports = filtrarComentario;