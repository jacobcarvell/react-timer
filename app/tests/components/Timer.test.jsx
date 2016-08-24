var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });

  it('Should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);
    timer.handleStatusChange('started');

    expect(timer.state.count).toBe(0);

    setTimeout(() => {
      expect(timer.state.count).toBe(1);
      expect(timer.state.countDownStatus).toBe('started');
      done();
    }, 1001);
  });

  it('Should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(() => {
      expect(timer.state.count).toBe(10);
      expect(timer.state.countDownStatus).toBe('paused');
      done();
    }, 1001);
  });

  it('Should clear timer on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />);

    timer.setState({count: 10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      expect(timer.state.count).toBe(0);
      expect(timer.state.countDownStatus).toBe('stopped');
      done();
    }, 1001);
  });
});
