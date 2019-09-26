import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { TextField } from 'formik-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import RVTwo from '../../images/rv2.jpg';
import DatePicker from 'react-datepicker';

class Thumb extends React.Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (<img src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200} />);
  }
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="/">
        RVNB
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${RVTwo})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function ListingForm({ values, isSubmitting }) {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create a listing for your land:
          </Typography>
          <Form>
            <Field
              type="address"
              name="address"
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="address"
              label="Address"
              autoComplete="address"
            />

            {/* <input type="search" id="address-input" placeholder="Where is your land?" />
            <script src="https://cdn.jsdelivr.net/npm/places.js@1.16.4"></script>
            <script>
              let placesAutocomplete = places({
                appId: 'plJ75MNPMJT3',
                apiKey: '4e7965c9d17f6cc833e88ff6dae083f0',
                container: document.querySelector('#address-input')
              });
            </script> */}

            <Field
              type="zipCode"
              name="zipCode"
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="zipCode"
              label="Zip Code"
              autoComplete="zipCode"
            />
            <Field
              type="pricePerNight"
              name="pricePerNight"
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="pricePerNight"
              label="Price Per Night"
              autoComplete="pricePerNight"
            />
            <Field
                name="description"
                type="description"
                label="Description"
                component={TextField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="description"
                autoComplete="description"
              />
            {/* <Field
              type="startDate"
              name="startDate"
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="startDate"
              label="Start Date"
              autoComplete="startDate"
            /> */}

            <form>Start Date: 
              <input type='date' name='Start Date'></input>
            </form>

            <form>End Date: 
              <input type='date' name='End Date'></input>
            </form>

            {/* () => {
              const [startDate, setStartDate] = useState(new Date());
              return (
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
              );
            }; */}

            <div className="container">
              <Formik 
                initialValues={{ file: null }}
                onSubmit={(values) => {
                  alert(
                    JSON.stringify(
                      { 
                        fileName: values.file.name, 
                        type: values.file.type,
                        size: `${values.file.size} bytes`
                      },
                      null,
                      2
                    )
                  );
                }} 
                validationSchema={Yup.object().shape({
                  file: Yup.mixed().required(),
                })}
                render={({ values, handleSubmit, setFieldValue }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label for="file">Upload a picture of your land: </label>
                        <input id="file" name="file" type="file" onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                        }} className="form-control" />
                        <Thumb file={values.file} />
                      </div>
                      <button type="submit" className="btn btn-primary">submit</button>
                    </form>
                  );
                }} />
            </div>

            <Button 
              disabled={isSubmitting}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Post Listing
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Form>
        </div>
      </Grid>
    </Grid>
  );
}

export default withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || "",
    };
  },

  handleSubmit(values, { resetForm, setSubmitting }) {
    resetForm();
    setSubmitting(false);
  }

})(ListingForm);