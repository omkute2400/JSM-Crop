const products = [
  {
    id: 1,
    title: 'Eleven Star',
    img: 'https://via.placeholder.com/300x180?text=Eleven+Star',
    price: 'See Dosage',
    unit: 'Bio-Stimulant',
    desc: 'A premium agricultural formulation specially designed for Grapes and Chilli crops.',
    tags: [
      'Grapes: Improves shoot development',
      'Grapes: Promotes strong vine growth',
      'Grapes: Enhances new leaf formation',
      'Grapes: Gives better colour & shine',
      'Chilli: Increases flowering',
      'Chilli: Reduces flower & fruit drop',
      'Chilli: Improves fruit length & uniform colour',
      'Chilli: Increases branching',
      'Chilli: Promotes dark green foliage',
      'Chilli: Supports continuous flowering & growth',
      'Chilli: Improves plant height'
    ]
  }
];

const productGrid = document.getElementById('productGrid');
const detail = document.getElementById('productDetail');
const detailImg = document.getElementById('detailImg');
const detailTitle = document.getElementById('detailTitle');
const detailPrice = document.getElementById('detailPrice');
const detailDesc = document.getElementById('detailDesc');
const detailSpecs = document.getElementById('detailSpecs');

function renderProducts() {
  productGrid.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
    <img src="${p.img}" class="thumb"/>
    <div class="meta">
        <h3>${p.title} • ${p.unit}</h3>
        <p>${p.desc}</p>
    </div>
    <a href="eleven-star.html">
        <button>View</button>
    </a>
    `;

    const btn = document.createElement('button');
    // btn.textContent = 'View';
    btn.onclick = () => window.location.href = 'eleven-star.html';
    // card.appendChild(btn);
    productGrid.appendChild(card);
  });
}
renderProducts();

function openDetail(id) {
  const p = products.find(x => x.id === id);
  detailImg.src = p.img;
  detailTitle.textContent = p.title;
  detailPrice.textContent = '₹' + p.price + ' / ' + p.unit;
  detailDesc.textContent = p.desc;
  detailSpecs.innerHTML = '';

  p.tags.forEach(t => {
    const s = document.createElement('div');
    s.className = 'spec';
    s.textContent = t;
    detailSpecs.appendChild(s);
  });

  productGrid.style.display = "none";
  detail.classList.add('show');
  detail.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('backBtn').onclick = () => {
  detail.classList.remove('show');
  productGrid.style.display = "grid";
  window.scrollTo({
    top: document.getElementById('products').offsetTop - 20,
    behavior: 'smooth'
  });
};
