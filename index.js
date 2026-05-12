import{a as w,S,i as s}from"./assets/vendor-73qhTu8_.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const P="55813974-942b45b0343cd6217098dfac4",q="https://pixabay.com/api/";async function u(o,r){return(await w.get(q,{params:{key:P,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}})).data}const m=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=document.querySelector(".load-more-btn"),R=new S(".gallery a",{captionsData:"alt",captionDelay:250});function p(o){const r=o.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>

        <div class="image-info">
          <div class="image-info-item">
            <p class="image-info-title">Likes</p>
            <p class="image-info-value">${e.likes}</p>
          </div>

          <div class="image-info-item">
            <p class="image-info-title">Views</p>
            <p class="image-info-value">${e.views}</p>
          </div>

          <div class="image-info-item">
            <p class="image-info-title">Comments</p>
            <p class="image-info-value">${e.comments}</p>
          </div>

          <div class="image-info-item">
            <p class="image-info-title">Downloads</p>
            <p class="image-info-value">${e.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",r),R.refresh()}function E(){m.innerHTML=""}function y(){f.classList.add("is-visible")}function h(){f.classList.remove("is-visible")}function v(){g.classList.remove("is-hidden")}function l(){g.classList.add("is-hidden")}const L=document.querySelector(".form"),B=document.querySelector(".load-more-btn"),b=15;let c="",a=1;L.addEventListener("submit",I);B.addEventListener("click",M);async function I(o){o.preventDefault();const r=o.currentTarget.elements["search-text"].value.trim();if(!r){s.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}c=r,a=1,E(),l(),y();try{const e=await u(c,a);if(e.hits.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(e.hits),a*b>=e.totalHits?(l(),s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v()}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{h(),L.reset()}}async function M(){a+=1,l(),y();try{const o=await u(c,a);p(o.hits),$(),a*b>=o.totalHits?s.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}):v()}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{h()}}function $(){const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
