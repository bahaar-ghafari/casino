import React from 'react';
import { IconProps } from './@types';
import theme from 'Styles/Theme';

interface ChevronIconProps extends IconProps {
  direction: 'left' | 'right';
}

const ChevronIcon: React.FC<ChevronIconProps> = ({
  color = theme.gray
  ,
  width = 24,
  height = 24,
  direction = 'right',
}) => {
  const rotation = direction === 'left' ? 'rotate(180, 896, 896)' : '';

  return (
    <svg
      width={width}
      height={height}
      color={color}
      fill={color}
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
    >
      <path transform={rotation} d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z" />
    </svg>
  );
};

export default ChevronIcon;
