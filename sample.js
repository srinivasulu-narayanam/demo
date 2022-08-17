// import fetch from "node-fetch";

// function MakeApiCall()
// {
//   fetch('https://demo7303877.mockable.io/')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// }

// let a = MakeApiCall();
import fetch from "node-fetch";
const api_url = "https://demo7303877.mockable.io/"

// 1)Method for Getting the minimum and maximum price from the data
const minMaxPrice = (products) => {
  let minPrice = Number.MAX_VALUE;
  let maxPrice = Number.MIN_VALUE;
  for (let i = 0;i<products.length;i++){
    if (minPrice>products[i].price)
      minPrice = products[i].price;
    else if (maxPrice<products[i].price)
      maxPrice = products[i].price;
  }
  return {MinimumPrice:minPrice,MaximumPrice:maxPrice};
}

// 2)Method for filtering from the data
const filteringBrandandRange = (products,brand,maxRange = Number.MAX_VALUE,minRange = Number.MIN_VALUE) => {
  let filterBrand = products?.filter((item) =>{
    return item.brand === brand && minRange<=item.price && maxRange>item.price;
    
  })
  return filterBrand;
}


// 3)Method for getting the product from list of product
const productListMethod = (productList,products)=> {
  let result = [];
  for (let i = 0;i<productList.length;i++){
    for (let j = 0;j<products.length;j++){
      if (productList[i] === products[j].productName)
        result.push(products[j].productName)
    }
  }
  return result;
}

// Defining async function
const getApi = async function(url){
  
  const response = await fetch(url);
  
  var data = await response.json();
  console.log(productListMethod(["Fastrack Unisex Black & Green Reflex 2.0 Smart Band","Red Tape Men Black Leather Loafers","Roadster Men Black Solid Tailored Jacket","Just for Fun"],data.products));
}
getApi(api_url);