const api = `https://fakestoreapi.com/products/?limit=29`;
const productContainer = document.querySelector(".product-container");

let productCard = "";
fetch(api)
    .then((res) => res.json())
    .then((data) => {
    data.map(
        (item) =>
        {   
        
            if (item.category.split(" ").includes("clothing")){
                productCard += `<div class="product-card relative group w-72 p-2 h-[28rem] cursor-grab">
            <div class="absolute top-5 right-5">
                <i class="ri-shopping-cart-line"></i>
            </div>

            <div
                class="w-full h-[85%] rounded-md overflow-hidden cursor-pointer group-hover:bg-gray-200 transition-colors duration-300">
                <img class="w-full h-full object-cover mix-blend-multiply"
                src=${item.image}
                alt="${item.description}">
            </div>

            <div class="w-full h-[15%] pt-2 flex items-center justify-between">
                <div>
                <p class="cursor-pointer uppercase text-xs">${item.title.split(" ").splice(0, 3).join(" ")}</p>
                <p class="text-sm font-medium">$${item.price}</p>
                </div>
                <div class="flex justify-center items-end flex-col">
                <i class="ri-star-s-fill text-xs"></i>
                <p class="text-sm">2.9/340</p>
                </div>
            </div>
            </div>`
            }

        productContainer.innerHTML = productCard
        }
    );
    })
    .catch((err) => console.log(err));


const cart = document.querySelector(".cartPanel");
const cartBtn = document.querySelector(".cart"); 

cartBtn.addEventListener("click", () => {
    cart.classList.toggle("hidden");
    cart.classList.toggle("block");
});