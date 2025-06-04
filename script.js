const items = [
  { name: "초코파이", category: "과자", price: 1200, tags: ["달콤한", "고소한"], img: "images/chocopie.jpg" },
  { name: "A", category: "과자", price: 1200, tags: ["달콤한", "고소한"] },
  { name: "A", category: "과자", price: 1200, tags: ["달콤한", "고소한"] },
  { name: "비타500", category: "음료", price: 1000, tags: ["짭짤한"] },
  { name: "붕어싸만코", category: "아이스크림", price: 1500, tags: ["달콤한", "쌉싸름한"] },
  { name: "컵라면", category: "음식", price: 1800, tags: ["매운", "짭짤한"] },
  { name: "레쓰비", category: "카페인음료", price: 800, tags: ["달콤한"] },
];

let selectedTags = new Set();
let likedItems = new Set();

// 상황 버튼 클릭 시 태그 선택 토글
document.querySelectorAll('.situation-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const tag = this.getAttribute('data-tag');
    if (selectedTags.has(tag)) {
      selectedTags.delete(tag);
      this.classList.remove('active');
    } else {
      selectedTags.add(tag);
      this.classList.add('active');
    }
  });
});

function recommendGift() {
  const category = document.getElementById("category").value;
  const budget = parseInt(document.getElementById("budget").value);
  const tagFilterMode = document.getElementById("tagFilterMode").value;

  const resultDiv = document.getElementById("result");
  const cardWrapper = document.getElementById("cardList");

  if (selectedTags.size === 0) {
    resultDiv.style.display = "block";
    cardWrapper.innerHTML = `<p>⚠ 태그를 하나 이상 선택해주세요!</p>`;
    return;
  }

  if (isNaN(budget) || budget <= 0) {
    resultDiv.style.display = "block";
    cardWrapper.innerHTML = `<p>💡 예산을 올바르게 입력해주세요!</p>`;
    return;
  }

  let filtered = [];

  if (tagFilterMode === "include") {
    filtered = items.filter(item =>
      item.category === category &&
      item.price <= budget &&
      item.tags.every(tag => selectedTags.has(tag)) &&
      [...selectedTags].some(tag => item.tags.includes(tag))
    );
  } else {
    filtered = items.filter(item =>
      item.category === category &&
      item.price <= budget &&
      [...selectedTags].some(tag => item.tags.includes(tag))
    );
  }

  cardWrapper.innerHTML = "";

  if (filtered.length === 0) {
    cardWrapper.innerHTML = "<p>😢 조건에 맞는 선물이 없어요.</p>";
  } else {
    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${item.img || 'default-image.png'}" alt="${item.name}" class="card-image" />
        <div class="card-title">
          ${item.name}
          <span class="card-price">${item.price}원</span>
        </div>
        <div class="card-tags">
          ${item.tags.map(tag => `<span class="tag"># ${tag}</span>`).join(" ")}
        </div>
        <div class="card-footer">
          <button class="like-btn" onclick="toggleLike('${item.name}')">
            ${likedItems.has(item.name) ? '💖' : '🤍'}
          </button>
        </div>
      `;
      cardWrapper.appendChild(card);
    });
  }

  resultDiv.style.display = "flex";
}

// 찜 토글
function toggleLike(itemName) {
  if (likedItems.has(itemName)) {
    likedItems.delete(itemName);
  } else {
    likedItems.add(itemName);
  }
  localStorage.setItem("likedItems", JSON.stringify([...likedItems]));
  updateLikedBox();
  recommendGift();
}


// 찜 박스 업데이트
function updateLikedBox() {
  const likedBox = document.getElementById("likedBox");
  likedBox.innerHTML = "";

  if (likedItems.size === 0) {
    likedBox.innerHTML = "<p>찜한 상품이 없습니다.</p>";
    return;
  }

  likedItems.forEach(itemName => {
    const item = items.find(i => i.name === itemName);
    const card = document.createElement("div");
    card.className = "liked-card";
    card.innerHTML = `
      <div class="liked-content">
        <div class="card-title">
          ${item.name} <span class="card-price">${item.price}원</span>
        </div>
        <div class="card-tags">
          ${item.tags.map(tag => `<span class="tag"># ${tag}</span>`).join(" ")}
        </div>
      </div>
      <div class="divider-container">
        <div class="vertical-divider"></div>
        <button class="unlike-btn" onclick="toggleLike('${item.name}')">💔</button>
      </div>
    `;
    likedBox.appendChild(card);
  });

}


// 찜 박스 토글
document.getElementById("showLiked").addEventListener("click", () => {
  const likedBox = document.getElementById("likedBox");
  if (likedBox.style.display === "none") {
    updateLikedBox();
    likedBox.style.display = "block";
  } else {
    likedBox.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const storedLikes = localStorage.getItem("likedItems");
  if (storedLikes) {
    likedItems = new Set(JSON.parse(storedLikes));
    updateLikedBox();
  }
});


// 좌우 스크롤 버튼
document.getElementById("scrollLeft").addEventListener("click", () => {
  document.getElementById("cardList").scrollBy({ left: -220, behavior: "smooth" });
});
document.getElementById("scrollRight").addEventListener("click", () => {
  document.getElementById("cardList").scrollBy({ left: 220, behavior: "smooth" });
});
