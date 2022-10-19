let items = [{
    description: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
    price: '$49.50',
    img: 'img/items/item01.png'
  },
    {description: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
    price: '$13.95',
    img: 'img/items/item02.png'
  },
    {description: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
    price: '$128.99',
    img: 'img/items/item03.png'
  },
    {description: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
    price: '$12.48',
    img: 'img/items/item04.png'
  },
    {description: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
    price: '$128.99',
    img: 'img/items/item03.png'
},
    {description: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
    price: '$128.99',
    img: 'img/items/item03.png'
},
    {description: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
    price: '$128.99',
    img: 'img/items/item03.png'},

    {description: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
    price: '$128.99',
    img: 'img/items/item03.png'}
]

// function createNewItem(array){
//     for(key of array){
//         let newItem = document.createElement('div')
//         newItem.classList.add('item')

//         let newItemImage = document.createElement('img')
//         newItemImage.classList.add('item-image')
//         newItemImage.setAttribute('alt', 'item')
//         newItemImage.setAttribute('src', array.img)

//         let newItemDescription = document.createElement('p')
//         newItemDescription.classList.add('item-description')
//         newItemDescription.textContent = array.description

//         let newItemPrice = document.createElement('p')
//         newItemPrice.classList.add('item-price')
//         newItemPrice.textContent = array.price

//         newItem.append(newItemImage)
//         newItem.append(newItemDescription)
//         newItem.append(newItemPrice)

//         itemWrapper.append(newItem)
//     }
    

// }

// function createNewItemWrapper(array){
//     for(key of array){
//         let newItem = document.createElement('div')
//         newItem.classList.add('item')

//         let newItemImage = document.createElement('img')
//         newItemImage.classList.add('item-image')
//         newItemImage.setAttribute('alt', 'item')
//         newItemImage.setAttribute('src', array.img)

//         let newItemDescription = document.createElement('p')
//         newItemDescription.classList.add('item-description')
//         newItemDescription.textContent = array.description

//         let newItemPrice = document.createElement('p')
//         newItemPrice.classList.add('item-price')
//         newItemPrice.textContent = array.price

//         newItem.append(newItemImage)
//         newItem.append(newItemDescription)
//         newItem.append(newItemPrice)

//         let NewItemWrapper = document.createElement('div')
//         NewItemWrapper.classList.add('item-wrapper')
//         NewItemWrapper.append(newItem)
//     }
    
// }

// function search2(word){
//     if (word.length !== 0){
//         let markFound = false
//         let foundItems = items.filter(function (item){
//         return item.description.includes(word)
//         })

//         createNewItem(foundItems)
//         markFound = true

//         if (foundItems.length >= 4){
//             console.log(foundItems)
//             let foundItems1 = foundItems.filter(function(el){
//                 if (foundItems.indexOf(el) >= 3){
//                     return el
//                 }
//             })
//             foundItems.splice(4)
//             console.log(foundItems)
//             console.log(foundItems1)

//             createNewItem(foundItems)
//             createNewItemWrapper(foundItems1)
//             markFound = true

//             }
//         else if (foundItems.length >= 8){
//             // console.log(foundItems)
//             let foundItems1 = foundItems.filter(function(el){
//                 if (foundItems.indexOf(el) >= 3 || foundItems.indexOf(el) <= 8 ){
//                     return el
//                 }
//             })
//             let foundItems2 = foundItems.filter(function(el){
//                 if (foundItems.indexOf(el) >= 8){
//                     return el
//                 }
//             })
//             foundItems.splice(4)
//             console.log(foundItems)
//             console.log(foundItems1)
//             console.log(foundItems2)

//             createNewItem(foundItems)
//             createNewItemWrapper(foundItems1)
//             createNewItemWrapper(foundItems2)
//             markFound = true
//             }
//         if(markFound === false) { 
//             let item = document.querySelectorAll('.item') 
//             for (div of item){
//             div.style.display = 'none'
//             }
                
//             let errorHeader = document.createElement('h1')
//             errorHeader.classList.add('error-message')
//             errorHeader.textContent = 'Item not found'
        
//             itemWrapper.append(errorHeader)
//         }
//     }
//     else {
//         let item = document.querySelectorAll('.item') 
//             for (div of item){
//                 div.style.display = 'none'
//               }
  
//             item = Array.from(item)
//             item.splice(4)
  
//             for(key of item){
//                 key.removeAttribute('style')
//               }
  
//             let errorHeaders = document.querySelectorAll('.error-message')
//                 for (item of errorHeaders){
//                     item.style.display = 'none'
//                 }
//             }
// }



// function search(word){
//     if (word.length !== 0){
//         let markFound = false
//         let foundItems = items.filter(function (item){
//         return item.description.includes(word)
//         })
        
//         console.log(foundItems)

//         let errorHeader = document.querySelectorAll('.error-message')
//         for(el of errorHeader){
//             el.style.display = 'none'
//         }
  
//         let item = document.querySelectorAll('.item') 
//         for (div of item){
//             div.style.display = 'none'
//         }
  
//         for(key of foundItems){
//           let newItem = document.createElement('div')
//           newItem.classList.add('item')
  
//           let newItemImage = document.createElement('img')
//           newItemImage.classList.add('item-image')
//           newItemImage.setAttribute('alt', 'item')
//           newItemImage.setAttribute('src', key.img)
  
//           let newItemDescription = document.createElement('p')
//           newItemDescription.classList.add('item-description')
//           newItemDescription.textContent = key.description
  
//           let newItemPrice = document.createElement('p')
//           newItemPrice.classList.add('item-price')
//           newItemPrice.textContent = key.price
  
//           newItem.append(newItemImage)
//           newItem.append(newItemDescription)
//           newItem.append(newItemPrice)
  
//           itemWrapper.append(newItem) 
//           markFound = true
//         }
        
//         if(markFound === false) { 
//           let item = document.querySelectorAll('.item') 
//           for (div of item){
//           div.style.display = 'none'
//           }
          
//           let errorHeader = document.createElement('h1')
//           errorHeader.classList.add('error-message')
//           errorHeader.textContent = 'Item not found'
  
//           itemWrapper.append(errorHeader)
//         }
//     } else {
//       let item = document.querySelectorAll('.item') 
//           for (div of item){
//               div.style.display = 'none'
//             }

//           item = Array.from(item)
//           item.splice(4)

//           for(key of item){
//               key.removeAttribute('style')
//             }

//           let errorHeaders = document.querySelectorAll('.error-message')
//               for (item of errorHeaders){
//                   item.style.display = 'none'
//               }
//           }
// }

// function search(word){
//     if (word.length !== 0){
//         let markFound = false
//         let foundItems = items.filter(function (item){
//         return item.description.includes(word)
//         })
        
//         console.log(foundItems)

//         let errorHeader = document.querySelectorAll('.error-message')
//         for(el of errorHeader){
//             el.style.display = 'none'
//         }
  
//         let item = document.querySelectorAll('.item') 
//         for (div of item){
//             div.style.display = 'none'
//         }
  
//         for(key of foundItems){
//           let newItem = document.createElement('div')
//           newItem.classList.add('item')
  
//           let newItemImage = document.createElement('img')
//           newItemImage.classList.add('item-image')
//           newItemImage.setAttribute('alt', 'item')
//           newItemImage.setAttribute('src', key.img)
  
//           let newItemDescription = document.createElement('p')
//           newItemDescription.classList.add('item-description')
//           newItemDescription.textContent = key.description
  
//           let newItemPrice = document.createElement('p')
//           newItemPrice.classList.add('item-price')
//           newItemPrice.textContent = key.price
  
//           newItem.append(newItemImage)
//           newItem.append(newItemDescription)
//           newItem.append(newItemPrice)
  
//           itemWrapper.append(newItem) 
//           markFound = true
//         }
        
//         if(markFound === false) { 
//           let item = document.querySelectorAll('.item') 
//           for (div of item){
//           div.style.display = 'none'
//           }
          
//           let errorHeader = document.createElement('h1')
//           errorHeader.classList.add('error-message')
//           errorHeader.textContent = 'Item not found'
  
//           itemWrapper.append(errorHeader)
//         }
//     } else {
//       let item = document.querySelectorAll('.item') 
//           for (div of item){
//               div.style.display = 'none'
//             }

//           item = Array.from(item)
//           item.splice(4)

//           for(key of item){
//               key.removeAttribute('style')
//             }

//           let errorHeaders = document.querySelectorAll('.error-message')
//               for (item of errorHeaders){
//                   item.style.display = 'none'
//               }
//           }
// }


//////////////////////////////////////////////////////////////////////////////////////


let buttons = document.querySelectorAll('.button')

console.log(buttons)

let buttonsArray = []

for(i = 0; i < buttons.length; i++){
  buttonsArray.push(buttons[i])
}

console.log(buttonsArray)
buttonsArray.map(function(button){
  let arras = []
  console.log(arras)
  button.addEventListener('click', function(){
    console.log('a')
    let arras2 = [1, 2, 4, 6]
    for(i = 0; i < arras2.length; i++){
      arras.push(arras2[i])
    }
    console.log(arras)
  })
  console.log(arras)
})


// for(let a = 0; a < arr.length; a++){
//   console.log(arr[a])
// }

// function a(){
//   c = 2 + 3
//   return c
// }

// a()

// console.log(c)

// function b(){
//   arr1 = [1,2,3]
//   arr2 = arr1
//   return arr2
// }

// b()

// console.log(arr2)

// function clord(){
//   arr5 = []
//   arr2.map(function(item){
//     item = item + 2
//     let arr4=[]
//     function ard(array){
//       let arr3 = ['a','b','c']
//       arr3.forEach(function(item){
//         array.push(item)
//       })
//       // console.log(array)
//     }
//     ard(arr4)
//     // console.log(arr4)
//     arr5=arr4
//     return arr5
    
//   })
//   console.log(arr5)
// }

// clord()

// добавить id каждой кнопки


// arr2.map(function(item){
//   item=item
//   arr3 = arr2
//   return arr3
// })

// console.log(arr3)

// function clord(){
//   arr2.map(function(item){
//     item = item + 2
    
//     function ard(){
//       console.log('a')
//        arr3 = ['a','b','c']
//       return arr3
//     }
//     ard()
//     console.log('через шквал огня')
//     console.log(arr3)
//   })
  
// }

// clord()


// // 1.3 функція, яка з масиву перших товарів створює відповідні HTML-елементи

// function loadContent(array){
//   for(key of array){
//       let newItem = document.createElement('div')
//       newItem.classList.add('item')

//       let newItemImage = document.createElement('img')
//       newItemImage.classList.add('item-image')
//       newItemImage.setAttribute('alt', 'item')
//       newItemImage.setAttribute('src', key.img)

//       let newItemDescription = document.createElement('p')
//       newItemDescription.classList.add('item-description')
//       newItemDescription.textContent = key.description

//       let newItemPrice = document.createElement('p')
//       newItemPrice.classList.add('item-price')
//       newItemPrice.textContent = key.price

//       let newItemButton =  document.createElement('button')
//       newItemButton.classList.add('item-button')
//       newItemButton.textContent = 'Add To Cart'
//       // - має знайти id і його засунути в поля і зробити верстку в корзині

//       // newItemButton.onclick = activeButton(key.id){
          
//       // }


//       newItem.append(newItemImage)
//       newItem.append(newItemDescription)
//       newItem.append(newItemPrice)
//       newItem.append(newItemButton)

//       itemWrapper.append(newItem)
//   }
// }

// // 1.4 функція, яка накладає обробник подій на всі кнопки товарів (Add to button), для формування об'єктів кошика
// let totalPriceHeader = document.querySelector('.total-price-header')
// // console.log(totalPriceHeader.innerText)

// let cartItems =[]
// // onclik function
// function newItemInCart(id) {
//   // const selectedItem = array.find(elem => elem.id === id)
//   // if (selectedItem.quatity) {
//   //     selectedItem.quatity = selectedItem.quatity + 1
//   // } else {
//   //     selectedItem.quatity = 1
//   // }
//   // cartItems.push(selecdItem)
//   // car
//   // wrapper
//   // create elem
// }
// function activeButton (){
//   console.log('a')
//   let cartCountButtons = []
//   activeItemButton.map(function(button){
//       // let newerCartCountButton = []
//       button.addEventListener('click' , function fun1 (){   
//           let cartItem = document.createElement('div')
//           cartItem.classList.add('cart-item')

//           let CartItemText = document.createElement('p')
//           CartItemText.classList.add('cart-item-text')
//           CartItemText.textContent = this.parentElement.childNodes[1].innerText

//           let CartItemPrice = document.createElement('p')
//           CartItemPrice.classList.add('cart-item-price')
//           CartItemPrice.textContent = this.parentElement.childNodes[2].innerText

//           let CartItemImage = document.createElement('img')
//           CartItemImage.classList.add('cart-item-image')
//           CartItemImage.setAttribute('alt', 'item')
//           CartItemImage.setAttribute('src', this.parentElement.childNodes[0].attributes.src.nodeValue)

//           let CartItemDelButton = document.createElement('button')
//           CartItemDelButton.classList.add('cart-item-button')
//           CartItemDelButton.textContent = 'Delete'

//           let cartPlusButton = document.createElement('button')
//           cartPlusButton.classList.add('cart-itemnum-button')
//           cartPlusButton.textContent = '+'

//           let cartMinusButton = document.createElement('button')
//           cartMinusButton.classList.add('cart-itemnum-button')
//           cartMinusButton.textContent = '-'

//           let cartItemCounter = document.createElement('p')
//           cartItemCounter.classList.add('cart-item-counter')
//           cartItemCounter.textContent = '1x'

//           cartItem.append(CartItemDelButton)
//           cartItem.append(CartItemText)
//           cartItem.append(CartItemPrice)
//           cartItem.append(CartItemImage)
//           cartItem.append(cartPlusButton)
//           cartItem.append(cartMinusButton)
//           cartItem.append(cartItemCounter)

//           cartItemWrapper.append(cartItem)


//           function priceCalculation(){
//               let cartItemTotalPrice = document.querySelectorAll('.cart-item-price')
//               cartItemTotalPrice = Array.from(cartItemTotalPrice)
//               let prices = []
//               cartItemTotalPrice.forEach(function(item){
//                   let numberPrice = item.innerText.replace('$', '')
//                   prices.push(Number(numberPrice))
//               })

//               let totalPrice = 0
//               for (let i = 0; i < prices.length; i++){
//                   totalPrice += prices[i]
//               }

//               totalPriceHeader.innerText = 'Total Price: ' + totalPrice + '$'
//               // console.log(totalPriceHeader.innerText)
//           }

//           priceCalculation()


//           let CartItemDelButtons = document.querySelectorAll('.cart-item-button')
//           for(let a = 0; a < CartItemDelButtons.length; a++) {
//               CartItemDelButtons[a].addEventListener('click', function (){
//               CartItemDelButtons[a].parentElement.remove()
//               console.log('a')
//               priceCalculation()
//           }, false);
//           }


//           let cartCountButtons = document.querySelectorAll('.cart-itemnum-button')
//           console.log(cartCountButtons)

//           return cartCountButtons
      
//       })

//       // fun1()

//       //    console.log(counterButtons)

      

//        })

  

  // console.log(newCartCountButtons)
  // return cartCountButtons
  
          // console.log(cartCountButtons)

      // function changeAmount (){
      //     for(let a = 0; a < cartCountButtons.length; a++) {
      //         console.log('попали changeAmount цикл')
      //             cartCountButtons[a].addEventListener('click', function (){
      //             console.log('a = ' + a)
      //             //console.log("cartCountButtons.length = " + cartCountButtons.length)
      //            // console.log('bebeeb')
      //            if(cartCountButtons[a].textContent === '+'){
      //             let newItemAmount = cartCountButtons[a].parentNode.children[6].textContent.replace('x', '')
      //            // console.log(newItemAmount)
      //           // console.log('newItemAmount = ' + newItemAmount);
      //             let newItemAmount2 = parseInt(newItemAmount)
      //             // console.log(typeof newItemAmount2)
      //             
      //             newItemAmount2 +=1
      //             
      //             console.log(newItemAmount2)
      //             cartCountButtons[a].parentNode.children[6].textContent = newItemAmount2 +'x'
      //            }else if(cartCountButtons[a].textContent === '-'){
      //             let newItemAmount = cartCountButtons[a].parentNode.children[6].textContent.replace('x', '')
      //             console.log(newItemAmount)
      //             let newItemAmount2 = parseInt(newItemAmount)
      //             // console.log(typeof newItemAmount2)
      //             newItemAmount2 -=1
      //             console.log(newItemAmount2)
      //             cartCountButtons[a].parentNode.children[6].textContent = newItemAmount2 +'x'
      //            }
      //         //    priceCalculation()
      //        }, false);
      //    }
     
  
      // changeAmount()
  
// }
// function activeButton (){
//     for(let i = 0; i < activeItemButton.length; i++) {
//         activeItemButton[i].addEventListener('click', function(){
//         console.log('i = ' + i);
//         console.log(activeItemButton.length)
//         let cartItem = document.createElement('div')
//         cartItem.classList.add('cart-item')

//         let CartItemText = document.createElement('p')
//         CartItemText.classList.add('cart-item-text')
//         CartItemText.textContent = this.parentElement.childNodes[1].innerText

//         let CartItemPrice = document.createElement('p')
//         CartItemPrice.classList.add('cart-item-price')
//         CartItemPrice.textContent = this.parentElement.childNodes[2].innerText

//         let CartItemImage = document.createElement('img')
//         CartItemImage.classList.add('cart-item-image')
//         CartItemImage.setAttribute('alt', 'item')
//         CartItemImage.setAttribute('src', this.parentElement.childNodes[0].attributes.src.nodeValue)

//         let CartItemDelButton = document.createElement('button')
//         CartItemDelButton.classList.add('cart-item-button')
//         CartItemDelButton.textContent = 'Delete'

//         let cartPlusButton = document.createElement('button')
//         cartPlusButton.classList.add('cart-itemnum-button')
//         cartPlusButton.textContent = '+'

//         let cartMinusButton = document.createElement('button')
//         cartMinusButton.classList.add('cart-itemnum-button')
//         cartMinusButton.textContent = '-'

//         let cartItemCounter = document.createElement('p')
//         cartItemCounter.classList.add('cart-item-counter')
//         cartItemCounter.textContent = '1x'

//         cartItem.append(CartItemDelButton)
//         cartItem.append(CartItemText)
//         cartItem.append(CartItemPrice)
//         cartItem.append(CartItemImage)
//         cartItem.append(cartPlusButton)
//         cartItem.append(cartMinusButton)
//         cartItem.append(cartItemCounter)

//         cartItemWrapper.append(cartItem)

//         let CartItemDelButtons = document.querySelectorAll('.cart-item-button')
          
//         // console.log(CartItemDelButtons)

//         function priceCalculation(){
//             let cartItemTotalPrice = document.querySelectorAll('.cart-item-price')
//             cartItemTotalPrice = Array.from(cartItemTotalPrice)
//             let prices = []
//             cartItemTotalPrice.forEach(function(item){
//                 let numberPrice = item.innerText.replace('$', '')
//                 prices.push(Number(numberPrice))
//             })

//             let totalPrice = 0
//             for (let i = 0; i < prices.length; i++){
//                 totalPrice += prices[i]
//             }

//             totalPriceHeader.innerText = 'Total Price: ' + totalPrice + '$'
//             // console.log(totalPriceHeader.innerText)
//         }

//         priceCalculation()

      // 
         

          // cartCountButtons.forEach(function(button){
          //     button.addEventListener('click', function (){
          //         console.log('bebeeb')
          //        if(button.textContent === '+'){
          //         let newItemAmount = button.parentNode.children[6].textContent.replace('x', '')
          //         console.log(newItemAmount)
          //         let newItemAmount2 = parseInt(newItemAmount)
          //         // console.log(typeof newItemAmount2)
          //         newItemAmount2 +=1
          //         console.log(newItemAmount2)
          //         button.parentNode.children[6].textContent = newItemAmount2 +'x'
          //        }else if(button.textContent === '-'){
          //         let newItemAmount = button.parentNode.children[6].textContent.replace('x', '')
          //         console.log(newItemAmount)
          //         let newItemAmount2 = parseInt(newItemAmount)
          //         // console.log(typeof newItemAmount2)
          //         newItemAmount2 -=1
          //         console.log(newItemAmount2)
          //         button.parentNode.children[6].textContent = newItemAmount2 +'x'
          //        }
          //        priceCalculation()
          //    })
          // })

  //     function cartCountButtonsRedeclare(){
  //         cartCountButtons = document.querySelectorAll('.cart-itemnum-button')
      
  //         return cartCountButtons
  //     }
      
  //     cartCountButtonsRedeclare()

  //     console.log(cartCountButtons)

  //     for(let a = 0; a < CartItemDelButtons.length; a++) {

  //          CartItemDelButtons[a].addEventListener('click', function (){
  //             CartItemDelButtons[a].parentElement.remove()
  //             console.log('a')
  //             priceCalculation()
  //         }, false);
  //     }
  //     }, false);
    
  // }
  // console.log(cartCountButtons)
 

  
  
// 





// document.addEventListener("DOMContentLoaded", function() {
//  loadContent(firstItems);
// })

// document.addEventListener("DOMContentLoaded", itemRedeclare)

// document.addEventListener("DOMContentLoaded", activeButton)






//////////////////////////////////////////////////////////////////////////////

















// function activeButton(id){       
//     let selectedItem = array.find(product => product.id === key)
//     if (key.id = newItemButton.parentElement.id){
//         let cartItem = document.createElement('div')
//         cartItem.classList.add('cart-item')
//         cartItem.setAttribute('id', 'cart-item' + key.target.parentElement.id)
//         // console.log(key.target.parentElement.childNodes[1].innerText)
        

//         let CartItemText = document.createElement('p')
//         CartItemText.classList.add('cart-item-text')
//         CartItemText.textContent = key.target.parentElement.childNodes[1].innerText
//         // console.log(key.target.parentElement.childNodes)

//         let CartItemPrice = document.createElement('p')
//         CartItemPrice.classList.add('cart-item-price')
//         CartItemPrice.textContent = key.target.parentElement.childNodes[2].innerText

//         let CartItemImage = document.createElement('img')
//         CartItemImage.classList.add('cart-item-image')
//         CartItemImage.setAttribute('alt', 'item')
//         CartItemImage.setAttribute('src', key.target.parentElement.childNodes[2].innerText)

//         let CartItemDelButton = document.createElement('button')
//         CartItemDelButton.classList.add('cart-item-button')
//         CartItemDelButton.textContent = 'Delete'

//         let cartPlusButton = document.createElement('button')
//         cartPlusButton.classList.add('cart-itemnum-button')
//         cartPlusButton.textContent = '+'

//         let cartMinusButton = document.createElement('button')
//         cartMinusButton.classList.add('cart-itemnum-button')
//         cartMinusButton.textContent = '-'

//         let cartItemCounter = document.createElement('p')
//         cartItemCounter.classList.add('cart-item-counter')
//         cartItemCounter.textContent = '1x'

//         cartItem.append(CartItemDelButton, CartItemText, CartItemPrice, CartItemImage, cartPlusButton, cartItemCounter)
//         cartItemWrapper.append(cartItem)

//         function priceCalculation(){
//             let cartItemTotalPrice = document.querySelectorAll('.cart-item-price')
//             // console.log(cartItemTotalPrice)
//             cartItemTotalPrice = Array.from(cartItemTotalPrice)
//             let prices = []
//             cartItemTotalPrice.forEach(function(item){
//                 let numberPrice = item.innerText.replace('$', '')
//                 prices.push(Number(numberPrice))
//             })

//             let totalPrice = 0
//             for (let i = 0; i < prices.length; i++){
//                 totalPrice += prices[i]
//             }
//             return totalPrice
//             // totalPriceHeader.innerText = 'Total Price: ' + totalPrice + '$'
//         }

//         const calculatedPrice = priceCalculation()

//         let CartItemDelButtons = document.querySelectorAll('.cart-item-button')
//         console.log(CartItemDelButtons)
//         for(let a = 0; a < CartItemDelButtons.length; a++) {
//             CartItemDelButtons[a].addEventListener('click', function (){
//             CartItemDelButtons[a].parentElement.remove()
//             console.log('a')
//             priceCalculation()
//         }, false);
//     }

//     }
// }
// function loadContent(array){
//     for(key of array){
//         let newItem = document.createElement('div')
//         newItem.classList.add('item')
//         newItem.setAttribute('id', 'item' + key.id)

//         let newItemImage = document.createElement('img')
//         newItemImage.classList.add('item-image')
//         newItemImage.setAttribute('alt', 'item')
//         newItemImage.setAttribute('src', key.img)

//         let newItemDescription = document.createElement('p')
//         newItemDescription.classList.add('item-description')
//         newItemDescription.textContent = key.description

//         let newItemPrice = document.createElement('p')
//         newItemPrice.classList.add('item-price')
//         newItemPrice.textContent = key.price

//         let newItemButton =  document.createElement('button')
//         newItemButton.classList.add('item-button')
//         newItemButton.textContent = 'Add To Cart'
//         newItemButton.addEventListener('click', activeButton(key.id))
//         // - має знайти id і його засунути в поля і зробити верстку в корзині
//         // console.log(key)

       
//         newItem.append(newItemImage)
//         newItem.append(newItemDescription)
//         newItem.append(newItemPrice)
//         newItem.append(newItemButton)

//         itemWrapper.append(newItem)
//     }
// }

// // 1.4 функція, яка накладає обробник подій на всі кнопки товарів (Add to button), для формування об'єктів кошика
// // let totalPriceHeader = document.querySelector('.total-price-header')
// // // console.log(totalPriceHeader.innerText)

// // let cartItems =[]
// // onclik function
// function newItemInCart(id) {
//     // const selectedItem = array.find(elem => elem.id === id)
//     // if (selectedItem.quatity) {
//     //     selectedItem.quatity = selectedItem.quatity + 1
//     // } else {
//     //     selectedItem.quatity = 1
//     // }
//     // cartItems.push(selecdItem)
//     // car
//     // wrapper
//     // create elem
// }


//         // function changeAmount (){
//         //     for(let a = 0; a < cartCountButtons.length; a++) {
//         //         console.log('попали changeAmount цикл')
//         //             cartCountButtons[a].addEventListener('click', function (){
//         //             console.log('a = ' + a)
//         //             //console.log("cartCountButtons.length = " + cartCountButtons.length)
//         //            // console.log('bebeeb')
//         //            if(cartCountButtons[a].textContent === '+'){
//         //             let newItemAmount = cartCountButtons[a].parentNode.children[6].textContent.replace('x', '')
//         //            // console.log(newItemAmount)
//         //           // console.log('newItemAmount = ' + newItemAmount);
//         //             let newItemAmount2 = parseInt(newItemAmount)
//         //             // console.log(typeof newItemAmount2)
//         //             
//         //             newItemAmount2 +=1
//         //             
//         //             console.log(newItemAmount2)
//         //             cartCountButtons[a].parentNode.children[6].textContent = newItemAmount2 +'x'
//         //            }else if(cartCountButtons[a].textContent === '-'){
//         //             let newItemAmount = cartCountButtons[a].parentNode.children[6].textContent.replace('x', '')
//         //             console.log(newItemAmount)
//         //             let newItemAmount2 = parseInt(newItemAmount)
//         //             // console.log(typeof newItemAmount2)
//         //             newItemAmount2 -=1
//         //             console.log(newItemAmount2)
//         //             cartCountButtons[a].parentNode.children[6].textContent = newItemAmount2 +'x'
//         //            }
//         //         //    priceCalculation()
//         //        }, false);
//         //    }
       
    
//         // changeAmount()
    
// // }






// document.addEventListener("DOMContentLoaded", function() {
//    loadContent(firstItems);
//   })

// document.addEventListener("DOMContentLoaded", itemRedeclare)

// document.addEventListener("DOMContentLoaded", activeButton)