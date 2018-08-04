import React from 'react';

import ImageAnimation from './ImageAnimation';

const getWindowWidth = () => {
  const w = window;
  const d = document;
  const e = d.documentElement;
  const g = d.getElementsByTagName('body')[0];
  return w.innerWidth || e.clientWidth || g.clientWidth;
};

const AccomodationDetails = ({
  startingX,
  startingY,
  startingWidth,
  startingHeight,
  item,
}) => {
  return (
    <div>
      <div style={{width: '100%', height: 400}} />
      <ImageAnimation
        image={item.image_urls[0]}
        startingX={startingX}
        startingY={startingY}
        startingWidth={startingWidth}
        startingHeight={startingHeight}
        endingX={0}
        endingY={0}
        endingWidth={getWindowWidth()}
        endingHeight={400}
      />
    </div>
  );
};

export default AccomodationDetails;
