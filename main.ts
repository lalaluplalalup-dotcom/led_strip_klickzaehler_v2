input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    anzahl_personen += 1
    basic.showNumber(anzahl_personen)
    strip.setPixelColor(anzahl_personen - 1, neopixel.colors(NeoPixelColors.Red))
    strip.show()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    anzahl_personen = 0
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    anzahl_personen += -1
    basic.showNumber(anzahl_personen)
    strip.setPixelColor(anzahl_personen, neopixel.rgb(0, 0, 0))
    strip.show()
})
let strip: neopixel.Strip = null
let anzahl_personen = 0
anzahl_personen = 0
strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
basic.forever(function () {
	
})
