/* GENERATED FILE */
import * as React from 'react';
import Svg, { G, Rect, Circle, Polyline } from 'react-native-svg';

import { IconProps } from '../lib';

function Info(props: IconProps) {
  return (
    <Svg
      id="Raw"
      viewBox="0 0 256 256"
      width={props.size}
      height={props.size}
      {...props}
    >
      <G opacity={0.1}>
        <Rect x={0.00146} width={256} height={256} fill="none" />
      </G>
      <Circle
        cx={128.00146}
        cy={128}
        r={96}
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Polyline
        points="120.001 124 128.001 124 128.001 176 136.001 176"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={24}
      />
      <Circle cx={126} cy={84} r={16} />
    </Svg>
  );
}

export default Info;