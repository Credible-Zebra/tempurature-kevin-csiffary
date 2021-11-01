let Temp = 0
basic.forever(function () {
    Temp = input.temperature()
    basic.showNumber(Temp)
    basic.pause(100)
    basic.clearScreen()
})
