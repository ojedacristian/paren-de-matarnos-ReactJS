export const api = {
  list: (name: string) => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${'YOURAPIKEY'}&q="${
      name
    }" hallada muerta`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  },
};

export default api;
