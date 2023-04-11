const comentsFormater = coment => {
    if(coment === "Sem comentários") {
        return "Sem comentários"
    }
    return coment.split("(")[1].replace(")", " ")
}
module.exports = comentsFormater