/**
 * ! Recebe o parametro data no formato convencional BR e transforma em uma string compativel com o Date Object do JavaScript
 * @param {string} date
 *
 */

function trasnformDate(date) {
  const splitDate = date.split("/");
  var day = parseInt(splitDate[0], 10);
  var month = parseInt(splitDate[1], 10) - 1;
  var year = parseInt(splitDate[2], 10);

  const trasnformDate = new Date(year, month, day);
  return trasnformDate;
}

module.exports = {
  trasnformDate,
};
