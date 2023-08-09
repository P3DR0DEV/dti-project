//! Shape de cada petHouse

const meuCaninoFeliz = {
  locationInKm: 2,
  prices: {
    businessDay: {
      bigDogsPrice: 40,
      smallDogsPrice: 20,
    },
    weekend: {
      bigDogsPrice: 48,
      smallDogsPrice: 24,
    },
  },
};

const vaiRex = {
  locationInKm: 1.7,
  prices: {
    businessDay: {
      bigDogsPrice: 50,
      smallDogsPrice: 15,
    },
    weekend: {
      bigDogsPrice: 55,
      smallDogsPrice: 20,
    },
  },
};

const chowChawgas = {
  locationInKm: 0.8,
  prices: {
    businessDay: {
      bigDogsPrice: 45,
      smallDogsPrice: 30,
    },
    weekend: {
      bigDogsPrice: 45,
      smallDogsPrice: 30,
    },
  },
};

module.exports = {
  chowChawgas,
  meuCaninoFeliz,
  vaiRex,
};
