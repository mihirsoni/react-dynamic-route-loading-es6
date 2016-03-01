import expect, { createSpy } from 'expect';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import { render } from 'react-dom';
import Image from 'components/Image/Image';

describe('image component', function() {

  const setup = props => {
    const softRenderer = createRenderer();
    softRenderer.render(<Image {...props} />);
    const output = softRenderer.getRenderOutput();

    return { props, output, softRenderer };
  };

  it('should render correctly', function(done) {
    const { output } = setup({ path: 'image/foo.jpg', width: '320px', height: '240px' });

    expect(output.props.src).toBe('image/foo.jpg');
    expect(output.props.style).toEqual({ width: '320px', height: '240px' });

    done();
  });

  it('should fire the onClick function', function(done) {
    const imageClickFunction = createSpy();
    const { output } = setup({ path: 'image/foo.jpg', width: 320, height: 240, onClick: imageClickFunction });

    output.props.onClick();
    expect(imageClickFunction).toHaveBeenCalled();

    done();
  });
});
