import React, { Component } from 'react';

const generateRandomClip = (height) => {
  const height1 = Math.floor(Math.random() * height);
  const height2 = Math.floor(Math.random() * height);
  return `rect(${height1}px, 9999px, ${height2}px, 0px)`;
};

class Glitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerWidth: 0,
      containerHeight: 0,
      current: 0,
      steps: 30,
      opacity: 1,
      animation: "start"
    };
  }

  componentDidMount() {
    this.animation = window.setInterval(() => {
      if (this.props.start) {
        const { current, opacity, animation } = this.state;
        let newState;
        switch (animation) {
          case ("start"):
            newState = { current: current + 1 }
            if (newState.current >= 20) {
              newState.animation = "out";
            }
            return this.setState(newState);
          case ("out"):
            newState = { current: current + 1, opacity: opacity - 0.1 };
            if (newState.opacity <= 0.3) {
              this.props.onTransition();
              newState.animation = "in";
            }
            return this.setState(newState);
          case ("in"):
            newState = { current: current + 1, opacity: opacity + 0.1 };
            if (newState.opacity >= 1) {
              newState.animation = "end";
            }
            return this.setState(newState);
          case ("end"):
            newState = { current: 0, opacity: 1, animation: "start" };
            this.props.onEnd();
            return this.setState(newState);
          default:
            return;
        }
      } else if (!this.props.start && this.state.animation === "end") {
        const newState = { current: 0, opacity: 1, animation: "start" };
        return this.setState(newState);
      }
    }, 2500 / this.state.steps);

    const { containerId } = this.props;
    const glitchContainer = document.getElementById(containerId);
    this.setState({
      containerWidth: glitchContainer.offsetWidth,
      containerHeight: glitchContainer.offsetHeight
    });

    window.addEventListener('resize', () => {
      this.setState({
        containerWidth: glitchContainer.offsetWidth,
        containerHeight: glitchContainer.offsetHeight
      });
    });
  }

  componentWillUnmount() {
    clearInterval(this.animation);
  }

  generateProps = (element, extra = {}) => {
    const { containerWidth, containerHeight } = this.state;
    const { variantClassName, glitchType } = this.props;

    let style = {
      width: containerWidth,
      height: containerHeight,
      clip: generateRandomClip(containerHeight)
    };
    style = Object.assign(style, extra);

    return {
      key: element,
      className: `${variantClassName} ${glitchType}`,
      style
    };
  }

  render() {
    const {
      containerId,
      containerClassName,
      variant,
      variantClassName,
      data,
      start
    } = this.props;
    const glitchElements = [0, 1, 2];

    return (
      <div id={containerId} className={`${containerClassName} translate`} style={{ opacity: this.state.opacity }}>
        {glitchElements.map(element => {
          if (element < glitchElements.length - 1) {
            return (start) ? React.createElement(variant, this.generateProps(element, data.style), data.content) : null;
          }
          return React.createElement(variant, { key: element, className: variantClassName, style: data.style }, data.content);
        })}
      </div>
    );


  }
}

export default Glitch;