
var btn = document.getElementById("qtyadd");
var btn2 = document.getElementById("qtysub")
var newNum = document.getElementById("num");
var newPrice = document.getElementById("price")
var b = document.getElementById("ty")
var b2 = document.getElementById("ty2")
var b3 = document.getElementById("ty3")
var m = document.getElementById("tis")
var l = document.getElementById("tas")
var newLike = document.getElementById("lkj")
var newLike2 = document.getElementById("lkj2")
var newLike3 = document.getElementById("lkj3")

var newClick = document.getElementById("click")

var bbtn = document.getElementById("qtyadd2");
var bbtn2 = document.getElementById("qtysub2")
var nnewNum = document.getElementById("num2");
var nnewPrice = document.getElementById("price2")

var bbbtn = document.getElementById("qtyadd3");
var bbbtn2 = document.getElementById("qtysub3")
var nnnewNum = document.getElementById("num3");
var nnnewPrice = document.getElementById("price3")

let quantity = 0
let price = 500


let quantity2 = 0
let price2 = 700

let quantity3 = 0
let price3 = 1400



var subBtnClick = function changeqty2() {
    if (quantity > 0){
        quantity--;
        updQty();
        updprice();
        addTotal();
        addItems()
    }
}

var addBtnClick = function changeqty1() {
    quantity++;
    updQty();
    updprice();
    addTotal();
    addItems()
};

var subBtnClick2 = function changeqty22() {
    if (quantity2 > 0){
        quantity2--;
        updQty2();
        updprice2();
        addTotal();
        addItems()
    }
}

var addBtnClick2 = function changeqty12() {
    quantity2++;
    updQty2();
    updprice2();
    addTotal();
    addItems()
};

var subBtnClick3 = function changeqty23() {
    if (quantity3 > 0){
        quantity3--;
        updQty3();
        updprice3();
        addTotal();
        addItems()
    }
}

var addBtnClick3 = function changeqty13() {
    quantity3++;
    updQty3();
    updprice3();
    addTotal();
    addItems()
};


function updQty() {
    newNum.textContent = quantity;
};

function updQty2() {
    nnewNum.textContent = quantity2;
};

function updQty3() {
    nnnewNum.textContent = quantity3;
};

function updprice() {
    newPrice.textContent = price * quantity
}

function updprice2() {
    nnewPrice.textContent = price2 * quantity2
}

function updprice3() {
    nnnewPrice.textContent = price3 * quantity3
}

function addTotal(){
    l.textContent = price * quantity +  price2 * quantity2 + price3 * quantity3
}

function addItems() {
    m.textContent = quantity+quantity2+quantity3
}

let r = function like(){
    const uy = document.getElementById("pos")
    uy.style.color = 'red';

}

let y = function like2(){
    const uy = document.getElementById("pos2")
    uy.style.color = 'red';

}

let n = function like3(){
    const uy = document.getElementById("pos3")
    uy.style.color = 'red';

}


btn.addEventListener("click", addBtnClick);
btn2.addEventListener("click", subBtnClick)

bbtn.addEventListener("click", addBtnClick2);
bbtn2.addEventListener("click", subBtnClick2)

bbbtn.addEventListener("click", addBtnClick3);
bbbtn2.addEventListener("click", subBtnClick3);

newLike.addEventListener("click", r)
newLike2.addEventListener("click", y)
newLike3.addEventListener("click", n)













var d = function remove(){
    const myDiv = document.getElementById("rr")
    const parent = myDiv.parentNode
    parent.removeChild(myDiv)
    console.log("remove")
    l.textContent = price2 * quantity2 + price3 * quantity3
    m.textContent = quantity3+quantity2
}

b.addEventListener("click", d);



var d2 = function remove2nd(){
    const myDiv2 = document.getElementById("rr2")
    const parent2 = myDiv2.parentNode
    parent2.removeChild(myDiv2)
    console.log("remove")
    l.textContent = price * quantity + price3 * quantity3
    m.textContent = quantity+quantity3
}

b2.addEventListener("click", d2);


var d3 = function remove3(){
    const myDiv3 = document.getElementById("rr3")
    const parent3 = myDiv3.parentNode
    parent3.removeChild(myDiv3)
    console.log("remove")
    l.textContent = price2 * quantity2 + price * quantity3
    m.textContent = quantity+quantity2
}

b3.addEventListener("click", d3);

var lo = function yh(){
    var elem = document.getElementById("o2")
    var elem2 = document.getElementById("end2")
    var elem3 = document.getElementById("hea")
    elem.style.opacity = '0';
    elem.style.transition = '0.5s ease-in-out'
    elem2.style.opacity = '1'
    elem2.style.transition = '0.5s ease-in-out'
    elem2.style.display = 'inline'
    elem3.style.opacity = '0'
    elem3.style.transition = '0.5s ease-in-out'
}

newClick.addEventListener("click", lo)



