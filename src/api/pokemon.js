import pokemonListData from "./data.json";
import { map, sortBy } from "lodash";

export const getPokemonList = () => {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(sortBy(map(pokemonListData, pokemon => pokemon), "id"));
    }, 1500);
  });
};
