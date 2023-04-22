import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const SearchIcon = ({props}: any) =>  {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 52 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        opacity={0.3}
        d="M21.195 42.49c4.556 0 8.811-1.467 12.27-3.914l13.011 12.888c.604.598 1.4.897 2.224.897 1.784 0 3.074-1.36 3.074-3.1 0-.816-.275-1.577-.878-2.175l-12.93-12.834c2.718-3.534 4.338-7.912 4.338-12.67 0-11.501-9.498-20.91-21.11-20.91C9.557.673.087 10.082.087 21.583S9.556 42.49 21.195 42.49zm0-4.513c-9.086 0-16.552-7.422-16.552-16.395 0-8.973 7.466-16.396 16.552-16.396 9.058 0 16.552 7.423 16.552 16.396s-7.494 16.395-16.552 16.395z"
        fill="#242424"
      />
    </Svg>
  )
}