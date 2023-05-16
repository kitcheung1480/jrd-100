custom.multiPollStart()
basic.forever(function () {
    custom.multiPollRead()
    serial.writeLine(custom.getUuid())
    serial.writeLine("" + (custom.getStrength()))
    basic.pause(200)
})
