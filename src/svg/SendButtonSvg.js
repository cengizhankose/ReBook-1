import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M19.829.172a.586.586 0 00-.632-.13L.369 7.575A.586.586 0 00.33 8.645l7.424 3.6 3.601 7.425c.098.203.303.33.527.33h.021a.586.586 0 00.523-.368L19.96.804a.586.586 0 00-.13-.632zM2.035 8.17l14.947-5.978-8.908 8.907L2.035 8.17zm9.797 9.797l-2.929-6.04L17.81 3.02l-5.978 14.947z"
        fill="#fff"
      />
    </Svg>
  )
}

export default SvgComponent