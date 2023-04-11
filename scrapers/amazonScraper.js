const pup = require("puppeteer");

const rateFormater = require("../service/rateFormater");
const comentsFormater = require("../service/comentsFormater");
const excelCreator = require("../service/excelCreator");

const getAmazoninformation = async (link, tipo, nomeExcel) => {
  let excel = [];

  let toExcel = [];

  const browser = await pup.launch({
    headless: false
  });
  console.log("iniciei o bot")
  const page = await browser.newPage();
  await page.goto(link);
  console.log("Acessei a página")

  await page.waitForTimeout(6000)

  console.log('Estou aguardando as informações carregarem')
  await page.waitForTimeout(6000);

  const product = await page.$$eval(".a-size-base-plus.a-color-base.a-text-normal", comentsList => comentsList.map(item => item.textContent));

  const links = await page.$$eval('.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal', linkList => linkList.map(item => item.href));

  const rate = await page.$$eval('.a-row.a-size-small', rateList => rateList.map(item => item.textContent));

  const formatedScore = rate.map(item => rateFormater(item))

  const numberComents = await page.$$eval(".a-row.a-size-small", comentNumberlist => comentNumberlist.map(item => item.querySelector(".a-link-normal.s-underline-text.s-underline-link-text.s-link-style") === null ? "Sem comentários" : item.textContent))

  const formatedComents = numberComents.map(item => comentsFormater(item))

  const todayDate = new Date().toLocaleString("pt-BR", {dateStyle: "short"})

  for(let i = 0; i < 20; i++) {
    const position = [`${todayDate}`, `${i + 1}`, `${product[i]}`, `${links[i]}`, `${formatedScore[i]}`, `${formatedComents[i]}`]

    toExcel.push(position)
  }
  const sendingToExcel = toExcel.map(item => {
    excel.push({
      Data: item[0], 
      Posicao: item[1],
      Produto: item[2],
      Links: item[3],
      Nota: item[4],
      QtComentarios: item[5]
    })
  })

  console.log(toExcel)
  excelCreator(excel, tipo, nomeExcel)

  await browser.close();
}

module.exports = getAmazoninformation;
