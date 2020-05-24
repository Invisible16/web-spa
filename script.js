var mybutton = document.getElementById("back-to-top");
var navbar=document.getElementById("navbar")
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    navbar.classList.add("fixed-top")
  } else {
    mybutton.style.display = "none";
    navbar.classList.remove("fixed-top")
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click',topFunction)
function topFunction() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// LOGIN 
let user={email:'phuong@gmail.com', pass:'123456'}
function login(){
  let email=document.getElementById('email')
  let fail=document.getElementById('fail')
  let password=document.getElementById('password')
  if (email.value === user.email && password.value===user.pass){
  window.location.href='/'
  }
  else{
    fail.classList.remove('d-none')
  }
}

//CATEGORY
let addtoCart = document.getElementsByClassName('addtoCart')
let cart = document.getElementById('card');
let products = [{
  id: 0,
  name: 'Deep Hydration Night Cream',
  image:"https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/s/rsp3086_endota_organics_holiday_essentials_pack_combination_to_oily_435.png",
  price: 64
}, {
  id: 1,
  name: 'Hand Sanitiser Mist',
  image: "https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/e/n/endotalivewell_handsanitisermist_web_1000px.png",
  price: 40
}, {
  id: 2,
  name: 'Lip & Eye Power Serum ',
  image: "https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/o/rof2010_lip_eye_power_serum_15ml_organic_skincare_product_435.png",
  price: 36
}, {
  id: 3,
  name: 'Coconut Resurfacing Polish ',
  image: "https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/n/rnb2019_coffee_coconut_resurfacing_polish_180ml_organic_skincare_product_435.png",
  price: 43
},
{
  id: 4,
  name: 'Coconut Oil & Shea Butter Instant Tanner',
  image: "https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/o/rob2028_lilly_pilly_lime_gradual_tanner_180ml_organic_skincare_product_435.png",
  price: 46
},
{
  id: 5,
  name: 'Jojoba & Coconut Dry Shimmer Oil ',
  image: "https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/n/rnb3040_endota_organics_jojoba_coconut_dry_shimmer_oil_50ml_organic_skincare_product_435.png",
  price: 40
},
{
  id: 6,
  name: 'Natural Clear Zinc SPF 50+',
  image: "https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/e/n/endota_natural_clear-zinc_sunscreen_organic_skincare_product_435.png",
  price: 24
}, {
  id: 7,
  name: 'Mint & Macadamia Recovery Bath',
  image: "https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/s/rsb2030_mint_macadamia_recovery_bath_300g_skincare_product_435.png",
  price: 64
}, {
  id: 8,
  name: 'Restore Pack',
  image: "https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/s/rsp3211_endota_rest_restore_pack_skincare_product_435.png",
  price: 80
},
{
  id: 9,
  name: 'Protecting Barrier Balm',
  image: "https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/o/rob3101_moisture_rich_belly_butter_170ml_nurture_organic_skincare_product_453_1.png",
  price: 64
}, {
  id: 10,
  name: 'Sensitive H20 Gel',
  image:"https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/s/rsf2586_endota_organics_nurture_mum_to_be_pack_435.png",
  price: 64
}, {
  id: 11,
  name: 'Clarifying Detox Mask',
  image:"https://endotaspa.com.au/media/catalog/product/cache/946458b437e259aca1abccfd3101badf/r/s/rsf2610_endota_organics_nurture_drawstring_canvas_bucket_bag_435.png",
  price: 32
}]
let sectionProduct = document.getElementById('section-product');
let cartNum = document.getElementById('cartNum')
let content = "";
let cartMini = document.getElementById('cartMini')
let carts = [];
for (let i = 0; i < products.length; i++) {
  content +=
    `<div class="col-md-3">
    <div class="card card-product" style="width: 18rem;">
      <a href="/product-box.html" class="favor"><i class="fas fa-heart fa-lg"></i></a>
      <a  href="/product-box.html">
        <img
          src=${products[i].image}
          class="card-img-top" alt="...">
      </a>
      <div class="card-body">
        <a href="/product-box.html">
          <h5 class="card-title">${products[i].name}</h5>
          <p class="card-text">AU$${products[i].price}</p>
        </a>
        <button class='btn addtoCart'  onclick='addCart( ${JSON.stringify(products[i])} )'>Add to cart</button>
      </div>
    </div>
  </div>`
}
sectionProduct.innerHTML = content

function addCart(product) {
  carts.push(product);
  cartNum.innerHTML = `(${carts.length})`
  let cartContent = ''
  let amount = 0;
  if (carts.length > 0) {
    for (let i = 0; i < carts.length; i++) {
      amount += carts[i].price
      cartContent += `<div class="d-flex justify-content-between align-items-center ">
          <span>
            <img src=${carts[i].image} alt="" class="mr-1" height="50px" width="35px">
          ${carts[i].name} : </span>
          <span class="pl-2">$${carts[i].price}</span>
          </div>
          <hr>
          `
    }
  }
  cartContent += `<div class="d-flex justify-content-between">
            <b><p>Total (${carts.length}): </p></b>
              <p class="pl-2">$${amount}</p>
            </div>`
  cartMini.innerHTML = cartContent
}

function listCart() {
  console.log(carts);

}
//PRODUCT PAGE

// vị trí 1 element
/*
let toado=document.getElementById("footer").offsetTop
console.log(toado)

document.getElementsByTagName('button')[0].onclick = function () {
  scrollTo(document.body, 0, 1250);   
}
   
function scrollTo(element, to, duration) {
   var start = element.scrollTop,
       change = to - start,
       currentTime = 0,
       increment = 20;
       
   var animateScroll = function(){        
       currentTime += increment;
       var val = Math.easeInOutQuad(currentTime, start, change, duration);
       element.scrollTop = val;
       if(currentTime < duration) {
           setTimeout(animateScroll, increment);
       }
   };
   animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
 t /= d/2;
 if (t < 1) return c/2*t*t + b;
 t--;
 return -c/2 * (t*(t-2) - 1) + b;
};
*/