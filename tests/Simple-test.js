import expect from 'expect';
import React from 'react';
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import { createRenderer } from 'react-addons-test-utils';
import App from 'containers/App';
import store from 'store';

describe('App', function() {
  let node;
  beforeEach(function() {
    node = document.createElement('div');
  });

  afterEach(function() {
    unmountComponentAtNode(node);
  });

  it('can show App', function(done) {
    const shallowRenderer = createRenderer();
    const renderAppShallow = () => {
      shallowRenderer.render((
        <Provider store={store}>
          <App/>
        </Provider>
      ));
      return shallowRenderer.getRenderOutput();
    };

    const app = renderAppShallow();
    expect(app.type.WrappedComponent.name).toEqual('App');
    done();
  });

  it('renders App div', function(done) {
    const app = render((
      <Provider store={store}>
        <App/>
      </Provider>
    ), node);

    const appDom = findDOMNode(app);
    expect(appDom.className).toEqual('viewport');
    done();
  });
});
