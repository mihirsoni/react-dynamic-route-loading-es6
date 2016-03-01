import expect from 'expect';
import { createRenderer } from 'react-addons-test-utils';

import { Provider } from 'react-redux';
// import { render } from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';
import { routeActions } from 'react-router-redux';

import store from 'store';
import rootRoute from 'pages/routes';

window.routeActions = routeActions;
window.store = store;

function EntryPoint() {
  return (
    <Provider store={store}>
     <Router history={browserHistory} routes={rootRoute} />
    </Provider>
  );
}

describe('Routing', () => {
  it('lists all the routes', (done) => {
    const shallowRenderer = createRenderer();
    const renderAppShallow = () => {
      shallowRenderer.render((
        <EntryPoint />
      ));
      return shallowRenderer.getRenderOutput();
    };

    const app = renderAppShallow();
    const { childRoutes } = app.props.children.props.routes;
    expect(childRoutes.length).toBeGreaterThan(0);
    done();
  });

  it('navigates to /women', (done) => {
    const shallowRenderer = createRenderer();
    const renderAppShallow = () => {
      shallowRenderer.render((
        <EntryPoint />
      ));
      return shallowRenderer.getRenderOutput();
    };

    renderAppShallow();
    store.dispatch(routeActions.push('/women'));
    const { pathname } = store.getState().routing.location;
    expect(pathname).toBe('/women');
    done();
  });
});
