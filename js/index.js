const apikey = 'b8993ef6e6e46d5d29174ca240d535c8';

let apiCall = (twoun)=>{

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${twoun}&appid=${apikey}&units=metric&lang=fr`;

    fetch(url)
    .then((data)=>{
        if (data.ok) { return data.json();}
    })
    .then((data2)=>{  
        console.log(data2);
        document.querySelector('#pays').innerHTML = "<p>Pays :<p/><br/>"+data2.sys.country;
        document.querySelector('#descriptionDuTemps').innerHTML = "<p>Description C :<p/>"+data2.weather[0].description;
        document.querySelector('#temperatur').innerHTML = "<p>Temperature :<p/><br/>"+data2.main.temp+" °C";
        document.querySelector('#vitesseDuVent').innerHTML = "<p>V. vent :<p/><br/>"+ data2.wind.speed+" km/h";

       
    })

};
    apiCall('Dakar');

document.querySelector('form')
.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ville = document.querySelector('#tville').value;
    apiCall(ville);
})


 

