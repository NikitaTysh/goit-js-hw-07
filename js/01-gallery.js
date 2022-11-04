import { galleryItems } from "./gallery-items.js";
const gallery = document.querySelector(".gallery");
const elToAdd = galleryItems
  .map(
    (el) => `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="large-image.jpg"
        alt="${el.description}"
      />
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
      console.log(galleryItems.indexOf(el))
    }
  });
console.log(attForModal);
const instance = basicLightbox.create(
  `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
          data-source="large-image.jpg"
          src = "${attForModal}"
      />
    </a>
  </div>`
)
instance.show()
}
// document.addEventListener('click',_.debounce(()=>{
//   instance.close()
// },
// 500,
// {
//   leading : true
// }))



