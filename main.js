let shop = document.getElementById("shop");


// data for the items 

let shopData = [
    {
        id:1,
        img:"images/shirt1.jpg",
        name:"corporate shirt",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        price:100,
    },
    // {
    //     id:2,
    //     img:"images/shirt2.jpg",
    //     name:"3 in 1 (whole)",
    //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    //     price:600,
    // },
    // {
    //     id:3,
    //     img:"images/shirt2.jpg",
    //     name:"3 in 1 (single)",
    //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    //     price:200,
    // },
    // {
    //     id:4,
    //     img:"images/shirt4.jpg",
    //     name:"party Shirt",
    //     desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    //     price:150,
    // },
]

// to store values
let basket = []
let counter = 0;


// this is for the map function of the array 
let generateShop = ()=>{
 return  shop.innerHTML = shopData.map((item)=>{
    const {id, img, name, desc, price} = item
          return `<div id=product-id-${id} class="item">
          <img class="shirt" src=${img} alt="">
          <div class="details">
              <h3>${name}</h3>
              <p>${desc}</p>
              <div class="price-quantity">
                  <h2>$ ${price}</h2>
                  <div class="buttons">
                      <i onclick="decrement(${id})" class="fa fa-minus"></i>
                      <div id="move" update(${id}) class="quantity">0</div>
                      <i onclick ="increment(${id})" class="fa fa-plus"></i>
                  </div>
              </div>
          </div>
      </div>`     
 }).join(" ")
}


generateShop()


// this is for incrementing the number 
let increment = (id)=>{
let selected = id;
let search = basket.find((item)=> item.id === selected.id);
 if (search === undefined){
    basket.push ({
        id:selected.id,
        item:1,
    });
 }
 else {
    search.item+=1
 }

//  console.log(basket)
 update(selected.id)
};


// for decrement 
let decrement = (id)=>{
    let selected = id;
    let search = basket.find((item)=> item.id === selected.id);
     if (search.item === 0) return;
     else {
        search.item-=1
     }
    
    //  console.log(basket)
     update(selected.id)
};

let update =(id)=>{
     let search = basket.find((item)=> item.id ===id);
    //  console.log(search.item)
    let move =document.getElementById("move")
   
    move.innerHTML = search.item
    calculation()
}

// for the shopping cart

let calculation = ()=>{
 let cartIcon = document.getElementById("cartamount");
 cartIcon.innerHTML= basket.map((x)=>x.item).reduce((x,y)=> x+y,0)  }
