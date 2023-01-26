input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5) 
})

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    control.reset();
})
radio.onReceivedNumber(function(receivedNumber: number){
    console.log(receivedNumber)
})
radio.onReceivedValue(function(name: string, value: number){
    console.log(name)
    console.log(value)
})
let serialRemote = 7
radio.setFrequencyBand(7)
radio.setTransmitPower(7)
radio.setGroup(22) 
radio.setTransmitSerialNumber(true)
console.logValue("name", Utility.encodeSerial())

radio.onReceivedNumber(function(receivedNumber: number) {
    music.playTone(Note.C, music.beat(BeatFraction.Whole))
})
radio.onReceivedNumber(receivedNumber: number){
    basic.showString(number)
})