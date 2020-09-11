import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <Path
        d="M18.36 1.465c-1.357 0-2.601.43-3.697 1.278-1.051.812-1.751 1.848-2.163 2.6-.412-.752-1.112-1.788-2.163-2.6-1.096-.848-2.34-1.278-3.696-1.278C2.855 1.465 0 4.56 0 8.668c0 4.436 3.562 7.471 8.954 12.066.915.78 1.953 1.665 3.032 2.608a.78.78 0 001.028 0c1.08-.943 2.117-1.828 3.033-2.608C21.438 16.139 25 13.104 25 8.667c0-4.107-2.855-7.203-6.64-7.203z"
        fill="#FF928B"
      />
    </Svg>
  );
}

export default SvgComponent;
