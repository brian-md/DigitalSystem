import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { TwoColumn, ButtonWrapper, SingleColumn } from './ContactForm.css';
import { Button } from 'components';
import { ContactContainer } from 'containers';

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

const ContactForm = ({ classes, twoColumn, id, industries }) => {
  const FormWrapper = twoColumn ? TwoColumn : SingleColumn;

  return (
    <ContactContainer>
      {({ handleChange, handleSubmit, form, validationErrors }) => (
        <FormWrapper
          onSubmit={handleSubmit}
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="sales-inquiry"
        >
          <TextField
            id={id ? `${id}-name` : undefined}
            required
            label="Name"
            className={classes.textField}
            name="name"
            value={form.name}
            onChange={handleChange('name')}
            error={validationErrors.name.length !== 0}
            helperText={validationErrors.name}
            margin="normal"
          />
          <TextField
            required
            label="Email"
            id={id ? `${id}-email` : undefined}
            type="email"
            className={classes.textField}
            name="email"
            value={form.email}
            onChange={handleChange('email')}
            error={validationErrors.email.length !== 0}
            helperText={validationErrors.email}
            margin="normal"
          />
          <TextField
            required
            label="Phone Number"
            type="tel"
            id={id ? `${id}-tel` : undefined}
            className={classes.textField}
            name="phone"
            value={form.phone}
            onChange={handleChange('phone')}
            error={validationErrors.phone.length !== 0}
            helperText={validationErrors.phone}
            margin="normal"
          />
          <TextField
            required
            select
            id={id ? `${id}-jobtype` : undefined}
            label="Job Type"
            className={classes.textField}
            name="industry"
            value={form.industry}
            onChange={handleChange('industry')}
            error={validationErrors.industry.length !== 0}
            helperText={validationErrors.industry}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
          >
            {industries.map(industry => {
              const {
                node: {
                  uid,
                  data: {
                    industry_name: { text: industry_name },
                  },
                },
              } = industry;
              return (
                <MenuItem key={uid} value={uid}>
                  {industry_name}
                </MenuItem>
              );
            })}
          </TextField>
          <input type="hidden" name="sales-inquiry" value="contact" />
          <p hidden>
            <label htmlFor="bot-field">
              Don’t fill this out:{' '}
              <input name="bot-field" onChange={handleChange('botField')} />
            </label>
          </p>

          <ButtonWrapper>
            <Button primary type="submit" size="large">
              Get Started
            </Button>
            <p className="privacy">Digital Systems respects your privacy.</p>
          </ButtonWrapper>
        </FormWrapper>
      )}
    </ContactContainer>
  );
};

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  twoColumn: PropTypes.bool,
  id: PropTypes.string,
  industries: PropTypes.array.isRequired,
};

const ContactFormWithData = props => (
  <StaticQuery
    query={graphql`
      query ContactFormQuery {
        allPrismicIndustry(sort: { fields: [data___order], order: ASC }) {
          edges {
            node {
              uid
              data {
                industry_name {
                  text
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ContactForm {...props} industries={data.allPrismicIndustry.edges} />
    )}
  />
);

const ContactFormWithStyles = withStyles(styles)(ContactFormWithData);

export { ContactFormWithStyles as ContactForm };
