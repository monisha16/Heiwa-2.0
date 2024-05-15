import React from 'react';

const HeiwaIcon = (props) => {
  let {
    height = 60,
    width = 60,
    icon,
    small = false,
    large = false,
    extraSmall = false,
    ...rest
  } = props;

  if (extraSmall) {
    height = 20;
    width = 20;
  } else if (small) {
    height = 40;
    width = 40;
  } else if (large) {
    height = 80;
    width = 80;
  }

  return <img src={icon} height={height} width={width} {...rest} />;
};

export default HeiwaIcon;
