radio.setFrequencyBand(7)
radio.setGroup(1)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)



radio.onReceivedValue(function(name: string, value: number){
    console.log(name)
    console.log(value)
})
