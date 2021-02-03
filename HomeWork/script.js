let bulb = document.getElementById('bulb')

document.getElementById('redbutton').onclick = () => {
    if (bulbcolor != 'red') {
        bulb.style.color = 'red'
    }
    else {
        bulb.style.color = 'white'
    }
    bulbcolor = bulb.style.color
}

document.getElementById('yellowbutton').onclick = () => {
    if (bulbcolor != 'yellow') {
        bulb.style.color = 'yellow'
    }
    else {
        bulb.style.color = 'white'
    }
    bulbcolor = bulb.style.color
}

document.getElementById('greenbutton').onclick = () => {
    if (bulbcolor != 'green') {
        bulb.style.color = 'green'
    }
    else {
        bulb.style.color = 'white'
    }
    bulbcolor = bulb.style.color
}