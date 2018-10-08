import { Component } from 'react';
import PropTypes from 'prop-types';

class Tabber extends Component {
  constructor(props) {
    super(props);

    const { activeTab, keys } = this.props;
    this.state = { currentTab: activeTab || keys[0] };
  }

  setTab = key => {
    if (this.props.keys.includes(key)) {
      this.setState({
        currentTab: key,
      });
    }
  };

  getVisibility = key => {
    return this.state.currentTab == key;
  };

  getCurrentTab = () => {
    return this.state.currentTab;
  };

  render() {
    return this.props.children({
      currentTab: this.state.currentTab,
      getVisibility: this.getVisibility,
      setTab: this.setTab,
    });
  }
}

Tabber.propTypes = {
  children: PropTypes.func.isRequired,
  keys: PropTypes.array.isRequired,
  activeTab: PropTypes.string,
};

export { Tabber };
