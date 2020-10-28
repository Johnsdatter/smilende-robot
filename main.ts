basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P1)) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Happy)
            servos.P2.setAngle(45)
            basic.pause(500)
            servos.P2.setAngle(135)
            basic.pause(500)
        }
        basic.pause(5000)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
