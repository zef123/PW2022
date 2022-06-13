let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');
let users = []

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let item = [['images/product-2.png', 'TAS SUTERA ECOPRINT ANYAMAN', 325.000], ['images/product-1.png', 'KALUNG ABAKA SISIK IKAN', 250.000],
            ['images/product-3.png', 'TAS SUTERA ECOPRINT GAGANG KAYU', 325.000], ['images/product-4.png', 'TAS PISANG ABAKA', 550.000]];

let trans = [[0,0], [1,0], [2,0], [3,0], [4,0], [5,0], [6,0], [7,0]]

function showimage(id)
{
    element = 'product_img'+id;
    document.getElementById(element).src = item[id][0];
}

function showname(id)
{
    element = 'product_name'+id;
    document.getElementById(element).innerHTML = item[id][1];
}

function showprice(id)
{
    element = 'product_price'+id;
    document.getElementById(element).innerHTML = item[id][2] + 'k / pcs';
}

function addElement () {
    for (var i = 0; i < trans.length; i++){
    dup = document.getElementById('el'+i);
    if (dup !==null || trans[i][1] < 0) {
        dup.remove();
    }
    if(trans[i][1] > 0){
    const div = document.createElement('div');
    div.id='el'+i;
    const img = document.createElement('img');
    img.src = item[trans[i][0]][0];
    div.appendChild(img);
    const divcon = document.createElement('div');
    const h3 = document.createElement('h3');
    const content = document.createTextNode(item[trans[i][0]][1]);
    const divprice = document.createElement('div');
    const price = document.createTextNode('Rp. ' + item[trans[i][0]][2] + '.000' + ' / ' + trans[i][1]);
    const span = document.createElement('span');
    span.className='fas fa-times';
    span.id = 'del'+i;
    x = trans[i][0];
    span.onclick = function () {
        removecart(x);
    }
    divprice.appendChild(price);
    divprice.classList.add('price');
    h3.appendChild(content);
    divcon.appendChild(h3);
    divcon.appendChild(divprice);
    divcon.classList.add('content');
    div.appendChild(span);
    div.appendChild(img);
    div.appendChild(divcon);
    div.classList.add('cart-item');
    element = document.getElementById('cart');
    element.appendChild(div);
    }
    }
  }

window.onload = function (){
    for(var i = 0; i < item.length; i++){
        showimage(i);
        showname(i);
        showprice(i);
    }
    addElement ();

}