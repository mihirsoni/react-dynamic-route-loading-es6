import expect from 'expect';
import React from 'react';

import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import TestUtils, { createRenderer } from 'react-addons-test-utils';

import TinyInfoBox from 'components/Product/TinyInfoBox';


describe('Product info box component', function() {

  const setup = props => {
    const renderer = createRenderer();
    renderer.render(<TinyInfoBox {...props} />);
    const output = renderer.getRenderOutput();

    return { props, output, renderer };
  };

  it('should render correctly', function(done) {
    const { output } = setup({ image: 'img.png',description: 'Test' });

    expect(output.props.className).toBe('tiny-product-info row');
    done();
  });

  it('should render the image', function(done) {
    const { output } = setup({ image: 'img.png',description: 'Test' });
    const img = output.props.children[0];
    
    expect(img.props.src).toEqual('img.png');
    done();
  });

  it('should render the description', function(done) {
    const { output } = setup({ image: 'img.png',description: 'This is the description' });
    const div = output.props.children[1];
    const p = div.props.children;
    
    expect(p.props.children).toEqual('This is the description');
    done();
  });

});
