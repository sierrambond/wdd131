const stores = {
    "83401": ["Green Leaf Nursery", "Blooming Botanicals"],
    "90210": ["Beverly Hills Blossoms", "Sunny Succulents"],
    "12345": ["Leaf & Love", "The Plant Corner"]
  };
  
  function findStores() {
    const zip = document.getElementById("zipInput").value.trim();
    const results = stores[zip] || ["No stores found in your area."];
    const list = document.getElementById("storeResults");
  
    list.innerHTML = "";
    results.forEach(store => {
      const li = document.createElement("li");
      li.textContent = store;
      list.appendChild(li);
    });
  }
  