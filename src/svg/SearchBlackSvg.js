import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M8.808 0C3.95 0 0 3.951 0 8.808c0 4.856 3.951 8.807 8.808 8.807 4.856 0 8.807-3.95 8.807-8.807S13.665 0 8.808 0zm0 15.99c-3.96 0-7.182-3.223-7.182-7.182 0-3.96 3.222-7.182 7.182-7.182 3.96 0 7.181 3.222 7.181 7.182 0 3.96-3.222 7.181-7.181 7.181z"
        fill="#000"
      />
      <Path
        d="M19.762 18.612L15.1 13.951a.813.813 0 10-1.15 1.15l4.662 4.66a.81.81 0 001.15 0 .813.813 0 000-1.149z"
        fill="#000"
      />
    </Svg>
  );
}

export default SvgComponent;
