let bagItems = [];
onLoad();



function onLoad(){
    let bagItemsStr = localStorage.getItem('bagItmes');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItesOnHomePage();
    displayBagIcon();
}

function addTOBag(itemID){
    bagItems.push(itemID);
    localStorage.setItem('bagItmes', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if(bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerHTML = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}




function displayItesOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return;
    }
    let innerHTML = '';
    items.forEach(item => {
        innerHTML = innerHTML + `
        <div class="item-container">
        <div class="img-div">
            <img class="item-image" src="${item.item_image}" alt="t-shirt">
        </div>
        <div class="rating">${item.rating.stars} ⭐ | ${item.rating.noOfReviews} </div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
           <span class="current-price">₹ ${item.current_price}</span>
           <span class="original-price">₹ ${item.original_price}</span>
           <span class="dicount">${item.dicount}% OFF</span>
        </div>
        <button class="btn-add-bag" onclick="addTOBag(${item.id});">Add To Bag</button>
    </div>`
    });
    itemsContainerElement.innerHTML = innerHTML;
}


