import React, { Component } from 'react';
import './Progress.scss';

class ProgressBar extends Component {
  state = {
    totalLength: 0,
    percentage: 0,
  };

  componentDidMount() {
    const progressBar = this.progressBarRef;
    const totalLength = progressBar.getTotalLength();
    this.setState({ totalLength });

    this.setTopValue();
    progressBar.style.strokeDasharray = totalLength;
    progressBar.style.strokeDashoffset = totalLength;

    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.setTopValue);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.setTopValue);
  }

  setTopValue = () => {
    const svg = this.svgRef;
    svg.style.top =
      document.documentElement.clientHeight * 0.5 -
      (svg.getBoundingClientRect().height * 0.5) +
      'px';
  };

  handleScroll = () => {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;

    const percentage = scrollTop / (scrollHeight - clientHeight);
    this.setState({ percentage });

  };

  render() {
    const { percentage, completed, totalLength } = this.state;
    const innerCircleRadius = 40;
    const innerCircleCircumference = 2 * Math.PI * innerCircleRadius;
    const innerCircleOffset = innerCircleCircumference - totalLength * percentage;

    return (
      <div className='progress-container'>
        <svg
          ref={(ref) => (this.svgRef = ref)}
          className="complete"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad">
              <stop offset="0%" stopColor="#1952d3" />
              <stop offset="100%" stopColor="#1952d3" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" />
          <circle
            ref={(ref) => (this.progressBarRef = ref)}
            className="progress-bar"
            cx="50"
            cy="50"
            r={innerCircleRadius}
            style={{
              stroke: `url(#grad)`,
              transition: `stroke-dashoffset 0.2s ease-in-out`,
              strokeDasharray: innerCircleCircumference,
              strokeDashoffset: innerCircleOffset,
              filter: `drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.2))`,
            }}
          />
        </svg>
      </div>
    );
  }
}

export default ProgressBar;
