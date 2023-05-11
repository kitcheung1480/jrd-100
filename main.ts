input.onButtonPressed(Button.A, function () {
    custom.singlePoll()
    serial.writeLine(custom.getUuid())
})
basic.forever(function () {
	
})
