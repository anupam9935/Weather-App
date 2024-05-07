
const getData=async(city)=>{
	    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'c58cec0ab8mshf0735249c264516p1b9e0djsn0bb962028cec',
				'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
			}
		};
	      let  data=await fetch(url,options);
		      let response=await data.json();
			  document.querySelector(".city_name").innerHTML="location :  "+city; 
				document.querySelector(".temp").innerHTML=response.temp + " °C";
				document.querySelector(".hum").innerHTML=response.humidity + " %";
				document.querySelector(".wind").innerHTML=response.wind_speed + " km/h";
				document.querySelector(".clo").innerHTML=response.cloud_pct+ " %";
              console.log(response);
			  document.querySelector(".select").value="select location";
			  document.querySelector(".in").value="";
}

document.querySelector(".btn2").addEventListener("click",()=>{
	let getValue1=document.querySelector(".in").value;
		getData(getValue1);
	
})
document.querySelector(".btn1").addEventListener("click",()=>{
	let getValue2=document.querySelector(".select").value;
		getData(getValue2);
})
