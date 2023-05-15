input.onButtonPressed(Button.A, function () {
    custom.singlePoll()
    serial.writeLine(custom.getUuid())
})
custom.multiPollStart()
basic.forever(function () {
    custom.multiPollRead()
    if (custom.getStrength() > -70 && custom.getStrength() < -50) {
        serial.writeLine(custom.getUuid())
        serial.writeLine("" + (custom.getStrength()))
    }
    basic.pause(200)
})
