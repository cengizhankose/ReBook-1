import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={130} height={42} viewBox="0 0 130 42" fill="none" {...props}>
      <Path
        d="M1.701 12.612h7.992c1.89 0 3.294.486 4.212 1.458.918.972 1.377 2.34 1.377 4.104 0 1.242-.315 2.295-.945 3.159-.612.846-1.485 1.44-2.619 1.782.306.216.549.459.729.729.18.252.369.621.567 1.107L15.201 30h-3.024l-2.133-4.86c-.216-.486-.468-.819-.756-.999-.288-.198-.747-.297-1.377-.297H4.644V30H1.701V12.612zm7.209 8.856c2.286 0 3.429-1.098 3.429-3.294 0-2.178-1.053-3.267-3.159-3.267H4.644v6.561H8.91zm14.538 8.802c-2.268 0-4.005-.558-5.211-1.674-1.206-1.116-1.81-2.79-1.81-5.022 0-2.106.532-3.735 1.594-4.887 1.062-1.17 2.637-1.755 4.725-1.755 1.89 0 3.339.495 4.347 1.485 1.008.99 1.512 2.313 1.512 3.969v2.376h-9.37c.145 1.224.586 2.079 1.324 2.565.738.468 1.899.702 3.483.702.648 0 1.305-.063 1.97-.189a10.472 10.472 0 001.81-.486v2.16c-1.134.504-2.592.756-4.374.756zm2.565-7.425v-.891c0-.918-.252-1.611-.756-2.079-.504-.486-1.314-.729-2.43-.729-1.332 0-2.268.288-2.808.864-.522.576-.783 1.521-.783 2.835h6.777z"
        fill="#FF928B"
      />
      <Path
        d="M38.49 30.27c-.918 0-1.72-.117-2.403-.351a5.853 5.853 0 01-1.917-1.188L34.008 30H31.47V11.802h2.943v6.237c1.098-.738 2.439-1.107 4.023-1.107 1.89 0 3.339.54 4.347 1.62 1.026 1.062 1.539 2.709 1.539 4.941 0 2.268-.513 3.969-1.54 5.103-1.007 1.116-2.438 1.674-4.292 1.674zm-.783-2.214c1.296 0 2.223-.369 2.78-1.107.577-.738.865-1.89.865-3.456s-.297-2.673-.891-3.321c-.576-.666-1.512-.999-2.808-.999-1.332 0-2.412.369-3.24 1.107v6.426c.846.9 1.944 1.35 3.294 1.35zm14.92 2.214c-4.445 0-6.668-2.223-6.668-6.669s2.223-6.669 6.669-6.669c4.464 0 6.696 2.223 6.696 6.669s-2.232 6.669-6.696 6.669zm0-2.484c1.35 0 2.305-.324 2.863-.972.576-.648.864-1.719.864-3.213 0-1.476-.288-2.538-.864-3.186-.558-.648-1.512-.972-2.862-.972-1.332 0-2.286.324-2.862.972-.558.648-.837 1.71-.837 3.186 0 1.494.279 2.565.837 3.213.576.648 1.53.972 2.862.972zm15.004 2.484c-4.446 0-6.67-2.223-6.67-6.669s2.224-6.669 6.67-6.669c4.464 0 6.696 2.223 6.696 6.669s-2.232 6.669-6.696 6.669zm0-2.484c1.35 0 2.304-.324 2.862-.972.576-.648.864-1.719.864-3.213 0-1.476-.288-2.538-.864-3.186-.558-.648-1.512-.972-2.862-.972-1.332 0-2.286.324-2.862.972-.558.648-.837 1.71-.837 3.186 0 1.494.279 2.565.837 3.213.576.648 1.53.972 2.862.972zm9.56-15.984h2.942v10.53l5.373-5.13h3.375l-5.21 5.157L89.177 30h-3.105l-4.239-6.075-1.7 1.62V30H77.19V11.802z"
        fill="#000"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M111.117 9.884c-2.269-1.408-4.837-1.747-6.833-1.747a17.889 17.889 0 00-4.719.622.674.674 0 00-.471.675v.778h-2.206a.665.665 0 00-.654.676v21.589c0 .373.293.676.654.676.113 0 .223-.03.321-.088l.008-.005c.25-.136 5.877-3.211 13.9-1.753v-2.393c-1.533-.723-3.85-1.398-7.167-1.398-1.19.002-2.379.081-3.56.236V9.968a17.504 17.504 0 013.881-.446c2.017 0 4.665.395 6.846 2.062v-1.7zm4 21.418c8.184-1.5 13.865 1.706 13.901 1.763.203.12.452.12.655 0a.68.68 0 00.327-.581v-21.59a.665.665 0 00-.654-.675h-2.226v-.785a.674.674 0 00-.471-.675 17.886 17.886 0 00-4.719-.622c-1.997 0-4.546.354-6.813 1.751v1.686c2.175-1.642 4.81-2.052 6.819-2.052 1.306.004 2.607.154 3.882.446v17.784a27.9 27.9 0 00-3.541-.243c-3.302 0-5.619.677-7.16 1.4v2.393zM97.543 11.57v19.832a23.366 23.366 0 0111.997-1.67 16.483 16.483 0 00-5.59-.871 27.747 27.747 0 00-4.09.338.666.666 0 01-.753-.676V11.57h-1.564zm19.118 18.163c4.08-.513 8.219.061 12.023 1.67l.027-19.833h-1.565v16.946a.658.658 0 01-.752.676 27.744 27.744 0 00-4.117-.331 16.525 16.525 0 00-5.616.872z"
        fill="#FF928B"
      />
    </Svg>
  );
}

export default SvgComponent;
