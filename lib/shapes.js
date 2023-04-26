const data = {
    shape: 'Triangle',
    shapeColour: 'green',
    text: 'YES',
    textColour: 'red'
}

//shapes function doesn't work yet
function shapes(data) {
    if (data.shape === "Circle") {
        circle(data)
    } else if (data.shape === "Square") {
        square(data)
    } else if (data.shape === "Triangle") {
        triangle(data)
    }
}

function square(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect x="90" y="40" width="120" height="120" fill="${data.shapeColour}" />
  <text x="150" y="125" width="120" font-size="60" text-anchor="middle" fill="${data.textColour}">${data.text}</text>
</svg>`
}

function circle(data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="${data.shapeColour}" />
  <text x="150" y="125" width="120" font-size="60" text-anchor="middle" fill="${data.textColour}">${data.text}</text>
</svg>`
}

function triangle (data) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150 30, 260 180, 40 180" fill="${data.shapeColour}"/>
  <text x="150" y="155" width="120" font-size="60" text-anchor="middle" fill="${data.textColour}">${data.text}</text>
</svg>`
}