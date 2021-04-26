const hbs=require('hbs')
const path = require('path')
const express = require('express')
const request= require('request')
const {geoCode,weathCode}=require("./utils/geocode")

const PublicDirectoryFile=path.join(__dirname,'/public')
//viewsPath can be used as to change name of view
//const viewsPath = ??path??
//app.set('views',viewsPath)
const viewsPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

console.log(__dirname)

const app = express()
app.set('views',viewsPath)
app.set('view engine','hbs')


app.use(express.static(PublicDirectoryFile))

hbs.registerPartials(partialPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather',
        name:'Ayush Omer'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Weather',
        name:'Ayush Omer'
    })
}) 
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Ayush',
        text:'This is a help page'
    })
})
app.get('/products',(req,res)=>{
    res.send({
        product:[]
    })
})




app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:"Add query data pls"
        })
    }
    else{
        geoCode(req.query.address,(error,data)=>{
            if(error)
            return res.send({error:error})
            else
             {
               weathCode(data.longitude,data.latitude,(error,forcastData)=>{     
                 if(error!=undefined)
                 return res.send({error:error})
                 else
                 {
                     res.send({Location:data.location,
                    Information:forcastData})
                //    console.log(data.location)
                //    console.log(info)
                 }
               })
            }    
          })
    }

    

    
})




















//app.com
app.get('/help/*',(req,res)=>{
    res.send('help article not found')
})
app.get('*',(req,res)=>{
    res.render('404')

})
app.listen(3000,()=>{
    console.log("Server is up on Port 3000")
})