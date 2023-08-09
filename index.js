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

function bestPetHouse(date, bigDogsQuantity = 0, smallDogsQuantity = 0) {
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
  let bestOption;

  if (minPrice === mcf.price) {
    if (minPrice === vr.price) {
      bestOption = mcf.location < vr.location ? "Meu canino feliz" : "Vai Rex";
    } else if (minPrice === cc.price) {
      bestOption =
        mcf.location < cc.location ? "Meu canino feliz" : "ChowChawgas";
    } else {
      bestOption = "Meu canino feliz";
    }
  } else if (minPrice === vr.price) {
    if (minPrice === cc.price) {
      bestOption = vr.location < cc.location ? "Vai Rex" : "ChowChawgas";
    } else {
      bestOption = "Vai Rex";
    }
  } else {
    bestOption = "ChowChawgas";
  }

  console.log(
    `Melhor Preço: ${bestOption} R$${minPrice}, a ${
      bestOption === "Meu canino feliz"
        ? mcf.location
        : bestOption === "Vai Rex"
        ? vr.location
        : cc.location
    }km`
  );
}

bestPetHouse("09/08/2023", 10, 20);
