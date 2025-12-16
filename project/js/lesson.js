const tabBlocks = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')

let tabIndex = 0  

const hideTabContent = () => {
    tabBlocks.forEach(block => {
        block.style.display = 'none'
    })

    tabItems.forEach(btn => {
        btn.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (i = 0) => {
    tabBlocks[i].style.display = 'block'
    tabItems[i].classList.add('tab_content_item_active')
    tabIndex = i
}
hideTabContent()
showTabContent(0)
tabItems.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        hideTabContent()
        showTabContent(i)
    })
})
setInterval(() => {
    tabIndex++

    if (tabIndex >= tabBlocks.length) {
        tabIndex = 0
    }

    hideTabContent()
    showTabContent(tabIndex)
}, 3000)
const rates = {
    som: 1,    
    usd: 87,   
    eur: 94    
};
const inputs = document.querySelectorAll('.inner_converter input');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        const fromCurrency = input.id;             
        const value = parseFloat(input.value);
        if (isNaN(value)) {
            inputs.forEach(i => {
                if (i !== input) i.value = '';
            });
            return;
        }
        let inSom;
        if (fromCurrency === 'som') {
            inSom = value;
        } else {
            inSom = value * rates[fromCurrency];
        }
        inputs.forEach(other => {
            if (other === input) return;
            const toCurrency = other.id;
            let result;
            if (toCurrency === 'som') {
                result = inSom;
            } else {
                result = inSom / rates[toCurrency];
            }
            other.value = result.toFixed(2);
        });
    });
});
const card = document.querySelector(".card");
const prevBtn = document.querySelector("#btn-prev");
const nextBtn = document.querySelector("#btn-next");
const BASE_URL = "https://jsonplaceholder.typicode.com/todos";
const MAX_ID = 200;
let currentId = 1;
const normalizeId = (id) => {
  if (id > MAX_ID) return 1;
  if (id < 1) return MAX_ID;
  return id;
};
const fetchPost = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
};
const renderCard = (post) => {
  card.innerHTML = `
    <h4>${post.id}. ${post.title}</h4>
    <p>${post.body}</p>
  `;
};
const loadCard = async (id) => {
  try {
    const normalized = normalizeId(id);
    const post = await fetchPost(normalized);
    currentId = normalized;
    renderCard(post);
  } catch (e) {
    console.error("Card load error:", e);
    card.innerHTML = "<p>Ошибка загрузки карточки</p>";
  }
};
loadCard(currentId);
nextBtn.addEventListener("click", () => loadCard(currentId + 1));
prevBtn.addEventListener("click", () => loadCard(currentId - 1));
fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => console.log("Posts list:", data))
  .catch((err) => console.error("Posts fetch error:", err));