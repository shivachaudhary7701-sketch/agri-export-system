const form = document.getElementById("exportForm");
const list = document.getElementById("exportList");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        farmer: document.getElementById("farmer").value,
        product: document.getElementById("product").value,
        country: document.getElementById("country").value
    };

    await fetch("/add-export", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    loadExports();
});

async function loadExports() {
    const res = await fetch("/exports");
    const data = await res.json();

    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.farmer} - ${item.product} → ${item.country}`;
        list.appendChild(li);
    });
}

loadExports();