import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const imageGallery = document.querySelector(".gallery");
const galleryList = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
<a class="gallery__link" href="large-image.jpg">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</div>`;
  })
  .join("");

imageGallery.innerHTML = galleryList;
imageGallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  console.log(imageGallery);
  const instance = basicLightbox.create(
    `<img src = ${event.target.dataset.source} width="800" height="600">`
  );
  instance.show();
  boxRef.addEventListener("keydown", (event) => {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  });
});
