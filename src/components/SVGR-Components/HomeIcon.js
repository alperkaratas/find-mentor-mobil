import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <Svg
      height={props.height}
      viewBox="0 0 512 512"
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path d="M469.36 165.93V461H42.64V165.93L256 40.33z" fill="#e6f3ff" />
      <Path d="M469.36 165.93V461H256V40.33z" fill="#bbe4f2" />
      <Path d="M94 227.435h125.429V461H94z" fill="#ffcf67" />
      <Path d="M292.571 227.435h121.762V312H292.571z" fill="#28abf9" />
      <Path d="M0 438.86h512V512H0z" fill="#13cffe" />
      <Path d="M256 438.86h256V512H256z" fill="#28abf9" />
      <Path d="M73.143 0h73.143v108.038H73.143z" fill="#13cffe" />
      <Path
        d="M512 147.8v73.31L256 73.31 0 221.11V147.8L256 0z"
        fill="#393e9f"
      />
      <Path d="M512 147.8v73.31L256 73.31V0z" fill="#340d66" />
    </Svg>
  );
}

export {HomeIcon};
