import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { TwoColumn, ButtonWrapper, SingleColumn } from './ContactForm.css';
import { Button } from 'components';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

class ContactForm extends Component {
  state = { name: '', phone: '', email: '', industry: '' };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': form.getAttribute('name'), ...this.state }),
    })
      .then(() => alert('Success!!'))
      .catch(error => alert(error));
  };

  render() {
    const { classes, twoColumn } = this.props;
    const FormWrapper = twoColumn ? TwoColumn : SingleColumn;

    return (
      <FormWrapper
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        name="sales-inquiry"
      >
        <TextField
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          label="Email"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          margin="normal"
        />
        <TextField
          label="Phone Number"
          className={classes.textField}
          value={this.state.phone}
          onChange={this.handleChange('phone')}
          margin="normal"
        />
        <TextField
          select
          label="Job Type"
          className={classes.textField}
          value={this.state.industry}
          onChange={this.handleChange('industry')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {[
            { value: 'residential', label: 'Residential' },
            { value: 'commercial', label: 'Commercial' },
          ].map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <input type="hidden" name="sales-inquiry" value="contact" />

        <ButtonWrapper>
          <Button primary type="submit" size="large">
            Get Started
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    );
  }
  static propTypes = {
    classes: PropTypes.object.isRequired,
    twoColumn: PropTypes.bool,
  };
}

const ContactFormWithStyles = withStyles(styles)(ContactForm);

export { ContactFormWithStyles as ContactForm };
