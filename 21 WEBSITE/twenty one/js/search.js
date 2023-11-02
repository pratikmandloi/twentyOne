document.getElementById("search-field").addEventListener("input", async (e) => {
  const searchValue = e.target.value;

  if (searchValue.trim() === "") {
    document.getElementById("display-search-item").innerHTML = "";
    return;
  }

  try {
    const response = await fetch(`http://localhost:5055/api/products/search/${searchValue}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    
    const showData = document.getElementById("display-search-item");
    showData.innerHTML = ""; 

    if (data.Data.length > 0) {
      data.Data.forEach((newData) => {
        const itemHtml = `
          <div class="item">
          <a href=./product2.html?id=${newData._id}> 
            <img src=http://localhost:5055/api/static/${newData.image} alt="">
            <div class="item-details">
              <div class="product-details">
                <p>${newData.title.en}</p>
                <p class="desc">${newData.description.en.slice(0,60)}</p>
              </div>
              <p>&#8377;${newData.prices.price}</p>
            </div>
            </a>
          </div>`;

        showData.insertAdjacentHTML("beforeend", itemHtml);
      });
      
    } else {
      showData.innerHTML = "No results found.";
    }
  } catch (err) {
    console.log(err);
  }
});