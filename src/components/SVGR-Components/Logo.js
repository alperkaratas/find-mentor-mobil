import * as React from 'react';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';

function Logo(props) {
  return (
    <Svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          y1={256}
          x2={512}
          y2={256}
          gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0} stopColor="#216383" />
          <Stop offset={1} stopColor="#71bfbc" />
        </LinearGradient>
      </Defs>
      <Path
        d="M318.06 0c-85.92 0-158.95 56.17-184.35 133.71C56.17 159.1 0 232.14 0 318.06 0 425 87 512 193.94 512c85.92 0 159-56.17 184.35-133.71C455.83 352.89 512 279.86 512 193.94 512 87 425 0 318.06 0zM193.94 465.45c-81.27 0-147.4-66.12-147.4-147.39a147.53 147.53 0 0177.67-129.83c0 1.9-.09 3.8-.09 5.71 0 106.94 87 193.94 193.94 193.94 1.91 0 3.81 0 5.71-.09a147.52 147.52 0 01-129.83 77.66zm193.85-141.68c0-1.9.09-3.8.09-5.71 0-106.94-87-193.94-193.94-193.94-1.91 0-3.81 0-5.71.09a147.53 147.53 0 01129.83-77.66c81.28 0 147.4 66.12 147.4 147.39a147.55 147.55 0 01-77.67 129.83z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export {Logo};
