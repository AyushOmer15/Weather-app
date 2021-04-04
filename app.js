const request= require('request')
const url='http://api.weatherstack.com/current?access_key=f85d843a7053f359654709e67c34247d&query=26.42,80.2321'
request({url:url,json:true},(error,response)=>{
console.log("Weather in "+response.body.location.name+" is "+response.body.current.weather_descriptions[0]+" with Current temperature "+response.body.current.temperature+" but it feels like "+response.body.current.feelslike+" humidity is "+response.body.current.humidity)
})
