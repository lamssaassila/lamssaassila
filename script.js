const creations = [
  { image:"images/caftan1.jpg", nom:"Caftan brodé bleu", prix:"950 MAD" },
  { image:"images/takchita1.jpg", nom:"Takchita champagne", prix:"1200 MAD" },
  { image:"images/mon-caftan1.jpg", nom:"Caftan traditionnel rouge", prix:"1100 MAD" },
];
const gallery = document.getElementById("gallery");
if (gallery) {
  creations.forEach(item => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${item.image}" alt="${item.nom}">
      <h3>${item.nom}</h3>
      <p>${item.prix}</p>
    `;
    div.addEventListener("click", ()=> {
      const modal = document.createElement("div");
      modal.className="lightbox";
      modal.innerHTML = `
        <div class="lb-content"><img src="${item.image}">
        <button class="lb-close">✕</button></div>`;
      document.body.appendChild(modal);
      modal.querySelector(".lb-close").onclick = ()=> modal.remove();
    });
    gallery.appendChild(div);
  });
}