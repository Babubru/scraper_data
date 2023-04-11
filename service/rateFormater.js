const rateFormater = rate => {
    if (rate === "Sem avaliações"){
        return "Sem avaliações"
    } else if (rate === "Novo na Amazon") {
        return "Novo na Amazon"
    }

  
    return rate.split(' ')[0];    
}

module.exports = rateFormater;