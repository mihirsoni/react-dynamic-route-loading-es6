import expect from 'expect';
import React from 'react';

import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import TestUtils, { createRenderer } from 'react-addons-test-utils';

import Header from 'components/Header/Header';


describe('header component', function() {

  const setup = props => {
    const renderer = createRenderer();
    renderer.render(<Header {...props} />);
    const output = renderer.getRenderOutput();

    return { props, output, renderer };
  };

  it('should render correctly', function(done) {
    const { output } = setup({ title: 'Hello world',className:'header-test' });

    expect(output.props.className).toBe('header-container header-test');
    done();
  })

  it('should render the title', function(done) {
    const { output } = setup({ title: 'Hello World!' });
    const h1 = output.props.children;
    
    expect(h1.props.children).toEqual('Hello World!');
    done();
  });

});
