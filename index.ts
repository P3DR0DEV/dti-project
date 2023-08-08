type Price = {
  bigDogs: number;
  smallDogs: number;
};
interface PetHouse {
  location: string;
  pricing: Price;
  weekendPricing: (
    dogSize: "bigDogs" | "smallDogs",
    percentage?: number
  ) => number;
}

const MeuCaninoFeliz: PetHouse = {
  location: "2km",
  pricing: {
    smallDogs: 20,
    bigDogs: 40,
  },
};
