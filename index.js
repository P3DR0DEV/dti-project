const { trasnformDate } = require("./util/transformDate");
const { chowChawgas, meuCaninoFeliz, vaiRex } = require("./util/petHouses");

function petHouseValue(petHouse, dayValue, bigDogsQuantity, smallDogsQuantity) {
  const price =
    petHouse.prices[dayValue].bigDogsPrice * bigDogsQuantity +
    petHouse.prices[dayValue].smallDogsPrice * smallDogsQuantity;

  return { price, location: petHouse.locationInKm };
}

/**
 *
 * @param {string} date
 * @param {number} bigDogsQuantity
 * @param {number} smallDogsQuantity
 * @returns {void}
 */

function bestPetHouse(date, bigDogsQuantity, smallDogsQuantity) {
  const formatedDate = trasnformDate(date);

  let dayValue;
  if ((formatedDate.getDay() === 0) | (formatedDate.getDay() === 6)) {
    dayValue = "weekend";
  } else {
    dayValue = "businessDay";
  }

  // mcf = meu canino feliz
  const mcf = petHouseValue(
    meuCaninoFeliz,
    dayValue,
    bigDogsQuantity,
    smallDogsQuantity
  );

  // vr = vaiRex
  const vr = petHouseValue(
    vaiRex,
    dayValue,
    bigDogsQuantity,
    smallDogsQuantity
  );

  // cc = chowChawgas
  const cc = petHouseValue(
    chowChawgas,
    dayValue,
    bigDogsQuantity,
    smallDogsQuantity
  );

  const minPrice = Math.min(mcf.price, vr.price, cc.price);

  if (minPrice === mcf.price && minPrice === vr.price) {
    mcf.location < vr.location
      ? console.log(
          `Melhor Preço: Meu canino feliz R$${minPrice}, a ${mcf.location}km`
        )
      : console.log(`Melhor Preço: Vai Rex R$${minPrice}, a ${vr.location}km`);
  }
}

bestPetHouse("09/08/2023", 10, 1);
