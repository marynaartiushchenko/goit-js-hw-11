import"./assets/vendor-17d142d2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a="41734083-bc7e7acddd543bb8e35e20b9d",c=document.getElementById("search-form"),l=document.getElementById("search-input");c.addEventListener("submit",async i=>{i.preventDefault();const r=l.value.trim();if(!r){iziToast.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}try{const o=await(await fetch(`https://pixabay.com/api/?key=${a}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`)).json();if(o.hits&&o.hits.length>0){const e=o.hits.map(t=>({id:t.id,url:t.webformatURL,alt:t.tags}));document.dispatchEvent(new CustomEvent("updateGallery",{detail:e}))}else iziToast.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(n){console.error("Error fetching data:",n),iziToast.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}});document.addEventListener("updateGallery",i=>{const r=document.getElementById("gallery"),o=i.detail.map(e=>`<img src="${e.url}" alt="${e.alt}" />`).join("");r.innerHTML=o});
//# sourceMappingURL=commonHelpers.js.map