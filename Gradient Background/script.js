const HUE_ROTATION_AMOUNT = 1
const GRADIENT_ROTATION_AMOUNT = 1
const INTERVAL_MS = 30

//this is our color value
let hue = 0
const saturation = 95
const lightness = 65

let gradientAngle = 0

function updateBackgroundColor() {
  console.log('is this working? i dont think so')

  //update hue by rotating a specific amount
  hue = hue + HUE_ROTATION_AMOUNT

  const hsl = `hsl(${hue} ${saturation}% ${lightness}%)`
  const hsl2 = `hsl(${hue + 180} ${saturation}% ${lightness}%)`

  gradientAngle = gradientAngle + GRADIENT_ROTATION_AMOUNT

  const gradient = `linear-gradient(${gradientAngle}deg, ${hsl}, ${hsl2})`

  document.body.style.background = gradient
}


setInterval(updateBackgroundColor, INTERVAL_MS)


  // Logic for getting the new background value
  // -
  // goes here ->

  // Update the background of the page
  //
  // here ->