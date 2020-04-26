const API_ROOT_URL = "https://jsonplaceholder.typicode.com/";

const API_ENDPOINT_PATHS = {
  albums: { path: "albums/", method: "get" },
  posts: { path: "posts/", method: "get" },
  todos: { path: "todos/", method: "get" },
  users: { path: "users/", method: "get" }
};

// prepend root url
Object.keys(API_ENDPOINT_PATHS).forEach(
  key =>
    (API_ENDPOINT_PATHS[key].url = API_ENDPOINT_PATHS[key].path.replace(
      /^/,
      API_ROOT_URL
    ))
);

export const API_ENDPOINTS = API_ENDPOINT_PATHS;
