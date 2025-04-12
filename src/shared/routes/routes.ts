export const APP_URL = process.env.APP_URL as string;

export const PUBLIC_URL = {
  root: (url = "") => `${url ? url : ""}`,

  home: () => PUBLIC_URL.root("/"),
  forecast: (query = "") => PUBLIC_URL.root(`/forecast${query}`),
  favourites: (query = "") => PUBLIC_URL.root(`/favourites${query}`),
};
