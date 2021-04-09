 const request= require('request')
const {geoCode,weathCode}=require("./utils/geocode")
// const url='http://api.weatherstack.com/current?access_key=f85d843a7053f359654709e67c34247d&query=26.4725,80.3311'
// request({url:url,json:true},(error,response)=>{
//  if(error)
//  {
//      console.log("Unable to connect to Weather Service")
//  }
// else if(response.body.error)
//  {
//      console.log("Unable to find Location")
//  }
//  else{
//      console.log("Weather in "+response.body.location.name+" is "+response.body.current.weather_descriptions[0]+" with Current temperature "+response.body.current.temperature+" but it feels like "+response.body.current.feelslike+" humidity is "+response.body.current.humidity)
//  }


//  })
// //Geocoding
//   const geocode="https://api.mapbox.com/geocoding/v5/mapbox.places/Kanpur.json?access_token=pk.eyJ1IjoibGF3bGlldDI1ODAiLCJhIjoiY2tuYTIxcHFpMWR4bjJwcXB4bXZyMHZqZiJ9.7QPdthWjwjnS5RtwI5DQuQ&limit=1"
//   request({url:geocode,json:true},(error,response)=>{
//       if(error)
//       {
//           console.log("Unable to access geocoding API")
//     }
//       else if(response.body.features.length===0)
//       {
//           console.log("Unable to detect location, Try another Location")
//         }
//       else{
//       const Lattitude =response.body.features[0].center[0]
//       const Longitude =response.body.features[0].center[1]
//       console.log(Latitude,Longitude)
//     }
//       })

geoCode('Delhi',(error,data)=>{
  if(error!=undefined)
  console.log("Error",error)
  else
   {
     weathCode(data.longitude,data.latitude,(error,info)=>{
       console.log("From weather code",data.latitude,data.longitude)
       if(error!=undefined)
       console.log("error",error)
       else
       {
         console.log(info)
       }
     })
  }

    
})
