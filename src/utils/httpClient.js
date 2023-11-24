const API = "https://api.jikan.moe/v4/";


export function getAnime(path) {
    return fetch(API + path, {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).then((result) => result.json());
  }