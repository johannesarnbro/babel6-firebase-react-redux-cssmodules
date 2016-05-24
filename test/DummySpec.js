import assert from 'assert';
import React from 'react/addons';
import Dummy from '../sourcecode/components/Dummy/Dummy.js';

describe('The Dummy component', function () {
  const TestUtils = React.addons.TestUtils;
  const shallowRenderer = TestUtils.createRenderer();
  describe('when no props are given', function () {
    shallowRenderer.render(<Dummy />);
    const render = shallowRenderer.getRenderOutput();
    it('should render a blank state.', function () {
      assert.equal(undefined, render.props.children[0].props.children);
      assert.equal(undefined, render.props.children[1].props.children);
    });
  });

  describe('when props are given', function () {
    shallowRenderer.render(<Dummy one={'one'} two={'two'}/>);
    const render = shallowRenderer.getRenderOutput();
    it('should render props.', function () {
      assert.equal('one', render.props.children[0].props.children);
      assert.equal('two', render.props.children[1].props.children);
    });
  });

});
