<template>

    <div id="svgkeyboard-container">
        <svg v-if="show_svg" id="keyboardsvg"
             width="1170px"
             height="403px"
             viewBox="0 0 1170 403"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <rect id="path-1" x="13" y="13" width="52" height="52" rx="8"></rect>
            </defs>
            <g
                id="keyboard"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
            >
                <rect fill="#FFFFFF" x="0" y="0" width="1170" height="403" rx="15"></rect>

                <rect
                    id="右"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="1105.65"
                    y="338.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(39) }"
                    @mousedown="onMouseDownHandler($event, 39)"
                    @mouseup="onMouseUpHandler($event, 39)"
                ></rect>

                <rect
                    id="下"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="1040.65"
                    y="338.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(40) }"
                    @mousedown="onMouseDownHandler($event, 40)"
                    @mouseup="onMouseUpHandler($event, 40)"
                ></rect>

                <rect
                    id="左"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="975.65"
                    y="338.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(37) }"
                    @mousedown="onMouseDownHandler($event, 37)"
                    @mouseup="onMouseUpHandler($event, 37)"
                ></rect>

                <rect
                    id="Ctrl"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="897.65"
                    y="338.65"
                    width="63.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(17) }"
                    @mousedown="onMouseDownHandler($event, 17)"
                    @mouseup="onMouseUpHandler($event, 17)"
                ></rect>

                <rect
                    id="Alt"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="819.65"
                    y="338.65"
                    width="63.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(18) }"
                    @mousedown="onMouseDownHandler($event, 18)"
                    @mouseup="onMouseUpHandler($event, 18)"
                ></rect>

                <rect
                    id="Cmd"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="741.65"
                    y="338.65"
                    width="63.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(93) }"
                    @mousedown="onMouseDownHandler($event, 93)"
                    @mouseup="onMouseUpHandler($event, 93)"
                ></rect>

                <rect
                    id="Space"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="247.65"
                    y="338.65"
                    width="479.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(32) }"
                    @mousedown="onMouseDownHandler($event, 32)"
                    @mouseup="onMouseUpHandler($event, 32)"
                ></rect>

                <rect
                    id="Cmd"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="169.65"
                    y="338.65"
                    width="63.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(91) }"
                    @mousedown="onMouseDownHandler($event, 91)"
                    @mouseup="onMouseUpHandler($event, 91)"
                ></rect>

                <rect
                    id="Alt"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="91.65"
                    y="338.65"
                    width="63.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(18) }"
                    @mousedown="onMouseDownHandler($event, 18)"
                    @mouseup="onMouseUpHandler($event, 18)"
                ></rect>

                <rect
                    id="Ctrl"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="13.65"
                    y="338.65"
                    width="63.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(17) }"
                    @mousedown="onMouseDownHandler($event, 17)"
                    @mouseup="onMouseUpHandler($event, 17)"
                ></rect>

                <rect
                    id="上"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="1040.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(38) }"
                    @mousedown="onMouseDownHandler($event, 38)"
                    @mouseup="onMouseUpHandler($event, 38)"
                ></rect>

                <rect
                    id="Shift"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="793.65"
                    y="273.65"
                    width="167.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(16) }"
                    @mousedown="onMouseDownHandler($event, 16)"
                    @mouseup="onMouseUpHandler($event, 16)"
                ></rect>

                <rect
                    id="/"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="728.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(191) }"
                    @mousedown="onMouseDownHandler($event, 191)"
                    @mouseup="onMouseUpHandler($event, 191)"
                ></rect>

                <rect
                    id="."
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="663.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(190) }"
                    @mousedown="onMouseDownHandler($event, 190)"
                    @mouseup="onMouseUpHandler($event, 190)"
                ></rect>

                <rect
                    id=","
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="598.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(188) }"
                    @mousedown="onMouseDownHandler($event, 188)"
                    @mouseup="onMouseUpHandler($event, 188)"
                ></rect>

                <rect
                    id="M"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="533.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(77) }"
                    @mousedown="onMouseDownHandler($event, 77)"
                    @mouseup="onMouseUpHandler($event, 77)"
                ></rect>

                <rect
                    id="N"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="468.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(78) }"
                    @mousedown="onMouseDownHandler($event, 78)"
                    @mouseup="onMouseUpHandler($event, 78)"
                ></rect>

                <rect
                    id="B"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="403.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(66) }"
                    @mousedown="onMouseDownHandler($event, 66)"
                    @mouseup="onMouseUpHandler($event, 66)"
                ></rect>

                <rect
                    id="V"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="338.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(86) }"
                    @mousedown="onMouseDownHandler($event, 86)"
                    @mouseup="onMouseUpHandler($event, 86)"
                ></rect>

                <rect
                    id="C"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="273.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(67) }"
                    @mousedown="onMouseDownHandler($event, 67)"
                    @mouseup="onMouseUpHandler($event, 67)"
                ></rect>

                <rect
                    id="X"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="208.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(88) }"
                    @mousedown="onMouseDownHandler($event, 88)"
                    @mouseup="onMouseUpHandler($event, 88)"
                ></rect>

                <rect
                    id="Z"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="143.65"
                    y="273.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(90) }"
                    @mousedown="onMouseDownHandler($event, 90)"
                    @mouseup="onMouseUpHandler($event, 90)"
                ></rect>

                <rect
                    id="Shift"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="13.65"
                    y="273.65"
                    width="115.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(16) }"
                    @mousedown="onMouseDownHandler($event, 16)"
                    @mouseup="onMouseUpHandler($event, 16)"
                ></rect>

                <rect
                    id="Enter"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="832.65"
                    y="208.65"
                    width="128.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(13) }"
                    @mousedown="onMouseDownHandler($event, 13)"
                    @mouseup="onMouseUpHandler($event, 13)"
                ></rect>

                <rect
                    id="'"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="767.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(222) }"
                    @mousedown="onMouseDownHandler($event, 222)"
                    @mouseup="onMouseUpHandler($event, 222)"
                ></rect>

                <rect
                    id=";"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="702.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(186) }"
                    @mousedown="onMouseDownHandler($event, 186)"
                    @mouseup="onMouseUpHandler($event, 186)"
                ></rect>

                <rect
                    id="L"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="637.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(76) }"
                    @mousedown="onMouseDownHandler($event, 76)"
                    @mouseup="onMouseUpHandler($event, 76)"
                ></rect>

                <rect
                    id="K"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="572.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(75) }"
                    @mousedown="onMouseDownHandler($event, 75)"
                    @mouseup="onMouseUpHandler($event, 75)"
                ></rect>

                <rect
                    id="J"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="507.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(74) }"
                    @mousedown="onMouseDownHandler($event, 74)"
                    @mouseup="onMouseUpHandler($event, 74)"
                ></rect>

                <rect
                    id="H"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="442.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(72) }"
                    @mousedown="onMouseDownHandler($event, 72)"
                    @mouseup="onMouseUpHandler($event, 72)"
                ></rect>

                <rect
                    id="G"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="377.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(71) }"
                    @mousedown="onMouseDownHandler($event, 71)"
                    @mouseup="onMouseUpHandler($event, 71)"
                ></rect>

                <rect
                    id="F"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="312.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(70) }"
                    @mousedown="onMouseDownHandler($event, 70)"
                    @mouseup="onMouseUpHandler($event, 70)"
                ></rect>

                <rect
                    id="D"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="247.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(68) }"
                    @mousedown="onMouseDownHandler($event, 68)"
                    @mouseup="onMouseUpHandler($event, 68)"
                ></rect>

                <rect
                    id="S"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="182.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(83) }"
                    @mousedown="onMouseDownHandler($event, 83)"
                    @mouseup="onMouseUpHandler($event, 83)"
                ></rect>

                <rect
                    id="A"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="117.65"
                    y="208.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(65) }"
                    @mousedown="onMouseDownHandler($event, 65)"
                    @mouseup="onMouseUpHandler($event, 65)"
                ></rect>

                <rect
                    id="Caps-Lock"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="13.65"
                    y="208.65"
                    width="89.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(20) }"
                    @mousedown="onMouseDownHandler($event, 20)"
                    @mouseup="onMouseUpHandler($event, 20)"
                ></rect>

                <rect
                    id="PgDn"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="1105.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(34) }"
                    @mousedown="onMouseDownHandler($event, 34)"
                    @mouseup="onMouseUpHandler($event, 34)"
                ></rect>

                <rect
                    id="End"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="1040.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(35) }"
                    @mousedown="onMouseDownHandler($event, 35)"
                    @mouseup="onMouseUpHandler($event, 35)"
                ></rect>

                <rect
                    id="Delete"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="975.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(46) }"
                    @mousedown="onMouseDownHandler($event, 46)"
                    @mouseup="onMouseUpHandler($event, 46)"
                ></rect>

                <rect
                    id="\"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="884.65"
                    y="143.65"
                    width="76.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(220) }"
                    @mousedown="onMouseDownHandler($event, 220)"
                    @mouseup="onMouseUpHandler($event, 220)"
                ></rect>

                <rect
                    id="]"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="819.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(221) }"
                    @mousedown="onMouseDownHandler($event, 221)"
                    @mouseup="onMouseUpHandler($event, 221)"
                ></rect>

                <rect
                    id="["
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="754.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(219) }"
                    @mousedown="onMouseDownHandler($event, 219)"
                    @mouseup="onMouseUpHandler($event, 219)"
                ></rect>

                <rect
                    id="P"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="689.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(80) }"
                    @mousedown="onMouseDownHandler($event, 80)"
                    @mouseup="onMouseUpHandler($event, 80)"
                ></rect>

                <rect
                    id="O"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="624.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(79) }"
                    @mousedown="onMouseDownHandler($event, 79)"
                    @mouseup="onMouseUpHandler($event, 79)"
                ></rect>

                <rect
                    id="I"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="559.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(73) }"
                    @mousedown="onMouseDownHandler($event, 73)"
                    @mouseup="onMouseUpHandler($event, 73)"
                ></rect>

                <rect
                    id="U"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="494.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(85) }"
                    @mousedown="onMouseDownHandler($event, 85)"
                    @mouseup="onMouseUpHandler($event, 85)"
                ></rect>

                <rect
                    id="Y"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="429.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(89) }"
                    @mousedown="onMouseDownHandler($event, 89)"
                    @mouseup="onMouseUpHandler($event, 89)"
                ></rect>

                <rect
                    id="T"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="364.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(84) }"
                    @mousedown="onMouseDownHandler($event, 84)"
                    @mouseup="onMouseUpHandler($event, 84)"
                ></rect>

                <rect
                    id="R"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="299.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(82) }"
                    @mousedown="onMouseDownHandler($event, 82)"
                    @mouseup="onMouseUpHandler($event, 82)"
                ></rect>

                <rect
                    id="E"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="234.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(69) }"
                    @mousedown="onMouseDownHandler($event, 69)"
                    @mouseup="onMouseUpHandler($event, 69)"
                ></rect>

                <rect
                    id="W"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="169.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(87) }"
                    @mousedown="onMouseDownHandler($event, 87)"
                    @mouseup="onMouseUpHandler($event, 87)"
                ></rect>

                <rect
                    id="Q"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="104.65"
                    y="143.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(81) }"
                    @mousedown="onMouseDownHandler($event, 81)"
                    @mouseup="onMouseUpHandler($event, 81)"
                ></rect>

                <rect
                    id="Tab"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="13.65"
                    y="143.65"
                    width="76.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(9) }"
                    @mousedown="onMouseDownHandler($event, 9)"
                    @mouseup="onMouseUpHandler($event, 9)"
                ></rect>

                <rect
                    id="PgUp"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="1105.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(33) }"
                    @mousedown="onMouseDownHandler($event, 33)"
                    @mouseup="onMouseUpHandler($event, 33)"
                ></rect>

                <rect
                    id="Home"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="1040.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(36) }"
                    @mousedown="onMouseDownHandler($event, 36)"
                    @mouseup="onMouseUpHandler($event, 36)"
                ></rect>

                <rect
                    id="Insert"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="975.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(45) }"
                    @mousedown="onMouseDownHandler($event, 45)"
                    @mouseup="onMouseUpHandler($event, 45)"
                ></rect>

                <rect
                    id="delete"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="858.65"
                    y="78.65"
                    width="102.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(8) }"
                    @mousedown="onMouseDownHandler($event, 8)"
                    @mouseup="onMouseUpHandler($event, 8)"
                ></rect>

                <rect
                    id="="
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="793.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(187) }"
                    @mousedown="onMouseDownHandler($event, 187)"
                    @mouseup="onMouseUpHandler($event, 187)"
                ></rect>

                <rect
                    id="-"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="728.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(189) }"
                    @mousedown="onMouseDownHandler($event, 189)"
                    @mouseup="onMouseUpHandler($event, 189)"
                ></rect>

                <rect
                    id="0"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="663.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(48) }"
                    @mousedown="onMouseDownHandler($event, 48)"
                    @mouseup="onMouseUpHandler($event, 48)"
                ></rect>

                <rect
                    id="9"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="598.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(57) }"
                    @mousedown="onMouseDownHandler($event, 57)"
                    @mouseup="onMouseUpHandler($event, 57)"
                ></rect>

                <rect
                    id="8"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="533.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(56) }"
                    @mousedown="onMouseDownHandler($event, 56)"
                    @mouseup="onMouseUpHandler($event, 56)"
                ></rect>

                <rect
                    id="7"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="468.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(55) }"
                    @mousedown="onMouseDownHandler($event, 55)"
                    @mouseup="onMouseUpHandler($event, 55)"
                ></rect>

                <rect
                    id="6"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="403.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(54) }"
                    @mousedown="onMouseDownHandler($event, 54)"
                    @mouseup="onMouseUpHandler($event, 54)"
                ></rect>

                <rect
                    id="5"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="338.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(53) }"
                    @mousedown="onMouseDownHandler($event, 53)"
                    @mouseup="onMouseUpHandler($event, 53)"
                ></rect>

                <rect
                    id="4"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="273.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(52) }"
                    @mousedown="onMouseDownHandler($event, 52)"
                    @mouseup="onMouseUpHandler($event, 52)"
                ></rect>

                <rect
                    id="3"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="208.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(51) }"
                    @mousedown="onMouseDownHandler($event, 51)"
                    @mouseup="onMouseUpHandler($event, 51)"
                ></rect>

                <rect
                    id="2"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="143.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(50) }"
                    @mousedown="onMouseDownHandler($event, 50)"
                    @mouseup="onMouseUpHandler($event, 50)"
                ></rect>

                <rect
                    id="1"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="78.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(49) }"
                    @mousedown="onMouseDownHandler($event, 49)"
                    @mouseup="onMouseUpHandler($event, 49)"
                ></rect>

                <rect
                    id="`"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="13.65"
                    y="78.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(192) }"
                    @mousedown="onMouseDownHandler($event, 192)"
                    @mouseup="onMouseUpHandler($event, 192)"
                ></rect>

                <rect
                    id="Pause"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="1105.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(19) }"
                    @mousedown="onMouseDownHandler($event, 19)"
                    @mouseup="onMouseUpHandler($event, 19)"
                ></rect>

                <rect
                    id="Scroll-Lock"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="1040.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(145) }"
                    @mousedown="onMouseDownHandler($event, 145)"
                    @mouseup="onMouseUpHandler($event, 145)"
                ></rect>

                <rect
                    id="PrtSc"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="975.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(0) }"
                    @mousedown="onMouseDownHandler($event, 0)"
                    @mouseup="onMouseUpHandler($event, 0)"
                ></rect>

                <rect
                    id="F12"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="910.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(123) }"
                    @mousedown="onMouseDownHandler($event, 123)"
                    @mouseup="onMouseUpHandler($event, 123)"
                ></rect>

                <rect
                    id="F11"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="845.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(122) }"
                    @mousedown="onMouseDownHandler($event, 122)"
                    @mouseup="onMouseUpHandler($event, 122)"
                ></rect>

                <rect
                    id="F10"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="781.95"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(121) }"
                    @mousedown="onMouseDownHandler($event, 121)"
                    @mouseup="onMouseUpHandler($event, 121)"
                ></rect>

                <rect
                    id="F9"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="715.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(120) }"
                    @mousedown="onMouseDownHandler($event, 120)"
                    @mouseup="onMouseUpHandler($event, 120)"
                ></rect>

                <rect
                    id="F8"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="624.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(119) }"
                    @mousedown="onMouseDownHandler($event, 119)"
                    @mouseup="onMouseUpHandler($event, 119)"
                ></rect>

                <rect
                    id="F7"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="559.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(118) }"
                    @mousedown="onMouseDownHandler($event, 118)"
                    @mouseup="onMouseUpHandler($event, 118)"
                ></rect>

                <rect
                    id="F6"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="494.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(117) }"
                    @mousedown="onMouseDownHandler($event, 117)"
                    @mouseup="onMouseUpHandler($event, 117)"
                ></rect>

                <rect
                    id="F5"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="429.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(116) }"
                    @mousedown="onMouseDownHandler($event, 116)"
                    @mouseup="onMouseUpHandler($event, 116)"
                ></rect>

                <rect
                    id="F4"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="338.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(115) }"
                    @mousedown="onMouseDownHandler($event, 115)"
                    @mouseup="onMouseUpHandler($event, 115)"
                ></rect>

                <rect
                    id="F3"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="273.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(114) }"
                    @mousedown="onMouseDownHandler($event, 114)"
                    @mouseup="onMouseUpHandler($event, 114)"
                ></rect>

                <rect
                    id="F2"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="208.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(113) }"
                    @mousedown="onMouseDownHandler($event, 113)"
                    @mouseup="onMouseUpHandler($event, 113)"
                ></rect>

                <rect
                    id="F1"
                    stroke="#8D8D8D"
                    stroke-width="1.3"
                    x="143.65"
                    y="13.65"
                    width="50.7"
                    height="50.7"
                    rx="8"
                    :class="{ active: pressed_keys.includes(112) }"
                    @mousedown="onMouseDownHandler($event, 112)"
                    @mouseup="onMouseUpHandler($event, 112)"
                ></rect>

                <g id="Esc">
                    <use
                        fill="#D8D8D8"
                        fill-rule="evenodd"
                        style="mix-blend-mode: lighten"
                        xlink:href="#path-1"
                    ></use>
                    <rect
                        stroke="#8D8D8D"
                        stroke-width="1.3"
                        stroke-linejoin="square"
                        x="13.65"
                        y="13.65"
                        width="50.7"
                        height="50.7"
                        rx="8"
                        :class="{ active: pressed_keys.includes(27) }"
                        @mousedown="onMouseDownHandler($event, 27)"
                        @mouseup="onMouseUpHandler($event, 27)"
                    ></rect>
                </g>
                <text
                    id="Esc"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(27) }"
                    @mousedown="onMouseDownHandler($event, 27)"
                    @mouseup="onMouseUpHandler($event, 27)"
                >
                    <tspan x="23.6301" y="45">Esc</tspan>
                </text>
                <text
                    id="F1"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(112) }"
                    @mousedown="onMouseDownHandler($event, 112)"
                    @mouseup="onMouseUpHandler($event, 112)"
                >
                    <tspan x="160.1002" y="45">F1</tspan>
                </text>
                <text
                    id="F2"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(113) }"
                    @mousedown="onMouseDownHandler($event, 113)"
                    @mouseup="onMouseUpHandler($event, 113)"
                >
                    <tspan x="223.6" y="45">F2</tspan>
                </text>
                <text
                    id="F3"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(114) }"
                    @mousedown="onMouseDownHandler($event, 114)"
                    @mouseup="onMouseUpHandler($event, 114)"
                >
                    <tspan x="288.6" y="45">F3</tspan>
                </text>
                <text
                    id="F4"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(115) }"
                    @mousedown="onMouseDownHandler($event, 115)"
                    @mouseup="onMouseUpHandler($event, 115)"
                >
                    <tspan x="353.6" y="45">F4</tspan>
                </text>
                <text
                    id="F5"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(116) }"
                    @mousedown="onMouseDownHandler($event, 116)"
                    @mouseup="onMouseUpHandler($event, 116)"
                >
                    <tspan x="444.6" y="45">F5</tspan>
                </text>
                <text
                    id="F6"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(117) }"
                    @mousedown="onMouseDownHandler($event, 117)"
                    @mouseup="onMouseUpHandler($event, 117)"
                >
                    <tspan x="509.6" y="45">F6</tspan>
                </text>
                <text
                    id="F7"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(118) }"
                    @mousedown="onMouseDownHandler($event, 118)"
                    @mouseup="onMouseUpHandler($event, 118)"
                >
                    <tspan x="574.6" y="45">F7</tspan>
                </text>
                <text
                    id="F8"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(119) }"
                    @mousedown="onMouseDownHandler($event, 119)"
                    @mouseup="onMouseUpHandler($event, 119)"
                >
                    <tspan x="639.6" y="45">F8</tspan>
                </text>
                <text
                    id="F9"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(120) }"
                    @mousedown="onMouseDownHandler($event, 120)"
                    @mouseup="onMouseUpHandler($event, 120)"
                >
                    <tspan x="730.6" y="45">F9</tspan>
                </text>
                <text
                    id="F10"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(121) }"
                    @mousedown="onMouseDownHandler($event, 121)"
                    @mouseup="onMouseUpHandler($event, 121)"
                >
                    <tspan x="793" y="45">F10</tspan>
                </text>
                <text
                    id="F11"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(122) }"
                    @mousedown="onMouseDownHandler($event, 122)"
                    @mouseup="onMouseUpHandler($event, 122)"
                >
                    <tspan x="858" y="45">F11</tspan>
                </text>
                <text
                    id="F12"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(123) }"
                    @mousedown="onMouseDownHandler($event, 123)"
                    @mouseup="onMouseUpHandler($event, 123)"
                >
                    <tspan x="921.7" y="45">F12</tspan>
                </text>
                <text
                    id="PrtSc"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="16"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(0) }"
                    @mousedown="onMouseDownHandler($event, 0)"
                    @mouseup="onMouseUpHandler($event, 0)"
                >
                    <tspan x="980.6" y="45">PrtSc</tspan>
                </text>
                <text
                    id="Scroll-Lock"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="16"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(145) }"
                    @mousedown="onMouseDownHandler($event, 145)"
                    @mouseup="onMouseUpHandler($event, 145)"
                >
                    <tspan x="1045.3" y="34">Scroll</tspan>
                    <tspan x="1045.3" y="56">Lock</tspan>
                </text>
                <text
                    id="Pause"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="16"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(19) }"
                    @mousedown="onMouseDownHandler($event, 19)"
                    @mouseup="onMouseUpHandler($event, 19)"
                >
                    <tspan x="1108" y="45">Pause</tspan>
                </text>
                <text
                    id="Insert"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="16"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(45) }"
                    @mousedown="onMouseDownHandler($event, 45)"
                    @mouseup="onMouseUpHandler($event, 45)"
                >
                    <tspan x="980.3" y="110">Insert</tspan>
                </text>
                <text
                    id="Home"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="16"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(36) }"
                    @mousedown="onMouseDownHandler($event, 36)"
                    @mouseup="onMouseUpHandler($event, 36)"
                >
                    <tspan x="1044.3" y="110">Home</tspan>
                </text>
                <text
                    id="PgUp"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="16"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(33) }"
                    @mousedown="onMouseDownHandler($event, 33)"
                    @mouseup="onMouseUpHandler($event, 33)"
                >
                    <tspan x="1110.6" y="110">PgUp</tspan>
                </text>
                <text
                    id="End"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="16"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(35) }"
                    @mousedown="onMouseDownHandler($event, 35)"
                    @mouseup="onMouseUpHandler($event, 35)"
                >
                    <tspan x="1052.1" y="175">End</tspan>
                </text>
                <text
                    id="PgDn"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="16"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(34) }"
                    @mousedown="onMouseDownHandler($event, 34)"
                    @mouseup="onMouseUpHandler($event, 34)"
                >
                    <tspan x="1110.6" y="175">PgDn</tspan>
                </text>
                <text
                    id="~-`"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(192) }"
                    @mousedown="onMouseDownHandler($event, 192)"
                    @mouseup="onMouseUpHandler($event, 192)"
                >
                    <tspan x="35.1" y="97">~</tspan>
                    <tspan x="35.1" y="122">`</tspan>
                </text>
                <text
                    id="!-1"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(49) }"
                    @mousedown="onMouseDownHandler($event, 49)"
                    @mouseup="onMouseUpHandler($event, 49)"
                >
                    <tspan x="100.1" y="97">!</tspan>
                    <tspan x="100.1" y="122">1</tspan>
                </text>
                <text
                    id="@-2"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(50) }"
                    @mousedown="onMouseDownHandler($event, 50)"
                    @mouseup="onMouseUpHandler($event, 50)"
                >
                    <tspan x="161.2" y="97">@</tspan>
                    <tspan x="161.2" y="122">2</tspan>
                </text>
                <text
                    id="#-3"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(51) }"
                    @mousedown="onMouseDownHandler($event, 51)"
                    @mouseup="onMouseUpHandler($event, 51)"
                >
                    <tspan x="228.8" y="97">#</tspan>
                    <tspan x="228.8" y="122">3</tspan>
                </text>
                <text
                    id="$-4"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(52) }"
                    @mousedown="onMouseDownHandler($event, 52)"
                    @mouseup="onMouseUpHandler($event, 52)"
                >
                    <tspan x="293.8" y="97">$</tspan>
                    <tspan x="293.8" y="122">4</tspan>
                </text>
                <text
                    id="%-5"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(53) }"
                    @mousedown="onMouseDownHandler($event, 53)"
                    @mouseup="onMouseUpHandler($event, 53)"
                >
                    <tspan x="354.9" y="97">%</tspan>
                    <tspan x="354.9" y="122">5</tspan>
                </text>
                <text
                    id="^-6"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(54) }"
                    @mousedown="onMouseDownHandler($event, 54)"
                    @mouseup="onMouseUpHandler($event, 54)"
                >
                    <tspan x="423.8" y="97">^</tspan>
                    <tspan x="423.8" y="122">6</tspan>
                </text>
                <text
                    id="&amp;-7"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(55) }"
                    @mousedown="onMouseDownHandler($event, 55)"
                    @mouseup="onMouseUpHandler($event, 55)"
                >
                    <tspan x="487.5" y="97">&amp;</tspan>
                    <tspan x="487.5" y="122">7</tspan>
                </text>
                <text
                    id="*-8"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(56) }"
                    @mousedown="onMouseDownHandler($event, 56)"
                    @mouseup="onMouseUpHandler($event, 56)"
                >
                    <tspan x="553.8" y="97">*</tspan>
                    <tspan x="553.8" y="122">8</tspan>
                </text>
                <text
                    id="(-9"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(57) }"
                    @mousedown="onMouseDownHandler($event, 57)"
                    @mouseup="onMouseUpHandler($event, 57)"
                >
                    <tspan x="618.8" y="97">(</tspan>
                    <tspan x="618.8" y="122">9</tspan>
                </text>
                <text
                    id=")-0"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(48) }"
                    @mousedown="onMouseDownHandler($event, 48)"
                    @mouseup="onMouseUpHandler($event, 48)"
                >
                    <tspan x="683.8" y="97">)</tspan>
                    <tspan x="683.8" y="122">0</tspan>
                </text>
                <text
                    id="—--"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(189) }"
                    @mousedown="onMouseDownHandler($event, 189)"
                    @mouseup="onMouseUpHandler($event, 189)"
                >
                    <tspan x="744.9" y="97">—</tspan>
                    <tspan x="744.9" y="122">-</tspan>
                </text>
                <text
                    id="+-="
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(187) }"
                    @mousedown="onMouseDownHandler($event, 187)"
                    @mouseup="onMouseUpHandler($event, 187)"
                >
                    <tspan x="813.8" y="97">+</tspan>
                    <tspan x="813.8" y="122">=</tspan>
                </text>
                <text
                    id="Backspace"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="12"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(8) }"
                    @mousedown="onMouseDownHandler($event, 8)"
                    @mouseup="onMouseUpHandler($event, 8)"
                >
                    <tspan x="895.5" y="121">Backspace</tspan>
                </text>
                <text
                    id="Tab"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="12"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(9) }"
                    @mousedown="onMouseDownHandler($event, 9)"
                    @mouseup="onMouseUpHandler($event, 9)"
                >
                    <tspan x="18.4" y="186">Tab</tspan>
                </text>
                <text
                    id="Delete"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="16"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(46) }"
                    @mousedown="onMouseDownHandler($event, 46)"
                    @mouseup="onMouseUpHandler($event, 46)"
                >
                    <tspan x="977.7" y="175">Delete</tspan>
                </text>
                <text
                    id="caps-lock"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="12"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(20) }"
                    @mousedown="onMouseDownHandler($event, 20)"
                    @mouseup="onMouseUpHandler($event, 20)"
                >
                    <tspan x="19.2" y="251">caps lock</tspan>
                </text>
                <text
                    id="shift"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="12"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(16) }"
                    @mousedown="onMouseDownHandler($event, 16)"
                    @mouseup="onMouseUpHandler($event, 16)"
                >
                    <tspan x="19.3" y="316">shift</tspan>
                </text>
                <text
                    id="{-["
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(219) }"
                    @mousedown="onMouseDownHandler($event, 219)"
                    @mouseup="onMouseUpHandler($event, 219)"
                >
                    <tspan x="777.4" y="162">{</tspan>
                    <tspan x="777.4" y="187">[</tspan>
                </text>
                <text
                    id="}-]"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(221) }"
                    @mousedown="onMouseDownHandler($event, 221)"
                    @mouseup="onMouseUpHandler($event, 221)"
                >
                    <tspan x="842.4" y="162">}</tspan>
                    <tspan x="842.4" y="187">]</tspan>
                </text>
                <text
                    id="|-\"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(220) }"
                    @mousedown="onMouseDownHandler($event, 220)"
                    @mouseup="onMouseUpHandler($event, 220)"
                >
                    <tspan x="919.1" y="162">|</tspan>
                    <tspan x="919.1" y="187">\</tspan>
                </text>
                <text
                    id=":-;"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(186) }"
                    @mousedown="onMouseDownHandler($event, 186)"
                    @mouseup="onMouseUpHandler($event, 186)"
                >
                    <tspan x="725.4" y="227">:</tspan>
                    <tspan x="725.4" y="252">;</tspan>
                </text>
                <text
                    id="“-‘"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(222) }"
                    @mousedown="onMouseDownHandler($event, 222)"
                    @mouseup="onMouseUpHandler($event, 222)"
                >
                    <tspan x="787.8" y="227">“</tspan>
                    <tspan x="787.8" y="252">‘</tspan>
                </text>
                <text
                    id="enter"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="12"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(13) }"
                    @mousedown="onMouseDownHandler($event, 13)"
                    @mouseup="onMouseUpHandler($event, 13)"
                >
                    <tspan x="926.9" y="251">enter</tspan>
                </text>
                <text
                    id="&lt;-,"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(188) }"
                    @mousedown="onMouseDownHandler($event, 188)"
                    @mouseup="onMouseUpHandler($event, 188)"
                >
                    <tspan x="618.8" y="292">&lt;</tspan>
                    <tspan x="618.8" y="317">,</tspan>
                </text>
                <text
                    id="&gt;-."
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(190) }"
                    @mousedown="onMouseDownHandler($event, 190)"
                    @mouseup="onMouseUpHandler($event, 190)"
                >
                    <tspan x="683.8" y="292">&gt;</tspan>
                    <tspan x="683.8" y="317">.</tspan>
                </text>
                <text
                    id="?-/"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="18.2"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(191) }"
                    @mousedown="onMouseDownHandler($event, 191)"
                    @mouseup="onMouseUpHandler($event, 191)"
                >
                    <tspan x="748.8" y="292">?</tspan>
                    <tspan x="748.8" y="317">/</tspan>
                </text>
                <text
                    id="shift"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="12"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(16) }"
                    @mousedown="onMouseDownHandler($event, 16)"
                    @mouseup="onMouseUpHandler($event, 16)"
                >
                    <tspan x="931.3" y="316">shift</tspan>
                </text>
                <text
                    id="↑"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(38) }"
                    @mousedown="onMouseDownHandler($event, 38)"
                    @mouseup="onMouseUpHandler($event, 38)"
                >
                    <tspan x="1053" y="308.8">↑</tspan>
                </text>
                <text
                    id="←"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(37) }"
                    @mousedown="onMouseDownHandler($event, 37)"
                    @mouseup="onMouseUpHandler($event, 37)"
                >
                    <tspan x="988" y="373.8">←</tspan>
                </text>
                <text
                    id="↓"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(40) }"
                    @mousedown="onMouseDownHandler($event, 40)"
                    @mouseup="onMouseUpHandler($event, 40)"
                >
                    <tspan x="1053" y="373.8">↓</tspan>
                </text>
                <text
                    id="→"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(39) }"
                    @mousedown="onMouseDownHandler($event, 39)"
                    @mouseup="onMouseUpHandler($event, 39)"
                >
                    <tspan x="1118" y="373.8">→</tspan>
                </text>
                <text
                    id="Q"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(81) }"
                    @mousedown="onMouseDownHandler($event, 81)"
                    @mouseup="onMouseUpHandler($event, 81)"
                >
                    <tspan x="119.6" y="178.8">Q</tspan>
                </text>
                <text
                    id="W"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(87) }"
                    @mousedown="onMouseDownHandler($event, 87)"
                    @mouseup="onMouseUpHandler($event, 87)"
                >
                    <tspan x="183.3" y="178.8">W</tspan>
                </text>
                <text
                    id="E"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(69) }"
                    @mousedown="onMouseDownHandler($event, 69)"
                    @mouseup="onMouseUpHandler($event, 69)"
                >
                    <tspan x="252.2" y="178.8">E</tspan>
                </text>
                <text
                    id="T"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(84) }"
                    @mousedown="onMouseDownHandler($event, 84)"
                    @mouseup="onMouseUpHandler($event, 84)"
                >
                    <tspan x="382.2" y="178.8">T</tspan>
                </text>
                <text
                    id="A"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(65) }"
                    @mousedown="onMouseDownHandler($event, 65)"
                    @mouseup="onMouseUpHandler($event, 65)"
                >
                    <tspan x="133.9" y="243.8">A</tspan>
                </text>
                <text
                    id="S"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(83) }"
                    @mousedown="onMouseDownHandler($event, 83)"
                    @mouseup="onMouseUpHandler($event, 83)"
                >
                    <tspan x="200.2" y="243.8">S</tspan>
                </text>
                <text
                    id="Z"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(90) }"
                    @mousedown="onMouseDownHandler($event, 90)"
                    @mouseup="onMouseUpHandler($event, 90)"
                >
                    <tspan x="161.2" y="308.8">Z</tspan>
                </text>
                <text
                    id="X"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(88) }"
                    @mousedown="onMouseDownHandler($event, 88)"
                    @mouseup="onMouseUpHandler($event, 88)"
                >
                    <tspan x="226.2" y="308.8">X</tspan>
                </text>
                <text
                    id="D"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(68) }"
                    @mousedown="onMouseDownHandler($event, 68)"
                    @mouseup="onMouseUpHandler($event, 68)"
                >
                    <tspan x="263.9" y="243.8">D</tspan>
                </text>
                <text
                    id="C"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(67) }"
                    @mousedown="onMouseDownHandler($event, 67)"
                    @mouseup="onMouseUpHandler($event, 67)"
                >
                    <tspan x="289.9" y="308.8">C</tspan>
                </text>
                <text
                    id="F"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(70) }"
                    @mousedown="onMouseDownHandler($event, 70)"
                    @mouseup="onMouseUpHandler($event, 70)"
                >
                    <tspan x="330.2" y="243.8">F</tspan>
                </text>
                <text
                    id="V"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(86) }"
                    @mousedown="onMouseDownHandler($event, 86)"
                    @mouseup="onMouseUpHandler($event, 86)"
                >
                    <tspan x="356.2" y="308.8">V</tspan>
                </text>
                <text
                    id="G"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(71) }"
                    @mousedown="onMouseDownHandler($event, 71)"
                    @mouseup="onMouseUpHandler($event, 71)"
                >
                    <tspan x="393.9" y="243.8">G</tspan>
                </text>
                <text
                    id="B"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(66) }"
                    @mousedown="onMouseDownHandler($event, 66)"
                    @mouseup="onMouseUpHandler($event, 66)"
                >
                    <tspan x="419.9" y="308.8">B</tspan>
                </text>
                <text
                    id="Y"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(89) }"
                    @mousedown="onMouseDownHandler($event, 89)"
                    @mouseup="onMouseUpHandler($event, 89)"
                >
                    <tspan x="445.9" y="178.8">Y</tspan>
                </text>
                <text
                    id="H"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(72) }"
                    @mousedown="onMouseDownHandler($event, 72)"
                    @mouseup="onMouseUpHandler($event, 72)"
                >
                    <tspan x="458.9" y="243.8">H</tspan>
                </text>
                <text
                    id="N"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(78) }"
                    @mousedown="onMouseDownHandler($event, 78)"
                    @mouseup="onMouseUpHandler($event, 78)"
                >
                    <tspan x="484.9" y="308.8">N</tspan>
                </text>
                <text
                    id="U"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(85) }"
                    @mousedown="onMouseDownHandler($event, 85)"
                    @mouseup="onMouseUpHandler($event, 85)"
                >
                    <tspan x="510.9" y="178.8">U</tspan>
                </text>
                <text
                    id="I"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(73) }"
                    @mousedown="onMouseDownHandler($event, 73)"
                    @mouseup="onMouseUpHandler($event, 73)"
                >
                    <tspan x="582.4" y="178.8">I</tspan>
                </text>
                <text
                    id="O"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(79) }"
                    @mousedown="onMouseDownHandler($event, 79)"
                    @mouseup="onMouseUpHandler($event, 79)"
                >
                    <tspan x="639.6" y="178.8">O</tspan>
                </text>
                <text
                    id="P"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(80) }"
                    @mousedown="onMouseDownHandler($event, 80)"
                    @mouseup="onMouseUpHandler($event, 80)"
                >
                    <tspan x="707.2" y="178.8">P</tspan>
                </text>
                <text
                    id="J"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(74) }"
                    @mousedown="onMouseDownHandler($event, 74)"
                    @mouseup="onMouseUpHandler($event, 74)"
                >
                    <tspan x="526.5" y="243.8">J</tspan>
                </text>
                <text
                    id="K"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(75) }"
                    @mousedown="onMouseDownHandler($event, 75)"
                    @mouseup="onMouseUpHandler($event, 75)"
                >
                    <tspan x="588.9" y="243.8">K</tspan>
                </text>
                <text
                    id="L"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(76) }"
                    @mousedown="onMouseDownHandler($event, 76)"
                    @mouseup="onMouseUpHandler($event, 76)"
                >
                    <tspan x="655.2" y="243.8">L</tspan>
                </text>
                <text
                    id="M"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(77) }"
                    @mousedown="onMouseDownHandler($event, 77)"
                    @mouseup="onMouseUpHandler($event, 77)"
                >
                    <tspan x="547.3" y="308.8">M</tspan>
                </text>
                <text
                    id="R"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="26"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(82) }"
                    @mousedown="onMouseDownHandler($event, 82)"
                    @mouseup="onMouseUpHandler($event, 82)"
                >
                    <tspan x="315.9" y="178.8">R</tspan>
                </text>
                <text
                    id="Ctrl"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="20"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(17) }"
                    @mousedown="onMouseDownHandler($event, 17)"
                    @mouseup="onMouseUpHandler($event, 17)"
                >
                    <tspan x="28.4" y="370.8">Ctrl</tspan>
                </text>
                <text
                    id="Alt"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="20"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(18) }"
                    @mousedown="onMouseDownHandler($event, 18)"
                    @mouseup="onMouseUpHandler($event, 18)"
                >
                    <tspan x="111.9" y="370.8">Alt</tspan>
                </text>
                <text
                    id="Cmd"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="20"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(91) }"
                    @mousedown="onMouseDownHandler($event, 91)"
                    @mouseup="onMouseUpHandler($event, 91)"
                >
                    <tspan x="179.9" y="370.8">Cmd</tspan>
                </text>
                <text
                    id="Cmd"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="20"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(93) }"
                    @mousedown="onMouseDownHandler($event, 93)"
                    @mouseup="onMouseUpHandler($event, 93)"
                >
                    <tspan x="751.9" y="370.8">Cmd</tspan>
                </text>
                <text
                    id="Alt"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="20"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(18) }"
                    @mousedown="onMouseDownHandler($event, 18)"
                    @mouseup="onMouseUpHandler($event, 18)"
                >
                    <tspan x="839.9" y="370.8">Alt</tspan>
                </text>
                <text
                    id="Ctrl"
                    font-family="PingFangSC-Regular, PingFang SC"
                    font-size="20"
                    font-weight="normal"
                    fill="#666666"
                    :class="{ active: pressed_keys.includes(17) }"
                    @mousedown="onMouseDownHandler($event, 17)"
                    @mouseup="onMouseUpHandler($event, 17)"
                >
                    <tspan x="913.4" y="370.8">Ctrl</tspan>
                </text>
            </g>
        </svg>
    </div>

</template>
<script>
import Config from '@/config.js';

export default {
    data() {
        return {
            pressed_keys: [],
            ws: null,
        };
    },
    computed: {
        show_svg() {
            return this.$store.state.display_virtual_keyboard;
        }
    },
    methods: {
        toggleVirtualKeyboard() {
            this.$store.commit('toggle_virtual_keyboard');
        },
        onKeyUpHandler(e) {

            let keycode = e.keyCode || e.which || e.charCode;
            e.preventDefault();
            let index = this.pressed_keys.indexOf(keycode);
            if (index > -1) {
                this.pressed_keys.splice(index, 1);
            }
        },
        onKeyDownHandler(e) {

            let keycode = e.keyCode || e.which || e.charCode;
            e.preventDefault();
            if (!this.pressed_keys.includes(keycode)) {
                this.pressed_keys.push(keycode);
            }
        },
        onMouseDownHandler(e, keycode) {
            if (e.button === 0) {

                if (!this.pressed_keys.includes(keycode)) {
                    this.pressed_keys.push(keycode);
                }
            }
        },
        onMouseUpHandler(e, keycode) {
            if (e.button === 0) {
                let index = this.pressed_keys.indexOf(keycode);
                if (index > -1) {
                    this.pressed_keys.splice(index, 1);
                }
            }
        },
        initWs() {
            this.ws = new WebSocket(`ws://${Config.keyboard_host}:80`);
            this.ws.onopen = this.onWsOpen;
            this.ws.onmessage = this.onWsMessage;
            this.ws.onclose = this.onWsClose;
        },
        onWsOpen(evt) {

        },
        onWsMessage(evt) {

        },
        onWsClose(evt) {

        }
    },
    created() {
        document.addEventListener("keydown", this.onKeyDownHandler);
        document.addEventListener("keyup", this.onKeyUpHandler);
        this.initWs();
    },
    beforeDestroy() {
        document.removeEventListener("keydown", this.onKeyDownHandler);
        document.removeEventListener("keyup", this.onKeyUpHandler);
    },
    watch: {
        pressed_keys: {
            handler: function (newValue, oldValue) {
                this.ws.send(JSON.stringify({k: newValue}));

            },
            deep: true
        }
    }
};
</script>
<style scoped lang="less">
rect {
    fill: #ffffff;
}

rect.active {
    stroke: #008aff;
    stroke-width: 2;
    fill: #e7f2ff;
}

text.active {
    fill: #00c6ff;
}

#svgkeyboard-container {
    background: #ffffff;
    border-radius: 14px;
    float: left;
    width: 100%;
    position: absolute;
    bottom: 10px;
    left: 90px;
    margin-right: 10px;
    -moz-user-select:none;
    -webkit-user-select:none;
    user-select:none;
}

#keyboardsvg {
    width: 100%;
    height: 100%;
}

@media screen and (min-width: 900px) {
    #svgkeyboard-container {
        width: 900px;
    }
}
</style>
