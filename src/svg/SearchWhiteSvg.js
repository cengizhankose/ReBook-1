import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 30 30" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)" fill="#fff">
        <Path d="M13.211 0C5.927 0 0 5.927 0 13.211c0 7.285 5.927 13.212 13.211 13.212 7.285 0 13.212-5.927 13.212-13.212C26.423 5.927 20.496 0 13.21 0zm0 23.984c-5.94 0-10.772-4.833-10.772-10.773 0-5.94 4.833-10.772 10.772-10.772 5.94 0 10.773 4.833 10.773 10.772 0 5.94-4.833 10.773-10.773 10.773z" />
        <Path d="M29.643 27.918l-6.992-6.992a1.219 1.219 0 10-1.725 1.725l6.992 6.992a1.215 1.215 0 001.725 0 1.219 1.219 0 000-1.725z" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h30v30H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
