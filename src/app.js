const express = require('express')
const path = require('path')
const geocode = require('./geocode')
const forecast = require('./forecast')
const instadp = require('./instadp')

const app = express()

const publicPath = path.join(__dirname,'../public')

app.use(express.static(publicPath))



app.get('/documentation',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'please enter a address'
        })    
    }
    
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{

        if(error){
           return res.send({
               error
           })
        }

        forecast(latitude,longitude,(error,forecastData)=>{
            if(error){
                res.send({
                    error
                })
            }

            res.send({
                address : req.query.address,
                location : location,
                coordinates : forecastData.request.query,
                date_and_time : forecastData.location.localtime,
                temperature : forecastData.current.temperature,
                precip : forecastData.current.precip,
                weather : forecastData.current.weather_descriptions              
            })

        })
        
        

    })
    
})

app.get('/instadp',(req,res)=>{

    instadp((data)=>{
        res.send(data)
    })


})
    




app.listen(3000,()=>{console.log('working on port 3000')})

