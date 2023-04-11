const xl = require("excel4node");


const excelCreator = (obj, category, path) => {
    const wb = new xl.Workbook();
    const ws = wb.addWorksheet(category);
    const headingColumnNames = [
      "Data",
      "Posicao",
      "Produto",
      "Link",
      "Nota",
      "QtComentarios",
      
    ];

    let headingColumnIndex = 1;
    headingColumnNames.forEach((heading) => {
      ws.cell(1, headingColumnIndex++).string(heading);
    });

    let rowIndex = 2;
    obj.forEach((record) => {
      let columnIndex = 1;
      Object.keys(record).forEach((columnName) => {
        ws.cell(rowIndex, columnIndex++).string(record[columnName]);
      });
      rowIndex++;
    });

    wb.write(`../reports/${path}.xlsx`);
    console.log("Planilha criada");
}

module.exports = excelCreator;