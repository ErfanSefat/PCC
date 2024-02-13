const URL = "https://erfansefat.github.io/PCC/spotifycard.json";
const musiccard = document.createElement("div");
const SpotiScroll1 = document.getElementById("SpotiScroll1");
const SpotiScroll2 = document.getElementById("SpotiScroll2");
musiccard.className = "musiccard";
let i = 0;
async function loadData() {
  const items = await fetch(URL);
  const data = items.json();
  return data;
}
async function loadItems() {
  const items = await loadData();
  items.albums.forEach((item) => {
    const duplicatedItem = musiccard.cloneNode(true);
    duplicatedItem.style.backgroundImage = `URL("./pics/${item.item_img}.png")`;
    duplicatedItem.alt = `${item.item_name}`;
    if(i < 5){SpotiScroll1.appendChild(duplicatedItem);}
    else{SpotiScroll2.appendChild(duplicatedItem);}
    i++;
  });
  addAnimation();
}
const scrollers = document.querySelectorAll(".scroller");
// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }
async function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scrollerinner");
    const scrollerContent = Array.from(scrollerInner.children);
    console.log(scrollerContent);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
loadItems();
