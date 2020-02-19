/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hello World from Webpacker')

const ratingForm = document.querySelector(".rating-stars");

const empty = (element) => {
  element.classList.remove("fas");
  element.classList.add("far");
};

const fill = (element) => {
  element.classList.remove("far");
  element.classList.add("fas");
};

const emptyAll = () => {
  ratingForm.querySelectorAll("i").forEach((star) => {
    empty(star);
  })
}

const rates = (nb_stars) => {
  if (nb_stars === '0') {
    emptyAll();
  } else {
    let element = document.getElementById(nb_stars);
    fill(element);
    while ( element = element.previousSibling ){
      if (element.tagName === 'I') {
        fill(element);
      }
    }
    element = document.getElementById(nb_stars);
    while ( element = element.nextSibling ){
      if (element.tagName === 'I') {
        empty(element);
      }
    }
  }
}


if (ratingForm) {
  ratingForm.addEventListener("mouseleave", (event) => {
    rates(document.getElementById("rating-input").value)
  })
  ratingForm.querySelectorAll("i").forEach((star) => {
    star.addEventListener("mouseover", (event) => {
      element = event.currentTarget;
      rates(element.id);
    })
    star.addEventListener("click", (event) => {
      element = event.currentTarget;
      document.getElementById("rating-input").value = element.id;
    })
  })
}
