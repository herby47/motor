let potentiometer = 0
basic.forever(function () {
    potentiometer = pins.analogReadPin(AnalogPin.P0)
    if (potentiometer <= 411) {
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P1, (411 - potentiometer) / 411 * 1023)
        pins.analogSetPeriod(AnalogPin.P1, 20000)
    } else if (potentiometer >= 612) {
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, (potentiometer - 612) / 411 * 1023)
        pins.analogSetPeriod(AnalogPin.P2, 20000)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
