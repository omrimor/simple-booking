import React from 'react';
import { Motion, spring } from 'react-motion';

const setStyles = (x, y, width, height, image) => ({
  left: `${x}px`,
  right: `${x}px`,
  top: `${y}px`,
  width: `${width}px`,
  height: `${height}px`,
  background: `url('${image}')`,
  position: 'absolute',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

class ImageAnimation extends React.Component {
  render() {
    const {
      image,
      startingWidth,
      startingHeight,
      startingX,
      startingY,
      endingWidth,
      endingHeight,
      endingX,
      endingY,
    } = this.props;

    return (
      <Motion
        defaultStyle={{
          x: startingX,
          y: startingY,
          width: startingWidth,
          height: startingHeight,
        }}
        style={{
          x: spring(endingX),
          y: spring(endingY),
          width: spring(endingWidth),
          height: spring(endingHeight),
        }}
      >
        {(style) => (
          <div style={setStyles(style.x, style.y, style.width, style.height, image)} />
        )}
      </Motion>
    );
  }
}

export default ImageAnimation;
