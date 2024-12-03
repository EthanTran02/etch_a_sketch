const container = document.querySelector('#container')
const body = document.querySelector('body')
const button = document.querySelector('button')
const containerWidth =  500

function creatDivs(num) {
    const totalBorderWidth = num //each divs have 0.5px border of each side
    const divsSive = (containerWidth - totalBorderWidth) / num
    container.innerHTML = ''
    for (let i = 1; i <= (num * num); i ++) {
        const div = document.createElement('div')
        const num = document.createElement('p')
    
        container.appendChild(div)
        div.appendChild(num)
    
        div.setAttribute('style', `position: relative; 
            width: ${divsSive}px; 
            height: ${divsSive}px;`);
        num.setAttribute('style', 'position: absolute; top: 0; left: 0')

        let opacity = 0
        let red = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        div.addEventListener('mouseenter', (e) => {
            opacity += 0.1 
            e.target.style.backgroundColor = `rgba(${red}, ${blue}, ${green},${opacity})`
        })
    
        
    }
}


button.addEventListener('click', () => {

    let num = prompt('number of squares per side (maximim 100): ', 0)

    if (isNaN(num) || num <= 0 || num > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return; // Don't create the grid if input is invalid
    } else {
        creatDivs(num)
    }
    
})

creatDivs(16)



