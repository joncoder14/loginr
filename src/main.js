import "./style.css";

import { router } from "./router";

//this is becauase then you wont be able to acces to the html and then return a 404

//this wait for the html to fully load
document.addEventListener("DOMContentLoaded", () => {
  router(); //when its done then render
});

//this listen the event when the user go back y go ahead in the page
window.addEventListener("popstate", router);

//listen all clicks
document.addEventListener("click", (e) => {
  //check if the element clicked have data-link
  if (e.target.matches("[data-link]")) {
    e.preventDefault(); //when click the link doesnt reload the page

    //change the route without reloding the page
    history.pushState({}, "", e.target.href); //state/title/route

    //after change the route then render
    router();
  }
});
