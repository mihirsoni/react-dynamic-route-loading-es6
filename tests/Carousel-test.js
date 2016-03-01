import expect, { createSpy } from 'expect';
import React from 'react';

import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import { createRenderer } from 'react-addons-test-utils';

import Carousel from 'components/Image/Carousel';

describe('carousel component', function() {

  const setup = props => {
    const softRenderer = createRenderer();
    softRenderer.render(<Carousel {...props} />);
    const output = softRenderer.getRenderOutput();

    return { props, output, softRenderer };
  };

  it('should render correctly', function(done) {
    const images = [ 'dog.png', 'cat.png', 'bird.png' ];
    const { output } = setup({ images });

    const sliderContainer = output.props.children[0].props.children.props;

    images.forEach((image, idx) => {
      const imageElement = sliderContainer.children[idx].props.children.props;
      expect(imageElement.path).toBe(image);
    });

    done();
  });

  it('should move rightwards when the right button is clicked', function(done) {
    const images = [ 'dog.png', 'cat.png', 'bird.png' ];
    const { output, softRenderer } = setup({ images });

    const rightButton = output.props.children[2].props;
    rightButton.onClick();

    const updatedOutput = softRenderer.getRenderOutput();
    const sliderContainer = updatedOutput.props.children[0].props.children.props;

    expect(sliderContainer.style.transform).toBe('translate3d(-100%, 0px, 0px)');
    done();
  });

  it('should move leftwards when the left button is clicked', function(done) {
    const images = [ 'dog.png', 'cat.png', 'bird.png' ];
    const { output, softRenderer } = setup({ images });

    const rightButton = output.props.children[2].props;
    rightButton.onClick();
    rightButton.onClick();

    const leftButton = output.props.children[1].props;
    leftButton.onClick();

    const updatedOutput = softRenderer.getRenderOutput();
    const sliderContainer = updatedOutput.props.children[0].props.children.props;

    expect(sliderContainer.style.transform).toBe('translate3d(-100%, 0px, 0px)');
    done();
  });
});
