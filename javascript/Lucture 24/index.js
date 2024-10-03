// const jsonData = {
//     key1:'ravi',
//     key2:'18',
//     key3:'bca'
//   }
  
  // console.log(jsonData);
  
  
  // let data  = JSON.stringify(jsonData);
  
  // console.log(data);
  
  // let object = JSON.parse(data)
  
  // console.log(object);
  
  
  const ProductData = async() => {
    let response = await fetch('http://localhost:3000/product')
    let res = await response.json()
    console.log(res);
    
    res.map((item) => {
      return document.getElementById('demo').innerHTML += `
        <p>${item.id}<p/>
        <p>${item.productName}<p/>
        <p>${item.productColor}<p/>
      ` 
    })
  }
  
  ProductData()
