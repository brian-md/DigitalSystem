import { Component } from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby';

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactContainer extends Component {
  state = {
    form: { name: '', phone: '', email: '', industry: '', botField: '' },
    validationErrors: { name: '', phone: '', email: '', industry: '' },
  };

  handleChange = name => event => {
    const value = event.target.value;
    this.setState(prevState => ({
      form: { ...prevState.form, [name]: value },
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      const form = e.target;
      fetch('/?no-cache=1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state.form,
        }),
      })
        .then(() => navigateTo('/thank-you'))
        .catch(error => alert(error));
    }
  };

  validate = () => {
    let isError = false;
    const errors = { name: '', phone: '', email: '', industry: '' };
    const { form } = this.state;
    if (form.name.length < 3) {
      isError = true;
      errors.name = 'Name must be at least three characters long.';
    }
    if (form.phone.length < 10) {
      isError = true;
      errors.phone = 'Please enter a valid phone number.';
    }
    if (form.industry.length === 0) {
      isError = true;
      errors.industry = 'Please enter a job type.';
    }
    this.setState({ validationErrors: { ...errors } });
    return isError;
  };

  render() {
    return this.props.children({
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      form: this.state.form,
      validationErrors: this.state.validationErrors,
    });
  }
  static propTypes = {
    children: PropTypes.func.isRequired,
  };
}

export { ContactContainer };
