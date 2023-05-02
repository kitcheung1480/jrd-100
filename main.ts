input.onButtonPressed(Button.A, function () {
    custom.SinglePoll()
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
	
})
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
serial.setRxBufferSize(32)
basic.forever(function () {
	
})
