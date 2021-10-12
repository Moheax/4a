input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        if (index == 0) {
            music.playTone(150, music.beat(BeatFraction.Half))
        } else if (index == 1) {
            music.playTone(300, music.beat(BeatFraction.Half))
        } else if (index == 2) {
            music.playTone(600, music.beat(BeatFraction.Half))
        } else if (index == 3) {
            music.playTone(1200, music.beat(BeatFraction.Half))
        } else {
            music.playTone(2400, music.beat(BeatFraction.Half))
        }
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
