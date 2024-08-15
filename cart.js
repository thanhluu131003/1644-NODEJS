const listProducts = [
    {
        id: 1,
        image: "https://pos.nvncdn.com/4806c7-98159/ps/20230525_Aw2cX5rp.jpg",
        name: "BÒ ĐEN NẸP KHÓA_2TL",
        category: "ÁO DA",
        price: "5500000"
    },
    {
        id: 2,
        image: "https://pos.nvncdn.com/4806c7-98159/ps/20240108_fajU244nyA.jpeg",
        name: "BÒ TIMOTHY LÔNG – ĐEN",
        category: "ÁO DA",
        price: "4800000"
    },
    {
        id: 3,
        image: "https://pos.nvncdn.com/4806c7-98159/ps/20231016_5rzjl27WdN.jpeg",
        name: "MARTIN DÊ ĐEN LÔNG",
        category: "ÁO DA",
        price: "5500000"
    },
    {
        id: 4,
        image: "https://pos.nvncdn.com/4806c7-98159/ps/20230525_1NXa6E4l.jpg",
        name: "CỪU BOMBER ĐEN",
        category: "ÁO DA",
        price: "4800000"
    },
    {
        id: 5,
        image: "https://pos.nvncdn.com/4806c7-98159/ps/20230525_QBWANE23.jpg",
        name: "EASY RIDER JACKET – ĐEN",
        category: "ÁO DA",
        price: "5500000"
    },
    {
        id: 6,
        image: "https://pos.nvncdn.com/4806c7-98159/ps/20240108_ms5hfizg5U.jpeg",
        name: "BÒ DAVID LÔNG",
        category: "ÁO DA",
        price: "5500000"
    },
    {
        id: 7,
        image: "https://pos.nvncdn.com/4806c7-98159/ps/20231016_6RiC269X0O.jpeg",
        name: "CỪU ĐEN BIKER",
        category: "ÁO DA",
        price: "6400000"
    },
    {
        id: 8,
        image: "https://pos.nvncdn.com/4806c7-98159/ps/20230525_bKG3OeEh.jpg",
        name: "TRUCKER LEATHER JACKET – NÂU",
        category: "ÁO DA",
        price: "9500000"
    },
]
listProducts.forEach(function (item) {
    document.getElementById("products-list").innerHTML += `<li>
<div class="product-item">
  <div class="product-top">
    <a href="" class="product-thumb">
      <img
        src="${item.image}"
        alt=""
      />
    </a>
    <span data-id="${item.id}" class="buy-now">THÊM VÀO GIỎ HÀNG</span>
  </div>
  <div class="product-info">
    <a href="" class="product-cat">${item.category}</a>
    <a href="" class="product-name">${item.name}</a>
    <div class="product-price">${new Intl.NumberFormat('de-DE').format(item.price
    )}VNĐ</div>
  </div>
</div>
</li>`;
});


const btn_buy = document.querySelectorAll("span.buy-now");
btn_buy.forEach(function (btn, index) {

    btn.onclick = function () {
        let id = this.getAttribute("data-id");
        console.log(id)

        add_cart_product(id);
        // console.log(img_product)
    };
});
function add_cart_product(id) {
    let addtr = document.createElement("tr");

    let carItem = document.querySelectorAll("tbody tr");
    const filter_item_flow_id = listProducts.find(item => item.id == id)

    for (let i = 0; i < carItem.length; i++) {
        let proctT = document.querySelectorAll(".naem_prod");
        if (proctT[i].innerHTML == filter_item_flow_id.name) {
            let msg = "Sản phầm này đã có trong giỏ hàng rồi";
            alert(msg);
            return;
        }
    }

    let trcontent = `
    <tr>
        <td style="font-size: 18px">
        
            <span class="naem_prod">${filter_item_flow_id.name}</span>
        </td>
        <td>
                <img src="${filter_item_flow_id.image}" alt="">
        </td>
        <td>
            <p><span>${
        Number(filter_item_flow_id.price)}</span>VNĐ</p>
        <td>
            <input type="number" style="" value="1" min="1" max="">
        </td>
        <td style="cursor: pointer;">
            <button>Xóa</button>
        </td>
    </tr>`;
    addtr.innerHTML = trcontent;
    let cartTable = document.querySelector("tbody");
    cartTable.append(addtr);
    total_products();
    delete_cart();
}

function total_products() {
    let carItem = document.querySelectorAll("tbody tr");
    let total_detal = 0;

    for (let i = 0; i < carItem.length; i++) {
        let input_Value_product = carItem[i].querySelector("input").value;

        console.log(input_Value_product);

        let price_Value_product = carItem[i].querySelector("p span").innerText;

        console.log(price_Value_product);

        total1 = Number(input_Value_product) * Number(price_Value_product);
        total_detal += total1;
    }
    let show_price_total = document.querySelector(".tt_show");
    show_price_total.innerHTML = total_detal;

    inputchange();
}

function delete_cart() {
    let carItem = document.querySelectorAll("tbody tr");

    for (let i = 0; i < carItem.length; i++) {
        let proct_delete = document.querySelectorAll("td button");

        proct_delete[i].addEventListener("click", function (e) {
            let proct_delete_item = e.target;
            let cartitem = proct_delete_item.parentElement.parentElement;
            cartitem.remove();
            total_products();
        });
    }
}

function inputchange() {
    let carItem = document.querySelectorAll("tbody tr");

    for (let i = 0; i < carItem.length; i++) {
        let inputValue = carItem[i].querySelector("td input");
        inputValue.addEventListener("change", function () {
            total_products();
        });
    }
}

let container223 = document.querySelector(".container223");
let hidden = document.querySelector(".hidden");
hidden.style.display = "none";

document.querySelector("#cart_open_js").addEventListener("click", (e) => {
    e.preventDefault();
    open_nav()
});
container223.addEventListener("click", function (e) {
    if (e.target == e.currentTarget) {
        open_nav();
        hidden.style.display = "none";

    }
});


function open_nav() {
    hidden.style.display = "block";
    container223.classList.toggle("hidden");
}


