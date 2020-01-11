console.log('Client side javascript file is loaded!')

const result = document.querySelector('#p1')


const weatherForm =  document.querySelector('form')
const search = document.querySelector('input')
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            result.textContent = data.error
        }
        else
            result.textContent = data.forecast
    })
})
    
})