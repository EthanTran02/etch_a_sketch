const container = document.querySelector('#container')


for (let i = 1; i <= (16 * 16); i ++) {
    const div = document.createElement('div')
    const num = document.createElement('p')

    num.textContent = `${i}`

    container.appendChild(div)
    div.appendChild(num)

    div.setAttribute('style', 'position: relative')
    num.setAttribute('style', 'position: absolute; top: 0; left: 0')

    div.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'red'
    })

    div.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor = 'white'
    })
}



