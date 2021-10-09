const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const post = (path, body) => {
    return fetch(BACKEND_URL + path, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  
  export const get = (path) => {
    return fetch(BACKEND_URL + path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  
  export const put = (path, body) => {
    return fetch(BACKEND_URL + path, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

    export const del = (path) => {
      return fetch(BACKEND_URL + path, {
         method: "DELETE",
         headers: {
           "Content-Type": "application/json",
        },
      });
  };