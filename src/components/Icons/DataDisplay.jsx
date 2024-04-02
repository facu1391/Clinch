import * as React from "react"
const DataDisplay = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 48 48"
    {...props}
  >
    <g
      fill={props.fill}
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
    >
      <path d="M22 8v12c0 2.21-4.03 4-9 4s-9-1.79-9-4V8" />
      <path d="M22 14c0 2.21-4.03 4-9 4s-9-1.79-9-4m18-6c0 2.21-4.03 4-9 4s-9-1.79-9-4 4.03-4 9-4 9 1.79 9 4m10-2h6a4 4 0 0 1 4 4v6M16 42h-6a4 4 0 0 1-4-4v-6m29 6v6m6 0H29m15-6V26H26v12z" />
    </g>
  </svg>
)
export default DataDisplay
