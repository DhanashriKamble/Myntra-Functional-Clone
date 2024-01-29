let bagItems;
onLoad();

function onLoad(){
    bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();

}

function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0){
        console.log('i am here');
        bagItemCountElement.style.visibility ='visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility ='hidden';
    }

}

function displayItemsOnHomePage(){
    let itemscontainerElement = document.querySelector('.items-container');
    if(!itemscontainerElement){
        return;
    }
let innerHTML ='';
items.forEach(item => {
 innerHTML += ` <div class="item-container">
 <img class="item-image" src="${item.image}" alt="item image">
 <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}
 </div>
 <div class="comapny-name">${item.company}</div>
 <div class="item-name">${item.item_name}</div>
 <div class="price">
     <span class="current-price">Rs ${item.current_price}</span>
     <span class="original-price">Rs ${item.original_price}</span>
     <span class="discount">( ${item.discount_percentage} % OFF)</span>
 </div>
 <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
 </div>`

});

itemscontainerElement.innerHTML = innerHTML;

}



