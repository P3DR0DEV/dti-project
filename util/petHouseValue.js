//! Retorna o Preço de cada banho com base no valor instanciado em PetHouse
/**
 *
 * @param {"meuCaninoFeliz" | "vaiRex" | "chowChawgas"} petHouse
 * @param {"weekend" | "businessDay"} dayValue
 * @param {number} bigDogsQuantity
 * @param {number} smallDogsQuantity
 * @returns {{price: number, location: number}}
 */
function petHouseValue(petHouse, dayValue, bigDogsQuantity, smallDogsQuantity) {
  const price =
    petHouse.prices[dayValue].bigDogsPrice * bigDogsQuantity +
    petHouse.prices[dayValue].smallDogsPrice * smallDogsQuantity;

  return { price, location: petHouse.locationInKm };
}

module.exports = { petHouseValue };
