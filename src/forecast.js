const request = require('request')

const forecast = (latitude,longitude,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=f64dc07a8504dd2af20db27ba965bcaf&units=m&query='+latitude+','+longitude

   
request({url:url,json:true},(error,response)=>{
 if(error){
   callback('unable to connect to weather service!!',undefined)    
 }else if(response.body.success === false){
   callback('unable to find location!!',undefined)
 }else{

      callback(undefined,response.body)

 }
})


}


module.exports = forecast

