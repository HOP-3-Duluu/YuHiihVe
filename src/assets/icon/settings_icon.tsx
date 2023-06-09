import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const Settings_icon = (props: any) => {

  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 63 63"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M31.429 39.182a7.753 7.753 0 100-15.507 7.753 7.753 0 000 15.507z"
        stroke={props.active ? 'white' : "#414141"}
        strokeWidth={5.1688}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M50.553 39.182a4.264 4.264 0 00.853 4.703l.155.155a5.167 5.167 0 010 7.314 5.169 5.169 0 01-7.314 0l-.155-.155a4.264 4.264 0 00-4.704-.853 4.264 4.264 0 00-2.584 3.903v.439a5.168 5.168 0 11-10.338 0v-.233a4.265 4.265 0 00-2.79-3.902 4.264 4.264 0 00-4.704.853l-.155.155a5.167 5.167 0 01-7.314 0 5.17 5.17 0 010-7.314l.155-.155a4.264 4.264 0 00.853-4.704 4.264 4.264 0 00-3.903-2.584h-.44a5.169 5.169 0 010-10.338h.233a4.265 4.265 0 003.903-2.79 4.264 4.264 0 00-.853-4.704l-.155-.155a5.167 5.167 0 010-7.314 5.17 5.17 0 017.314 0l.155.155a4.264 4.264 0 004.703.853h.207a4.264 4.264 0 002.585-3.903v-.44a5.169 5.169 0 0110.337 0v.233a4.264 4.264 0 002.585 3.903 4.264 4.264 0 004.703-.853l.155-.155a5.167 5.167 0 017.314 0 5.169 5.169 0 010 7.314l-.155.155a4.264 4.264 0 00-.853 4.703v.207a4.264 4.264 0 003.903 2.585h.439a5.169 5.169 0 110 10.337h-.233a4.264 4.264 0 00-3.902 2.585v0z"
        stroke={props.active ? 'white' : "#414141"}
        strokeWidth={5.1688}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

