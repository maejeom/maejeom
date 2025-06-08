const items = [
  { name: "파워에이드", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "포카리 스웨트", category: "음료", price: 0, tags: ["신맛 나는"] },
  { name: "게토레이", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "델몬트 오렌지", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "봉봉 알로에큐브 복숭아", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "델픽 납작복숭아 우롱티 제로", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "델픽 블루베리 아르테미스 제로", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "모구모구 망고맛", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "모구모구 복숭아맛", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "블루레몬에이드", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "모히또에이드", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "초록 매실", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "레몬에이드 탄산", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "밀키스", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "립톤 제로 아이스티 복숭아", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "웰치제로 그레이프", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "보성홍차 아이스티 제로 복숭아", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "보성홍차 아이스티 제로 샤인머스캣", category: "음료", price: 0, tags: ["쌉싸름한", "신맛 나는"] },
  { name: "납작 복숭아 아이스티 제로 홍차", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "애플청포도 아이스티 녹차", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "루비자두 아이스티 녹차", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "복숭아 녹차", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "비타C 자몽에이드", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "알로에 베라킹", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "뽀로로 밀크맛", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "뽀로로 딸기맛", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "자두 녹차", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "레몬 녹차", category: "음료", price: 0, tags: ["쌉싸름한", "신맛 나는"] },
  { name: "복숭아 녹차", category: "음료", price: 0, tags: ["달콤한", "쌉싸름한"] },
  { name: "블루베리 아이스티", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "청포도 녹차", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "애플 망고", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "미에로 화이바", category: "음료", price: 0, tags: ["달콤한", "신맛 나는는"] },
  { name: "티즐 제로 피치얼그레이", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "하늘보리", category: "음료", price: 0, tags: ["고소한"] },
  { name: "옥수수 수염차", category: "음료", price: 0, tags: ["고소한"] },
  { name: "제로소다 복숭아", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "나이스워터 제로소다 청사과", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "제로소다 포도", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "제로소다 파인애플", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "복숭아티", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "스마일 애플망고", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "스마일 블랙자두", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "브이톡 블루 레몬에이드", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "레몬에이드 탄산", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "자몽에이드 탄산", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "웰치스 그레이프", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "데미소다 레드애플", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "환타 오렌지", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "수박소다", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "마운틴듀", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "밀키스", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "포도 봉봉", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "립톤 제로 복숭아 아이스티", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "제주 한라봉 에이드", category: "음료", price: 0, tags: ["달콤한", "신맛 나는"] },
  { name: "코코팜 망고코넛", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "코코팜 화이트 요구르트", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "초코타임", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "딸기타임", category: "음료", price: 0, tags: ["달콤한"] },
  { name: "바나나맛 우유", category: "음료", price: 0, tags: ["달콤한"] }
];


let selectedTags = new Set();
let likedItems = new Set();

// 태그 버튼 클릭 시 선택/해제
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

  // 예산 입력 오류 안내
  if (isNaN(budget) || budget <= 0) {
    resultDiv.style.display = "block";
    cardWrapper.innerHTML = "<p>💡 예산을 올바르게 입력해주세요!</p>";
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

// 찜 상태 토글
function toggleLike(itemName, shouldUpdateRecommend = true) {
  if (likedItems.has(itemName)) {
    likedItems.delete(itemName);
  } else {
    likedItems.add(itemName);
  }
  localStorage.setItem("likedItems", JSON.stringify([...likedItems]));
  updateLikedBox();
  if (shouldUpdateRecommend) {
    recommendGift();
  }
}

// 찜한 항목 박스 업데이트
function updateLikedBox() {
  const likedBox = document.getElementById("likedBox");
  likedBox.innerHTML = "";

  if (likedItems.size === 0) {
    likedBox.innerHTML = "<p>찜한 상품이 없습니다.</p>";
    return;
  }

  likedItems.forEach(itemName => {
    const item = items.find(i => i.name === itemName);
    if (!item) return;
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
      <div class="divider-container" style="display: flex; align-items: stretch;">
        <div class="vertical-divider"></div>
        <button class="unlike-btn" onclick="toggleLike('${item.name}', false)">❌</button>
      </div>
    `;
    likedBox.appendChild(card);
  });
}

// 찜 박스 열고 닫기
document.getElementById("showLiked").addEventListener("click", () => {
  const likedBox = document.getElementById("likedBox");
  if (likedBox.style.display === "none") {
    updateLikedBox();
    likedBox.style.display = "block";
  } else {
    likedBox.style.display = "none";
  }
});

// 로컬 스토리지에서 찜 항목 불러오기
document.addEventListener("DOMContentLoaded", () => {
  const storedLikes = localStorage.getItem("likedItems");
  if (storedLikes) {
    likedItems = new Set(JSON.parse(storedLikes));
    updateLikedBox();
  }
});

// 좌우 스크롤 버튼 기능
document.getElementById("scrollLeft").addEventListener("click", () => {
  document.getElementById("cardList").scrollBy({ left: -220, behavior: "smooth" });
});

document.getElementById("scrollRight").addEventListener("click", () => {
  document.getElementById("cardList").scrollBy({ left: 220, behavior: "smooth" });
});

const showGiftLogBtn = document.getElementById('showGiftLog');
const giftLogModal = document.getElementById('giftLogModal');
const closeGiftLogBtn = document.getElementById('closeGiftLog');
const giftLogForm = document.getElementById('giftLogForm');
const giftLogList = document.getElementById('giftLogList');

// 받은 선물 기록 모달 열릴 때 상품명 옵션 생성 (items 배열 사용)
showGiftLogBtn.onclick = () => {
  const giftNameSelect = document.getElementById('giftName');
  giftNameSelect.innerHTML = '<option value="">받은 선물 선택</option>';
  items.forEach(item => {
    const option = document.createElement('option');
    option.value = item.name;
    option.textContent = item.name;
    giftNameSelect.appendChild(option);
  });
  // 기타 옵션 추가
  const etcOption = document.createElement('option');
  etcOption.value = '기타';
  etcOption.textContent = '기타';
  giftNameSelect.appendChild(etcOption);

  document.getElementById('customGiftName').style.display = 'none';
  giftLogModal.style.display = 'block';
  loadGiftLogs();
};

// 기타 선택 시 입력창 표시
document.getElementById('giftName').addEventListener('change', function() {
  const customInput = document.getElementById('customGiftName');
  if (this.value === '기타') {
    customInput.style.display = 'block';
    customInput.required = true;
  } else {
    customInput.style.display = 'none';
    customInput.required = false;
  }
});

giftLogForm.onsubmit = (e) => {
  e.preventDefault();
  const friend = document.getElementById('friendName').value.trim();
  let gift = document.getElementById('giftName').value;
  const customGift = document.getElementById('customGiftName').value.trim();
  const date = document.getElementById('giftDate').value;

  // '기타'를 선택했을 경우, 입력된 사용자 정의 선물명 사용
  if (gift === '기타') {
    if (!customGift) return;
    gift = customGift;
  }

  if (!friend || !gift || !date) return;

  const logs = JSON.parse(localStorage.getItem('giftLogs') || '[]');
  logs.unshift({ friend, gift, date });
  localStorage.setItem('giftLogs', JSON.stringify(logs));
  giftLogForm.reset();
  document.getElementById('customGiftName').style.display = 'none';
  loadGiftLogs();
};

function loadGiftLogs() {
  const logs = JSON.parse(localStorage.getItem('giftLogs') || '[]');
  const giftLogList = document.getElementById('giftLogList');
  giftLogList.innerHTML = '';

  logs.forEach((log, index) => {
    const card = document.createElement('div');
    card.className = 'gift-log-card';
    card.innerHTML = `
      <div class="gift-content">
        <div class="gift-date">${log.date}</div>
        <div class="gift-info">${log.friend}에게 받은 <span style="color:#ff4d88;">"${log.gift}"</span></div>
      </div>
      <div class="divider-container">
        <div class="vertical-divider"></div>
        <button class="delete-btn" onclick="deleteGiftLog(${index})">❌</button>
      </div>
    `;
    giftLogList.appendChild(card);
  });
}

function deleteGiftLog(index) {
  const logs = JSON.parse(localStorage.getItem('giftLogs') || '[]');
  logs.splice(index, 1); // 해당 인덱스 제거
  localStorage.setItem('giftLogs', JSON.stringify(logs));
  loadGiftLogs(); // 다시 렌더링
}

closeGiftLogBtn.onclick = () => {
  giftLogModal.style.display = 'none';
};
