import expect, { createSpy } from 'expect';
import React from 'react';

import { render, unmountComponentAtNode, findDOMNode } from 'react-dom';
import { createRenderer } from 'react-addons-test-utils';
import { TOGGLE_MENU, RECEIVE_MENU_SECTIONS, SELECT_MENU_SECTION } from 'actions/navigation';

import Menu from 'components/Menu/Menu';
import MenuButton from 'components/Menu/Button';
import MenuSection from 'components/Menu/MenuSection';
import MenuSectionButton from 'components/Menu/MenuSectionButton';
import navigationReducer from 'reducers/navigation';
import { menuSections } from 'data/menu.json';

describe('menu reducer', function() {

  it('should return the initial state', function(done) {
    expect(
      navigationReducer(undefined, {})
    ).toEqual({
      menu: { menuVisible: false, activeMenuSection: {}, menuSections: [] }
    });

    done();
  });

  it('should return the menuVisible true when the toggle menu action is fired', function(done) {
    expect(
      navigationReducer(undefined, {
        type: TOGGLE_MENU,
        menuVisible: true
      })
    ).toEqual({
      menu: { menuVisible: true, activeMenuSection: {}, menuSections: [] }
    });

    done();
  });

  it('should return first menu section as active when menu sections are loaded', function(done) {
    expect(
      navigationReducer(undefined, {
        type: RECEIVE_MENU_SECTIONS,
        menuSections
      })
    ).toEqual({
      menu: { menuVisible: false, activeMenuSection: menuSections[0], menuSections }
    });

    done();
  });

  it('should set the active menu section to the selected menu section', function(done) {
    expect(
      navigationReducer(undefined, {
        type: SELECT_MENU_SECTION,
        menuSection: menuSections[1]
      })
    ).toEqual({
      menu: { menuVisible: false, activeMenuSection: menuSections[1], menuSections: [] }
    });

    done();
  });

});

describe('menu button component', function () {

  const setup = props => {
    const renderer = createRenderer();
    renderer.render(<MenuButton {...props} />);
    const output = renderer.getRenderOutput();

    return { props, output, renderer };
  };

  it('should render correctly', function (done) {
    const { output } = setup({ menuVisible: false });
    expect(output.props.className).toBe('menu-button-container');
    done();
  });

  it('should add the proper classes when menuVisible is true', function(done) {
    const { output } = setup({ menuVisible: true });
    expect(output.props.className).toBe('menu-button-container menu-button-container-active');
    done();
  });

});

describe('menu component', function() {

  const setup = props => {
    const renderer = createRenderer();
    renderer.render(<Menu {...props} />);
    const output = renderer.getRenderOutput();

    return { props, output, renderer };
  };

  it('should render correctly', function(done) {
    const { output } = setup({ menuVisible: false, activeMenuSection: {}, menuSections: [] });
    expect(output.props.className).toBe('menu-container menu-visible-false');
    done();
  });

  it('should be visible when the menuVisible prop is true', function(done) {
    const { output } = setup({ menuVisible: true, activeMenuSection: {}, menuSections: [] });
    expect(output.props.className).toBe('menu-container menu-visible-true');
    done();
  });

});

describe('menu section button component', function() {

  const setup = props => {
    const softRenderer = createRenderer();
    softRenderer.render(<MenuSectionButton {...props} />);
    const output = softRenderer.getRenderOutput();

    return { props, output, softRenderer };
  };

  it('should render correctly', function(done) {
    const menuSection = menuSections[0];
    const { output } = setup({ menuSection, selectMenuSection: () => {} });
    expect(output.props.className).toContain(menuSection.color);
    expect(output.props.children).toBe(menuSection.title);

    done();
  });

  it('should call the selectMenuSection function when clicked', function(done) {
    const menuSection = menuSections[0];
    const selectMenuFunction = createSpy();
    const { output } = setup({ menuSection, selectMenuSection: selectMenuFunction });

    output.props.onClick();
    expect(selectMenuFunction).toHaveBeenCalled();

    done();
  });
});

describe('menu section component', function() {

  const setup = props => {
    const softRenderer = createRenderer();
    softRenderer.render(<MenuSection {...props} />);
    const output = softRenderer.getRenderOutput();

    return { props, output, softRenderer };
  };

  it('should render correctly', function(done) {
    const menuSection = menuSections[0];
    const { output } = setup({ menuSection });

    expect(output.props.className).toContain(menuSection.color);

    done();
  });
});
