import expect from 'expect';
import React from 'react';

import { createRenderer } from 'react-addons-test-utils';

import Toolbar from 'containers/Toolbar/Toolbar';
import Button from 'containers/Toolbar/Button';

describe('Toolbar component', () => {
  it('should render correctly', done => {
    const shallowRenderer = createRenderer();
    const renderAppShallow = () => {
      shallowRenderer.render((
        <Toolbar />
      ));
      return shallowRenderer.getRenderOutput();
    };

    const bar = renderAppShallow();

    expect(bar.type).toEqual('nav');
    expect(bar.props.className).toMatch(/^top-bar/);
    done();
  });
});

describe('Toolbar Button component', () => {
  it('should render correctly', done => {
    const shallowRenderer = createRenderer();
    const renderAppShallow = () => {
      shallowRenderer.render((
        <Button icon="&#58887;" text="我的最愛" className="fav" />
      ));
      return shallowRenderer.getRenderOutput();
    };

    const btn = renderAppShallow();

    expect(btn.type).toEqual('div');
    expect(btn.props.className).toEqual('btn fav');
    done();
  });
});
