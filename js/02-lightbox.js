import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const elToAdd = galleryItems
  .map(
    (el) => `<div class="gallery__item">
    <a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>
  </div>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", elToAdd);
gallery.addEventListener("click", func);
let attForModal;
function func(evt) {
  evt.preventDefault();
  galleryItems.forEach((el) => {
    if (el.preview === evt.target.attributes.src.value) {
      attForModal = el.original;
      console.log(gallerItems.indexOf(el))
    }
  });
console.log(attForModal);
}
console.log(SimpleLightbox)
let gal = new SimpleLightbox('.gallery__item a', {
   overlayOpacity	: 0.5 ,
   captionsData : 'alt',
   captionDelay : 300
});
gal.on('show.simplelightbox' )




