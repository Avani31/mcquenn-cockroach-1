let level = 0
basic.forever(function () {
    level = input.lightLevel()
    if (level <= 40) {
        maqueen.motorStop(maqueen.Motors.All)
    } else if (level >= 41 && level <= 95) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    } else if (level >= 96 && level <= 160) {
        maqueen.servoRun(maqueen.Servos.S1, 360)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
    basic.pause(1000)
    basic.showNumber(level)
})
