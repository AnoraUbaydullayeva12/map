// const words = ["яблоко", "банан", "груша", "вишня", "персик", "апельсин"];

// const searchInput = document.getElementById("search");
// const resultList = document.getElementById("result");

// searchInput.addEventListener("input", () => {
//   const query = searchInput.value.toLowerCase();
//   const filteredWords = words.filter((word) => word.toLowerCase().includes(query));

//   resultList.innerHTML = filteredWords.map((word) => `<li>${word}</li>`).join("");
// });

//home task
const words = [
    { name: "Mars rug", price: 100, quantity: 24, image: "./img/one.png" },
    { name: "Keyboard sticker", price: 50, quantity: 10, image: "./img/two.png" },
    { name: "Smart watch", price: 300, quantity: 5, image: "./img/three.png" },
    { name: "Wireless keyboard", price: 150, quantity: 20, image: "./img/four.png" },
    { name: "Mouse", price: 80, quantity: 15, image: "./img/five.png" },
    { name: "AirPods", price: 100, quantity: 24, image: "./img/six.png" },
    { name: "Powerbank", price: 50, quantity: 10, image: "./img/seven.png" },
    { name: "USB flash drive", price: 300, quantity: 5, image: "./img/eaght.png" },
    { name: "Smartphone", price: 150, quantity: 20, image: "./img/nine.png" },
    { name: "Playstation 5", price: 80, quantity: 15, image: "./img/ten.png" },
    { name: "Yandex Station", price: 150, quantity: 20, image: "./img/eleven.png" },
    { name: "Planshet Samsung", price: 80, quantity: 15, image: "./img/twelve.png" }
  ];
  
  const productContainer = document.getElementById("products");
  const searchInput = document.getElementById("search");
  const searchButton = document.getElementById("searchBtn");
  
  function renderProducts(items) {
    productContainer.innerHTML = ""; // Очищаем перед ререндером
    productContainer.classList.remove("centered"); // Убираем класс перед рендером
  
    if (items.length === 0) {
      productContainer.innerHTML = "<p>❌ Товар не найден!</p>";
      return;
    }
  
    items.forEach(item => {
      const productHTML = `
        <div class="product-card">
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>💰 ${item.price} Coins</p>
          <p class="text">${item.quantity} dona mavjud</p>
        </div>
      `;
      productContainer.innerHTML += productHTML;
    });
  
    // Если найден только один товар — центрируем
    if (items.length === 1) {
      productContainer.classList.add("centered");
    }
  }
  
  // Отображаем все товары при загрузке
  renderProducts(words);
  
  // Фильтрация товаров по нажатию на кнопку
  searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    const filteredItems = words.filter(item => item.name.toLowerCase().includes(query));
    renderProducts(filteredItems);
  });
  