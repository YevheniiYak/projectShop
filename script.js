

// let expandButton = document.querySelector('.expand-button1')
// let electrList = document.querySelector('.electronics-list')
// let imgButton = document.querySelector('.img-expand1')


// expandButton.addEventListener('click', function showHide(){
//     if (getComputedStyle(electrList).display === 'none'){
//         electrList.style.display = 'block'
//         imgButton.src = "img/chevron-down.png"
//     } else  if (getComputedStyle(electrList).display === 'block'){
//         electrList.style.display = 'none'
//         imgButton.src = "img/chevron-right.png"
//     }
// })


// let expandButton2 = document.querySelector('.expand-button2')
// let busList = document.querySelector('.business-list')
// let imgButton2 = document.querySelector('.img-expand2')

// expandButton2.addEventListener('click', function showHide2(){
//     if (getComputedStyle(busList).display === 'none'){
//         busList.style.display = 'block'
//         imgButton2.src = "img/chevron-down.png"
//     } else  if (getComputedStyle(busList).display === 'block'){
//         busList.style.display = 'none'
//         imgButton2.src = "img/chevron-right.png"
//     }
// })


// let expandButton3 = document.querySelector('.expand-button3')
// let compList = document.querySelector('.computer-list')
// let imgButton3 = document.querySelector('.img-expand3')

// expandButton3.addEventListener('click', function showHide2(){
//     if (getComputedStyle(compList).display === 'none'){
//         compList.style.display = 'block'
//         imgButton3.src = "img/chevron-down.png"
//     } else  if (getComputedStyle(compList).display === 'block'){
//         compList.style.display = 'none'
//         imgButton3.src = "img/chevron-right.png"
//     }
// })



////////////////////////////////



// 1.1 функція кнопки очищення пошуку поля

let closeButton = document.querySelector('.close-img')
let navInput = document.querySelector('.nav-input')

closeButton.addEventListener('click', function clear(){
    navInput.value = ' ',
    navInput.value.length === 0
})


// 1.2 переключання між кошиком і каталогом

let cart = document.querySelector('.cart')
let cartItemWrapper = document.querySelector('.cart-item-wrapper')
let cartButton = document.getElementById('cart-button')

cartButton.addEventListener('click', function showCart () {
    if (getComputedStyle(cart).display === 'none'){
        cart.style.display = 'block'
        catalog.style.display = 'none'
    } else  if (getComputedStyle(cart).display === 'block'){
        cart.style.display = 'none'
        catalog.style.display = 'block'
    }
})





let itemWrapper = document.querySelector('.item-wrapper')

let itemImage = document.querySelector('.item-image')

let catalog = document.querySelector('.catalog')

let cartPointer = document.querySelector('.cart-pointer')



// масив товарів


let items = [{
    description: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
    price: '$49.50',
    img: 'img/items/item01.png',
    id: 1,
    quantity: 1,
    tags: 'Entertainment, Toys, Vintage'

},
    {description: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
    price: '$13.95',
    img: 'img/items/item02.png',
    id: 2,
    quantity: 1,
    tags: 'Clothing & Shoes'
},
    {description: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
    price: '$128.99',
    img: 'img/items/item03.png',
    id: 3,
    quantity: 1,
    tags: 'Pets'
},
    {description: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
    price: '$12.48',
    img: 'img/items/item04.png',
    id: 4,
    quantity: 1,
    tags: 'Kitchen Accessories'
},
    {description: 'Creativity stimulating lotion. Drink every morning to generate better ideas!',
    price: '$10.75',
    img: 'img/items/item05.png',
    id: 5,
    quantity: 0,
    tags: 'Kitchen Accessories'
},
    {description: 'Prototyping items to create a lot if useless things...',
    price: '$22.00',
    img: 'img/items/item06.png',
    id: 6,
    quantity: 0,
    tags: 'Entertainment, Sport & Lifestyle'
},
    {description: 'John Von Ebalkin SPRING ',
    price: '$80.75',
    img: 'img/items/item07.png',
    id: 7,
    quantity: 0,
    tags: 'Clothing & Shoes'
},
    {description: 'Envelope, Stripes, Pencil and etc. Purchase this kit today and feel OKAY',
    price: '$5.75',
    img: 'img/items/item08.png',
    id: 8,
    quantity: 0,
    tags: 'Entertainment, Sport & Lifestyle'
},
    {description: 'Gabb Phone Plus. The Premium Safe Phone for Kids',
    price: '$199.99',
    img: 'img/items/item09.png',
    id: 9,
    quantity: 0,
    tags: 'Electrical Tools, Entertainment'
},
    {description: 'MP3 Player 32GB with Speaker FM Radio Earphone Portable HiFi Lossless Sound',
    price: '$20.99',
    img: 'img/items/item10.jpg',
    id: 10,
    quantity: 0,
    tags: 'Electrical Tools, Vintage, Music, Entertainment'
},
    {description: 'Scout Backpack Tent Forest With our 2-person backpacking tent, you sleep comfortable wherever you roam',
    price: '$49.99',
    img: 'img/items/item11.png',
    id: 11,
    quantity: 0,
    tags: 'Travel Equipment'
},
    {description: 'LEGO Ideas Home Alone 21330 Building Kit; Buildable Movie Memorabilia',
    price: '$299.95',
    img: 'img/items/item12.png',
    id: 12,
    quantity: 0,
    tags: 'Toys'
},
    {description: 'Graco Baby Carrier Online Shop',
    price: '$65.95',
    img: 'img/items/item13.png',
    id: 13,
    quantity: 0,
    tags: 'Mother Care'
},
    {description: 'Garden Tools You Need to Start a Garden',
    price: '$165.95',
    img: 'img/items/item14.png',
    id: 14,
    quantity: 0,
    tags: 'Growing & Garden'
},
    {description: 'AppleRound Pack of 4 Sports Balls with 1 Pump',
    price: '$90.49',
    img: 'img/items/item15.png',
    id: 15,
    quantity: 0,
    tags: 'Sport & Lifestyle'
},
    {description: '20x50 High Power Military Binoculars',
    price: '$46.49',
    img: 'img/items/item16.png',
    id: 16,
    quantity: 0,
    tags: 'Sport & Lifestyle, Travel Equipment'
}                                                                              
]


// 1.3 пошук за тегами

let categories = Array.from(document.querySelectorAll('.category-text'))



categories.map(function(category){
    category.onclick = function(){
        let categoryItems =  items.filter(function (item){
            item.tags
            return item.tags.includes(category.innerText)
        })
        console.log(categoryItems)
        let item = document.querySelectorAll('.item') 
            for (div of item){
                // div.style.display = 'none'
                div.remove()
            }
        loadContent(categoryItems)
    }
})

// 2 католог товарів, додавання їх в корзину

// 2.1 з масиву товарів, створюється масив "перших, товарів, які з'являтимуться на сторінці при її завантаженні"
// - length.


let firstItems = []

items.forEach(function(item){
    if(item.quantity > 0){
        firstItems.push(item)
    }
})


// 2.2 підрахунок суми

function priceCalculation(){
    let cartItemTotalPrice = document.querySelectorAll('.cart-item-price')
    cartItemTotalPrice = Array.from(cartItemTotalPrice)
    let prices = []
    cartItemTotalPrice.forEach(function(item){
        let numberPrice = item.innerText.replace('$', '')
        prices.push(Number(numberPrice))
    })
      
    let totalPrice = 0
    for (let i = 0; i < prices.length; i++){
        totalPrice += prices[i]
    }
      
    console.log(totalPrice)

    if(totalPrice > 0){
    cartPointer.style.display = 'block'
    } else{
        cartPointer.style.display = 'none'
    }

    totalPriceHeader.innerText = 'Total Price: ' + totalPrice.toFixed(2) + '$'
   
}

// 2.3 функція, яка створює відповідні HTML-елементи кошику

let shopCart = []

function renderItem(article){
    let cartItem = document.createElement('div')
    cartItem.classList.add('cart-item')
    cartItem.setAttribute('id', article.id)
  
    let cartItemText = document.createElement('p')
    cartItemText.classList.add('cart-item-text')
    cartItemText.textContent = article.description
  
    let cartItemPrice = document.createElement('p')
    cartItemPrice.classList.add('cart-item-price')
    cartItemPrice.textContent = article.price
  
    let cartItemImage = document.createElement('img')
    cartItemImage.classList.add('cart-item-image')
    cartItemImage.setAttribute('alt', 'item')
    cartItemImage.setAttribute('src', article.img)
  
    let cartItemDelButton = document.createElement('button')
    cartItemDelButton.classList.add('cart-item-button')
    cartItemDelButton.textContent = 'Delete'
  
    let cartPlusButton = document.createElement('button')
    cartPlusButton.classList.add('cart-itemnum-button')
    cartPlusButton.textContent = '+'
  
    let cartMinusButton = document.createElement('button')
    cartMinusButton.classList.add('cart-itemnum-button')
    cartMinusButton.textContent = '-'
  
    let cartItemCounter = document.createElement('p')
    cartItemCounter.classList.add('cart-item-counter')
    cartItemCounter.textContent = items[0].quantity +'x'

  
    cartItem.append(cartItemDelButton, cartItemText, cartItemPrice, cartItemImage, cartPlusButton, cartMinusButton, cartItemCounter)
    cartItemWrapper.append(cartItem)

    priceCalculation()
    
    let cartItemDelButtons = document.querySelectorAll('.cart-item-button')
    for(let a = 0; a < cartItemDelButtons.length; a++) {
        cartItemDelButtons[a].addEventListener('click', function (){
        cartItemDelButtons[a].parentElement.remove()
        
        priceCalculation()
    }, false);
    }

    
    cartPlusButton.addEventListener('click', function(){
        const rightItem = items.find((product) => product.id == cartPlusButton.parentElement.id)
        let amountPlus = Number(cartPlusButton.parentElement.childNodes[6].innerText.replace('x', ''))
        let pricePlus = Number(rightItem.price.replace('$', ''))

        amountPlus ++
        cartPlusButton.parentElement.childNodes[6].innerText = amountPlus + 'x'
        let finalPrice = pricePlus.toFixed(2) * amountPlus 
        cartPlusButton.parentElement.childNodes[2].innerText = '$' + finalPrice.toFixed(2) 
                        
        priceCalculation()
    })
        
    cartMinusButton.addEventListener('click', function(){
        const rightItem = items.find((product) => product.id == cartMinusButton.parentElement.id)       
        let amountMinus = Number(cartMinusButton.parentElement.childNodes[6].innerText.replace('x', ''))
        let priceMinus = Number(rightItem.price.replace('$', ''))

        if (amountMinus > 1){
        amountMinus --
        cartMinusButton.parentElement.childNodes[6].innerText = amountMinus  + 'x'
        let finalPrice = priceMinus.toFixed(2) * amountMinus        
        cartMinusButton.parentElement.childNodes[2].innerText = '$' + finalPrice.toFixed(2)
        priceCalculation()
        }
    })
}

// 2.4 функція, яка з масиву перших товарів створює відповідні HTML-елементи
function loadContent(array){
    array.map(function(key){
        let newItem = document.createElement('div')
        newItem.classList.add('item')
        newItem.setAttribute('id', key.id)
  
        let newItemImage = document.createElement('img')
        newItemImage.classList.add('item-image')
        newItemImage.setAttribute('alt', 'item')
        newItemImage.setAttribute('src', key.img)
  
        let newItemDescription = document.createElement('p')
        newItemDescription.classList.add('item-description')
        newItemDescription.textContent = key.description
  
        let newItemPrice = document.createElement('p')
        newItemPrice.classList.add('item-price')
        newItemPrice.textContent = key.price
  
        let newItemButton =  document.createElement('button')
        newItemButton.classList.add('item-button')
        newItemButton.textContent = 'Add To Cart'
  
        newItem.append(newItemImage, newItemDescription, newItemPrice, newItemButton)
        itemWrapper.append(newItem)

        if(key.quantity === 0){
            let newItems = Array.from(document.querySelectorAll('.item'))
            let disabledItem = newItems.find((product) => product.id == key.id)
            disabledItem.childNodes[3].setAttribute('disabled', '')
            console.log(disabledItem.childNodes[3])
            let soldImg = document.createElement('img')
            soldImg.classList.add('sold-img')
            soldImg.setAttribute('alt', 'sold out')
            soldImg.setAttribute('src', 'img/items/sold-out.jpg')
            disabledItem.append(soldImg)
        }

        newItemButton.onclick = function(){activeButton(this.parentElement)}

        function activeButton (buyitem){
            let shopCartRendered = Array.from(document.querySelectorAll('.cart-item'))
            if(shopCart.length === 0){
            const rightItem = items.find((product) => product.id == buyitem.id)
                shopCart.push(rightItem)
                
                shopCart.forEach(function(item){
                renderItem(item)
                })    
            } 
            else{
                let shopCartSame = shopCartRendered.filter(function (item){
                return item.id == buyitem.id
                })
                
                if (shopCartSame.length === 0){
                    const rightItem = items.find((product) => product.id == buyitem.id)
                    shopCart.splice(0, shopCart.length)
                    shopCart.push(rightItem)
                    shopCart.forEach(function(item){
                        renderItem(item)
                        })
                } else{
                let cartItems = Array.from(document.querySelectorAll('.cart-item'))               
                const rightItem = items.find((product) => product.id == buyitem.id)
                console.log(rightItem)

                let secondCartItem = cartItems.find((product) => product.id == buyitem.id)
                console.log(secondCartItem)
            
                let amountPlus = Number(secondCartItem.childNodes[6].innerText.replace('x', ''))
                let pricePlus = Number(rightItem.price.replace('$', ''))
                                       
                amountPlus ++

                secondCartItem.childNodes[6].innerText = amountPlus + 'x'
                let finalPrice = pricePlus.toFixed(2) * amountPlus                            
                secondCartItem.childNodes[2].innerText = '$' + finalPrice.toFixed(2) 
                                    
                priceCalculation()                                             
                }
            }
        }

    })
}
        

let totalPriceHeader = document.querySelector('.total-price-header')
  
document.addEventListener("DOMContentLoaded", function(){loadContent(firstItems)})


// 3 пошук: якщо довжина строки інпуту більше 1 створюється масив foundItems, який відповідає результатам пошуку

function search(word){
    let wordLowered = word.toLowerCase()
    
    if (wordLowered.length !== 0){
        let markFound = false
        // 3.1.1 якщо були знайдені предмети, які відповідають пошуковому запиту, створюється масив відповідних предметів
        let foundItems = items.filter(function (item){
            markFound = true
            let descriptionLowered = item.description.toLowerCase()
            return descriptionLowered.includes(wordLowered)
        })

        // 3.1.2 знаходяться та видаляються повідомлення, які могли лишитися як результат попереднього пошуку
        let errorHeader = document.querySelectorAll('.error-message')
        for(el of errorHeader){
            // el.style.display = 'none'
            el.remove()
        }
        
        // 3.1.3 знаходяться та видаляються предмети, які могли лишитися як результат попереднього пошуку, або які були заванитаженні за замовчуванням
        let item = document.querySelectorAll('.item') 
        for (div of item){
            // div.style.display = 'none'
            div.remove()
        }

        // 3.1.4 формується HTML-елменти з масиву foundItems

        loadContent(foundItems)
        
        if (foundItems.length === 0){
                markFound = false
        }
        // 3.1.5 - якщо довжина масиву founditems = 0 (не було знайдено предметів, які відповідають пошуковому запиту), видаляються предмети з попередніх 
        // пошукових запитів, створюється повідомлення про помилку
        if(markFound === false) { 
            let item = document.querySelectorAll('.item') 
            for (div of item){
            // div.style.display = 'none'
                div.remove()
            }
                
            let errorHeader = document.createElement('h1')
            errorHeader.classList.add('error-message')
            errorHeader.textContent = 'Item not found'
        
            itemWrapper.append(errorHeader)
        }
    }
    // 3.2 якщо довжина строки інпуту = 0(якщо пошук - неактивний), знаходяться та видаляються повідомлення та придмети,які могли лишитися як результат 
    //попереднього пошуку
    else {
        let item = document.querySelectorAll('.item') 
            for (div of item){
                // div.style.display = 'none'
                div.remove()
            }
            auction.classList.remove('inactive')
            auction.classList.add('active')
        
            showAllButton.classList.remove('active')
            showAllButton.classList.add('inactive')

            loadContent(firstItems)
            // 3.2.1 - формується масив item - всі скриті HTML-елементи предметів, з якого формується масив з перших чотирьох елементів.
            // адже саме ці перші чотири елементи - елементи, які показуються за замовчкванням, при завантаженні сторінки, тобто коли пошук - нактивний,
            // знову відображаються елементи за замовчуванням 
  
            let errorHeaders = document.querySelectorAll('.error-message')
                for (item of errorHeaders){
                    // item.style.display = 'none'
                    item.remove()
                }
            } 
}


function debounce(func, timeout = 700){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }


const processChanges = debounce(() => search(navInput.value));

navInput.addEventListener('input', processChanges)


// 4. категоризація товарів за наявністю

let showAllButton = document.querySelector('.show-all')

let auction = document.querySelector('.auction')

showAllButton.onclick = function(){
    showAllButton.classList.remove('inactive')
    showAllButton.classList.add('active')

    auction.classList.remove('active')
    auction.classList.add('inactive')

    let item = document.querySelectorAll('.item') 
            for (div of item){
                div.remove()
            }
    
    let errorHeaders = document.querySelectorAll('.error-message')
    for (item of errorHeaders){
            // item.style.display = 'none'
        item.remove()
    }
    loadContent(items)
}

auction.onclick = function(){
    auction.classList.remove('inactive')
    auction.classList.add('active')

    showAllButton.classList.remove('active')
    showAllButton.classList.add('inactive')

    let item = document.querySelectorAll('.item') 
            for (div of item){
                div.remove()
            }
    let errorHeaders = document.querySelectorAll('.error-message')
        for (item of errorHeaders){
                // item.style.display = 'none'
            item.remove()
        }
    loadContent(firstItems)
}

////////////////////////////////////////////////////////////////