const request= require('request')

const geoCode=(address,callback)=>{
  const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoibGF3bGlldDI1ODAiLCJhIjoiY2tuYTIxcHFpMWR4bjJwcXB4bXZyMHZqZiJ9.7QPdthWjwjnS5RtwI5DQuQ&limit=1'
request({url:url,json:true},(error,response)=>{
  if(error)
  {
    callback('Unable to connect to location services',undefined)
  }
else if(response.body.features.length===0)
{callback('Unable to find location. Try another Search',undefined)}
else
  {
    callback(undefined,{
      latitude: response.body.features[0].center[0],
      longitude: response.body.features[0].center[1],
      location: response.body.features[0].place_name
    })
  }
})
}
const weathCode=(longitude,latitude,callback)=>{
    const geoURL=`http://api.weatherstack.com/current?access_key=f85d843a7053f359654709e67c34247d&query=${longitude},${latitude}`
    //console.log(geoURL)
    request({url:geoURL,json:true},(error,response)=>{
      if(error)
 {
     callback("Unable to connect to Weather Service",undefined)
 }
else if(response.body.error)
 {
     callback("Unable to find Location",undefined)
 }
 else{
  
     callback(undefined,`Weather is ${response.body.current.weather_descriptions[0]} with Current temperature ${response.body.current.temperature} degree Celsius but it feels like ${response.body.current.feelslike} degree Celsius humidity is ${response.body.current.humidity}%`)
 }
    })
    
  }
// module.exports=geoCode
// module.exports=weathCode
module.exports={geoCode,weathCode}