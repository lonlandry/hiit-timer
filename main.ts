basic.showString("Ready for HIIT!")
basic.pause(1000)
basic.showNumber(10)
basic.pause(1000)
basic.showNumber(9)
basic.pause(1000)
basic.showNumber(8)
basic.pause(1000)
basic.showNumber(7)
basic.pause(1000)
basic.showNumber(6)
basic.pause(1000)
basic.showNumber(5)
basic.pause(1000)
basic.showNumber(4)
basic.pause(1000)
basic.showNumber(3)
basic.pause(1000)
basic.showNumber(2)
basic.pause(1000)
basic.showNumber(1)
basic.pause(1000)
for (let index = 0; index < 10; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(20000)
    basic.showIcon(IconNames.No)
    basic.pause(10000)
}
basic.showLeds(`
    # # # # .
    # . . . .
    # # # # .
    . . . # .
    # # # # .
    `)
basic.showString("5 Min.")
basic.pause(135000)
basic.showIcon(IconNames.Happy)
basic.pause(15000)
for (let index = 0; index < 10; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(20000)
    basic.showIcon(IconNames.No)
    basic.pause(10000)
}
basic.showLeds(`
    # . # # #
    # . # . #
    # . # . #
    # . # . #
    # . # # #
    `)
basic.showString("10 Min.")
basic.pause(135000)
basic.showIcon(IconNames.Happy)
basic.pause(15000)
for (let index = 0; index < 10; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(20000)
    basic.showIcon(IconNames.No)
    basic.pause(10000)
}
basic.showLeds(`
    # . # # #
    # . # . .
    # . # # #
    # . . . #
    # . # # #
    `)
basic.showString("15 Min.")
basic.pause(135000)
basic.showIcon(IconNames.Happy)
basic.pause(15000)
for (let index = 0; index < 9; index++) {
    basic.showIcon(IconNames.Heart)
    basic.pause(20000)
    basic.showIcon(IconNames.No)
    basic.pause(10000)
}
basic.showIcon(IconNames.Heart)
basic.pause(20000)
basic.showIcon(IconNames.Chessboard)
