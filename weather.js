const data_section=document.querySelector(".data-section");
const search_bar=document.querySelector(".search-bar");
const searchbtn=document.querySelector(".searchbtn");
const cityname=document.querySelector(".cityname");
const date=document.querySelector(".date");
const picture=document.querySelector(".picture");
const temp=document.querySelector(".temp");
const humidity=document.querySelector(".humidity");
const windspeed=document.querySelector(".windspeed");



 
const URL_WEATHER=`https://api.weatherapi.com/v1/current.json?key=your-api-key&q=`;

const date2=new Date();
const options={weekday:`long`,day:`numeric`,month:`long`};
const datefinal=date2.toLocaleDateString(`en-US`,options)
date.innerHTML=`${datefinal}`

function weathertell(){
    if(search_bar.value.trim()===""){
        alert("please enter a city name");
        return;
    }
    cityname.innerHTML=`<i class="fa-solid fa-location-dot"></i>  ${search_bar.value}`;
    cityname.style.fontSize="25px";
    cityname.style.fontWeight="bold";
       
    
     
}
async function geocordinate(){
    const loader = document.getElementById("loader");
    loader.style.display = "block";

   try{

   
    let response=await fetch(`${URL_WEATHER}${search_bar.value}`);
    
     
    const data1= await response.json();
    loader.style.display = "none";
    if(data1.length===0){
        alert("Please enter a valid city name...");
        return ;
    }
    console.log(data1);
    let humidity1=data1.current.humidity;
    console.log(humidity1);
    humidity.innerHTML=`<i class="fa-solid fa-droplet"></i>  Humidity:${humidity1}`;

    let windspeed1=data1.current.wind_kph;
    windspeed.innerHTML=`<i class="fa-solid fa-wind"></i> Wind speed:${windspeed1}`
    console.log(windspeed1);

    let temp1=data1.current.temp_c;
    console.log(temp1);
    let condition1=data1.current.condition.text;
    console.log(condition1);
    temp.innerHTML=`<div style="font-size:25px; font-weight:bold;">${temp1}°C</div>
  <div>${condition1}</div>`;

  let picture1=data1.current.condition.icon;
  picture.innerHTML=`<img src="https:${picture1}" alt="${condition1}">`;

}catch(error){
     loader.style.display = "none";
     alert("Something went wrong. Please try again.");
}


}

 

 
searchbtn.addEventListener("click",function(){
    weathertell();
    geocordinate();
     
})

