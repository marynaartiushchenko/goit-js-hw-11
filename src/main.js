import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// search.js
const apiKey = "41734083-bc7e7acddd543bb8e35e20b9d";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      title: "Error",
      message: "Please enter a search query.",
      position: "topRight",
    });
    return;
  }

  try {
    const response = await fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      const images = data.hits.map((hit) => ({ id: hit.id, url: hit.webformatURL, alt: hit.tags }));
      document.dispatchEvent(new CustomEvent("updateGallery", { detail: images }));
    } else {
      iziToast.info({
        title: "Info",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    iziToast.error({
      title: "Error",
      message: "An error occurred while fetching data. Please try again later.",
      position: "topRight",
    });
  }
});


// gallery.js
document.addEventListener("updateGallery", (event) => {
  const galleryContainer = document.getElementById("gallery");
  const images = event.detail;

  const galleryMarkup = images
    .map((image) => `<img src="${image.url}" alt="${image.alt}" />`)
    .join("");

  galleryContainer.innerHTML = galleryMarkup;
});
