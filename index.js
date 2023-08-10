const { trasnformDate } = require("./util/transformDate");
const { petHouseValue } = require("./util/petHouseValue");
const { chowChawgas, meuCaninoFeliz, vaiRex } = require("./util/petHouses");

/**
 *
 * @param {string} date
 * @param {number} bigDogsQuantity
 * @param {number} smallDogsQuantity
 * @returns {void}
 */

function bestPetHouse(date, bigDogsQuantity = 0, smallDogsQuantity = 0) {
  const formatedDate = trasnformDate(date);

  //! Recebe o dia da semana e checa se é um final de semana ou Dia Util
  let dayValue;
  if ((formatedDate.getDay() === 0) | (formatedDate.getDay() === 6)) {
    dayValue = "weekend";
  } else {
    dayValue = "businessDay";
  }

  //! mcf = meu canino feliz
  const mcf = petHouseValue(
    meuCaninoFeliz,
    dayValue,
    bigDogsQuantity,
    smallDogsQuantity
  );

  //! vr = vaiRex
  const vr = petHouseValue(
    vaiRex,
    dayValue,
    bigDogsQuantity,
    smallDogsQuantity
  );

  //! cc = chowChawgas
  const cc = petHouseValue(
    chowChawgas,
    dayValue,
    bigDogsQuantity,
    smallDogsQuantity
  );

  //! Calcula o menor preço entre todos os resultados
  const minPrice = Math.min(mcf.price, vr.price, cc.price);

  //! Menor localização em KM para caso os 3 derem o mesmo preço, o melhor ser aquele que está mais proximo do canil
  const minLocation = Math.min(mcf.location, vr.location, cc.location);
  let bestLocation;
  if (minLocation === mcf.location) {
    bestLocation = "Meu canino feliz";
  } else {
    if (minLocation === vr.location) {
      bestLocation = "Vai Rex";
    } else {
      bestLocation = "ChowChawgas";
    }
  }
  let bestOption;

  //! Logica para checar qual é a melhor PetHouse
  if (minPrice === mcf.price) {
    if (minPrice === vr.price) {
      minPrice === cc.price
        ? bestLocation
        : (bestOption =
            mcf.location < vr.location ? "Meu canino feliz" : "Vai Rex");
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

bestPetHouse("12/08/2023", 2, 1);
