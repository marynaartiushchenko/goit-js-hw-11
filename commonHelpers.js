import{S as d,i}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const m="41734083-bc7e7acddd543bb8e35e20b9d",u=document.getElementById("search-form"),f=document.getElementById("search-input"),l=document.getElementById("gallery"),c=document.getElementById("loader"),p=new d;u.addEventListener("submit",async s=>{s.preventDefault();const r=f.value.trim();if(!r){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}c.style.display="block";try{const n=await(await fetch(`https://pixabay.com/api/?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`)).json();if(n.hits&&n.hits.length>0){const t=n.hits.map(e=>({url:e.webformatURL,alt:e.tags,largeUrl:e.largeImageURL,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads}));y(t)}else i.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}catch(o){console.error("Error fetching data:",o),i.error({title:"Error",message:"An error occurred while fetching data. Please try again later.",position:"topRight"})}finally{c.style.display="none"}});function y(s){l.innerHTML="",s.forEach(r=>{const o=document.createElement("a");o.href=r.largeUrl,o.dataset.lightbox="gallery",o.dataset.title=`Likes: ${r.likes}, Views: ${r.views}, Comments: ${r.comments}, Downloads: ${r.downloads}`;const n=document.createElement("img");n.src=r.url,n.alt=r.alt,o.appendChild(n),l.appendChild(o)}),p.refresh()}
//# sourceMappingURL=commonHelpers.js.map
