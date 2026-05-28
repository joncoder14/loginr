//create the routes

import { formLogin } from "./views/login";
import { client } from "./views/client";

const routes = {
  "/": formLogin,
  "/client": client,
};

export function router() {
  const path = window.location.pathname; //get the current url and save it
  const user = JSON.parse(localStorage.getItem("user"));

  if (path === "/admin" && user?.role !== "admin") {
    history.pushState({}, "", "/");
    document.getElementById("app").innerHTML = `<h1>buen intento listillo</h1>`;
    return;
  } else if (path === "/client" && user?.role !== "client") {
    history.pushState({}, "", "/");
    document.getElementById("app").innerHTML = `<h1>buen intento listillo</h1>`;
    return;
  }

  const view = routes[path] || (() => `<h1> 404 error</h1>`); // get the function that have to render from the routes object if not found return 404
  document.getElementById("app").innerHTML = view(); //render the function that saved before to the app container
}
