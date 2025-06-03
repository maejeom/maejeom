const items = [
  { name: "초코파이", category: "과자", price: 1200, tags: ["달콤한", "고소한"] },
  { name: "A", category: "과자", price: 1200, tags: ["달콤한", "고소한"] },
  { name: "A", category: "과자", price: 1200, tags: ["달콤한", "고소한"] },
  { name: "비타500", category: "음료", price: 1000, tags: ["짭짤한"] },
  { name: "붕어싸만코", category: "아이스크림", price: 1500, tags: ["달콤한", "쌉싸름한"] },
  { name: "컵라면", category: "음식", price: 1800, tags: ["매운", "짭짤한"] },
  { name: "레쓰비", category: "카페인음료", price: 800, tags: ["달콤한"] },
];

let selectedTags = new Set(); // 중복 선택된 태그 저장용

// 상황 버튼(태그 버튼) 클릭 시 토글 기능 적용
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
      selectedTags.size === item.tags.length &&
      [...selectedTags].every(tag => item.tags.includes(tag))
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
        <div class="card-title">${item.name}</div>
        <div class="card-details">${item.price}원</div>
        <div class="card-details">카테고리: ${item.category}</div>
        <div class="card-details"># ${item.tags.join(' # ')}</div>
      `;
      cardWrapper.appendChild(card);
    });
  }

  resultDiv.style.display = "flex";
}

document.getElementById("scrollLeft").addEventListener("click", () => {
  document.getElementById("cardList").scrollBy({ left: -220, behavior: "smooth" });
});

document.getElementById("scrollRight").addEventListener("click", () => {
  document.getElementById("cardList").scrollBy({ left: 220, behavior: "smooth" });
});
