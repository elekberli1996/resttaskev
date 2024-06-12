console.log("calisti")

body_element=document.querySelector("body")
console.log(body_element)
fetch('http://127.0.0.1:8000/car-api/listcar/?format=json').then(res=>
res.json().then(cars =>{
   
    cars.map(car=>
        {
          console.log( `${car.marka} | ${car.model} |   ${car.qiymet}`  )  ;
          let car_div=document.createElement("div");
          var p1=document.createElement("p");
          p1.textContent=car.marka
          var p2=document.createElement("p");
          p2.textContent=car.model
          var p3=document.createElement("p");
          p3.textContent=car.qiymet
          var p4=document.createElement("p");
          p4.textContent=car.il
          var p5=document.createElement("p");
          p5.textContent=car.yer
          car_div.append(p1,p2,p3,p4,p5)
          console.log(car_div)
          body_element.append(car_div)
          
        }
        
        ) 
}
))

// http://127.0.0.1:8000/car-api/listcar/?format=json