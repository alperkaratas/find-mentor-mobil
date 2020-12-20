import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Question(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width}
      height={props.height}
      viewBox="0 0 16 16"
      {...props}>
      <Path
        fill={props.fill}
        d="M9 11H6c0-3 1.6-4 2.7-4.6.4-.2.7-.4.9-.6.5-.5.3-1.2.2-1.4-.3-.7-1-1.4-2.3-1.4C5.4 3 5 4.9 5 5.3l-3-.4C2.2 3.2 3.7 0 7.5 0c2.3 0 4.3 1.3 5.1 3.2.7 1.7.4 3.5-.8 4.7-.5.5-1.1.8-1.6 1.1-.9.5-1.2 1-1.2 2zM9.5 14a2 2 0 11-3.999.001A2 2 0 019.5 14z"
      />
    </Svg>
  );
}

export {Question};
