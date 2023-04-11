const getAmazoninformation = require("../scrapers/amazonScraper")


const getAmazon = async () => {
    await getAmazoninformation("https://www.amazon.com.br/s?k=tv&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=33MWMA19C9XUK&sprefix=tv%2Caps%2C324&ref=nb_sb_noss_1", "tv", "tvs")
    await getAmazoninformation("https://www.amazon.com.br/s?k=maquina+de+lavar&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=26511LRFU6UL4&sprefix=maquina+de+lavar%2Caps%2C210&ref=nb_sb_noss_1", "maquina de lavar", "maquinas")
    await getAmazoninformation("https://www.amazon.com.br/s?k=caixa+de+som&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=21SFOQ6XYXFWI&sprefix=caixa+de+som%2Caps%2C230&ref=nb_sb_noss_1", "caixa de som", "caixas")
} 

getAmazon()