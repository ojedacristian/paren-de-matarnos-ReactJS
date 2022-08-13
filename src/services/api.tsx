import { GSearchRes } from "../interfaces/interfaces";

export default {
  list: (name: string): Promise<GSearchRes[]> => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${import.meta.env.VITE_APIKEY}&q="${
      name
    }" hallada muerta`;
    return fetch(url)
      .then((res) => res.json())
      .then((response) => {
         return response.items
      });
  },
};
