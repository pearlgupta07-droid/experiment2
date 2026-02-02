function openExperiment(expId) {
    let exps = document.getElementsByClassName("experiment");
    for (let i = 0; i < exps.length; i++) {
        exps[i].style.display = "none";
    }
    if (expId) {
        document.getElementById(expId).style.display = "block";
    }
}

// Character Counter
function countChars() {
    let text = document.getElementById("textInput").value;
    document.getElementById("charCount").innerText = text.length;
}

// Product Filter
function filterProducts() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let items = document.querySelectorAll("#productList li");

    items.forEach(item => {
        if (item.innerText.toLowerCase().includes(input)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Product Details
function showDetails(name, price) {
    document.getElementById("pName").innerText = name;
    document.getElementById("pPrice").innerText = price;
}

