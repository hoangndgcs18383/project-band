const buyBtns = document.querySelectorAll('.js-buy-ticket');
const model = document.querySelector('.js-modal');
const modelCloses = document.querySelectorAll('.js-modal-close');

function showBuyTickets() {
    model.classList.add('open');
}

function hideBuyTickets() {
    model.classList.remove('open');
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTickets)
}

for(const buyBtn of modelCloses){
    buyBtn.addEventListener('click', hideBuyTickets)
}

//Resposive

var headingElement = document.getElementById('header');

var mobileMenuElemnt = document.querySelector('.mobile-menu-btn');

var headerHeight = headingElement.clientHeight;

mobileMenuElemnt.onclick = function() {
    var isClosed = headingElement.clientHeight  === headerHeight;
    if(isClosed){
        headingElement.style.height = 'auto';
    }
    else{
        headingElement.style.height = null;
    }
}

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(e){
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.contains('subnav');
        if(isParentMenu){
            e.preventDefault();
        }
        else{
            headingElement.style.height = null;
        }
    }
}
