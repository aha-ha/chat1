let name = ""
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.setGroup(parseFloat(serial.readLine()))
    } else if (input.buttonIsPressed(Button.B)) {
        name = serial.readLine()
    } else {
        radio.sendString("" + name + ": " + serial.readLine())
        serial.writeLine("" + name + ": " + serial.readLine())
    }
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
basic.forever(function () {
	
})
