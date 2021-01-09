import * as React from 'react';
import Svg, {G, Circle, Path} from 'react-native-svg';

function JobSeeker(props) {
  return (
    <Svg
      height={props.height}
      viewBox="0 0 512 512"
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G data-name="Search">
        <Circle cx={256} cy={128} fill="#57565c" r={112} />
        <Circle cx={256} cy={128} fill="#c2dff6" r={88} />
        <Circle cx={256} cy={104} fill="#d9ccbc" r={24} />
        <Path
          d="M296 176h-80v-8a32 32 0 0132-32h16a32 32 0 0132 32z"
          fill="#3d9ae2"
        />
        <Path d="M240 240h32v64h-32z" fill="#e0e0e2" />
        <Path d="M224 304h64v192h-64z" fill="#57565c" />
        <Path d="M376 128a120 120 0 10-144 117.587V296h-8a8 8 0 00-8 8v192a8 8 0 008 8h64a8 8 0 008-8V304a8 8 0 00-8-8h-8v-50.413A120.2 120.2 0 00376 128zm-224 0a104 104 0 11104 104 104.118 104.118 0 01-104-104zm128 360h-48V312h48zm-16-240v48h-16v-48z" />
        <Path d="M352 128a96 96 0 10-96 96 96.108 96.108 0 0096-96zm-176 0a80 80 0 1180 80 80.091 80.091 0 01-80-80z" />
        <Path d="M304 176v-8a40.062 40.062 0 00-28.823-38.4 32 32 0 10-38.354 0A40.062 40.062 0 00208 168v8a8 8 0 008 8h80a8 8 0 008-8zm-48-88a16 16 0 11-16 16 16.019 16.019 0 0116-16zm-32 80a24.027 24.027 0 0124-24h16a24.027 24.027 0 0124 24z" />
      </G>
    </Svg>
  );
}

export {JobSeeker};
