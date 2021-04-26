console.log('Client Side jS')


// fetch('').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data)
//     })
// })

const weatherForm=document.querySelector('form')

const search=document.querySelector('input')

const messageOne=document.querySelector('#message1')
const messageTwo=document.querySelector('#message2')
messageOne.textContent='JS'
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value

    messageOne.textContent='Loading...'
    fetch(`http://localhost:3000/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            messageOne.textContent=data.error
            messageTwo.textContent=""
        }
            
        

        
        else{
            messageOne.textContent=data.Information
            messageTwo.textContent=""
    }
    })
})
    console.log(location)
})