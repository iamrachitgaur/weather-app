
const address = document.getElementById('form_textbox')
const button = document.getElementById('form_button')
const descriptor = document.getElementById('weather_descriptor')

const hamburger = document.getElementById('hamburger')
const hamburger_top = document.getElementById('hamburger-top')
const hamburger_inner = document.getElementById('hamburger-inner')
const hamburger_bottom = document.getElementById('hamburger-bottom')

const hamburger_box = document.querySelector('.hamburger-box')

const header_responsive_bar = document.getElementById('header_responsive_bar')

button.addEventListener('click',()=>{
    
    descriptor.innerHTML = "Fetch Data"
    
    fetch('http://localhost:3000/documentation/?address='+ address.value).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                descriptor.innerHTML="We not found this location."
            }
            else{
                descriptor.innerHTML = "Your Search Spot is :"+data.address+"<br> Your Location is :"+data.location+"<br> Your Coordinates are :"+data.coordinates+"<br> Your Date and Time :"+data.date_and_time+"<br> Your Temperature is :"+data.temperature+" ° Celcius <br> Your rainfall chance is "+data.precip+"mm <br> Your Weather is :"+data.weather
            }
            
        })
    })
    
})

hamburger.addEventListener('click',()=>{
    if(hamburger_box.id == 'un-active'){
        hamburger_box.id = 'active'
        hamburger_top.style.top = 'calc(50% - 2px)'
        hamburger_top.style.transform = 'rotate(45deg)'
        hamburger_bottom.style.transform = 'rotate(-45deg)'
        hamburger_bottom.style.bottom = 'calc(50% - 2px)'
        hamburger_inner.style.display = 'none'

        header_responsive_bar.style.transform = 'translateY(0%)'
    }
    else{
        hamburger_box.id = 'un-active'
        hamburger_top.style.top = '20%'
        hamburger_top.style.transform = 'rotate(0deg)'
        hamburger_bottom.style.transform = 'rotate(0deg)'
        hamburger_bottom.style.bottom = '20%'
        hamburger_inner.style.display = 'block'

        header_responsive_bar.style.transform = 'translateY(-100%)'

    }
})

