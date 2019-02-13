import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Mutation, Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import moment from "moment";
import {
  CircularProgress,
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  TextField,
  withStyles
} from "@material-ui/core";
import Layout from "../views";

import { addLot, categoryQuery, categoriesQuery } from "../gql";

const styles = theme => ({
  root: {
    maxWidth: 700,
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    margin: "auto"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  },
  formControl: {
    // margin: theme.spacing.unit,
    // minWidth: 120,
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class LotAddForm extends React.Component {
  state = {
    category: "ace3b78f-a352-451a-813e-99baa186328e",
    grades: "cdc6850f-f8b8-425d-bb36-eab27986f9e0",
    genders: "f16798fb-895d-4786-9c01-6fb60ef5debc",
    heights: "3724ccc3-5e53-4c7b-b6b9-c676c859f603",
    increment: 5,
    name: "Cat in the Hat",
    percs: "55e03de7-326e-4b25-adb9-20a47de6cb50",
    price: 20,
    qty: 1,
    reserve: 20,
    sizes: "31fdb532-b77c-4b11-8808-40aa43b21392",
    specials: [
      "2d668a00-79f4-49bd-9b1c-5cce7fbbbad3",
      "e9a5ab80-af52-4f1f-bc6c-321ab4627542"
    ],
    styles: [
      "1cfd4367-3e06-4262-a899-9335f4d4b44e",
      "09181ba3-363c-47cc-aa3f-03017871fa82"
    ],
    themes: [
      "c53314b6-9a92-4680-809c-93c454dd77a9",
      "26c0d01b-2d44-422c-b3d8-58824be2d384"
    ],
    text: "this is some text",
    types: "ef03765c-6b0f-4333-91d7-975441565cfa",
    user: "fdcdea37-f0aa-499a-a4d6-d90210cf20ac"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangeDate = name => event => {
    // Check for invalid
    this.setState({
      [name]: moment(event.target.value)
        .format()
        .substring(0, 16)
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Layout>
        <Mutation mutation={addLot} refetchQueries={[`lotsPaginateQuery`]}>
          {(addLot, { loading, error, data }) => {
            if (loading)
              return (
                <Paper className={this.props.classes.root}>
                  <CircularProgress className={classes.progress} />
                </Paper>
              );

            return (
              <Paper className={this.props.classes.root}>
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                  onSubmit={e => {
                    e.preventDefault();
                    // add client-side verification before lot creation
                    addLot({
                      variables: {
                        id: ((a, b) => {
                          for (
                            b = a = "";
                            a++ < 36;
                            b +=
                              (a * 51) & 52
                                ? (a ^ 15
                                    ? 8 ^ (Math.random() * (a ^ 20 ? 16 : 4))
                                    : 4
                                  ).toString(16)
                                : "-"
                          );
                          return b;
                        })(),
                        category: this.state.category,
                        grade: this.state.grades,
                        gender: this.state.genders,
                        height: this.state.heights,
                        increment: this.state.increment,
                        name: this.state.name,
                        perc: this.state.percs,
                        price: this.state.price,
                        qty: this.state.qty,
                        reserve: this.state.reserve,
                        size: this.state.sizes,
                        specials: this.state.specials,
                        styles: this.state.styles,
                        themes: this.state.themes,
                        text: this.state.text,
                        type: this.state.types,
                        user: this.state.user
                      }
                    })
                      .then(res => {
                        // reset state now
                        console.log(res);
                        this.props.history.push(
                          `/l/${res.data.addLot.name.replace(/\s/g, "-")}/${
                            res.data.addLot.id
                          }`
                        );
                      })
                      .catch(e => {
                        // display error message
                        console.error(e);
                      });
                  }}
                >
                  <FormControl className={classes.formControl}>
                    <FormControl className={classes.formControl}>
                      <InputLabel>Select a lot type</InputLabel>

                      <Select
                        value={this.state.types}
                        onChange={this.handleChange("types")}
                      >
                        <MenuItem value={""} />
                        <MenuItem
                          value={"ef03765c-6b0f-4333-91d7-975441565cfa"}
                        >
                          Auction
                        </MenuItem>
                        <MenuItem
                          value={"17611e07-e2c4-4ff8-9d37-9b55d579e2e0"}
                        >
                          Sell
                        </MenuItem>
                      </Select>
                    </FormControl>

                    {this.state.types && (
                      <FormControl className={classes.formControl}>
                        <TextField
                          id="standard-name"
                          label="Name"
                          className={classes.textField}
                          value={this.state.name}
                          onChange={this.handleChange("name")}
                        />

                        <TextField
                          id="standard-name"
                          label="Description"
                          className={classes.textField}
                          value={this.state.text}
                          onChange={this.handleChange("text")}
                        />

                        <FormControl className={classes.formControl}>
                          <InputLabel>Quantity</InputLabel>

                          <Select
                            value={this.state.qty}
                            onChange={this.handleChange("qty")}
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                              <MenuItem key={i} value={i}>
                                {i}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>

                        <TextField
                          id="standard-name"
                          label="price"
                          className={classes.textField}
                          value={this.state.price}
                          onChange={this.handleChange("price")}
                        />

                        {this.state.types === "Auction" && (
                          <TextField
                            id="standard-name"
                            label="Reserve"
                            className={classes.textField}
                            value={this.state.reserve}
                            onChange={this.handleChange("reserve")}
                          />
                        )}

                        <TextField
                          id="datetime-local"
                          label="Start"
                          type="datetime-local"
                          defaultValue={moment()
                            .format()
                            .substring(0, 16)}
                          className={classes.textField}
                          onChange={this.handleChangeDate("start")}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      </FormControl>
                    )}
                  </FormControl>

                  <FormControl className={classes.formControl}>
                    {this.state.types && (
                      <Query query={categoriesQuery}>
                        {({ loading, error, data }) => {
                          if (loading)
                            return (
                              <CircularProgress className={classes.progress} />
                            );
                          if (error) return <p>Error</p>;

                          return (
                            <FormControl className={classes.formControl}>
                              <InputLabel>What are you posting?</InputLabel>

                              <Select
                                value={this.state.category}
                                onChange={this.handleChange("category")}
                              >
                                <MenuItem value="" />
                                {data.Category.map(cat => (
                                  <MenuItem key={cat.id} value={cat.id}>
                                    {cat.name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          );
                        }}
                      </Query>
                    )}

                    {this.state.types && this.state.category && (
                      <Query
                        query={categoryQuery}
                        variables={{
                          id: this.state.category
                        }}
                      >
                        {({ loading, error, data }) => {
                          if (loading)
                            return (
                              <CircularProgress className={classes.progress} />
                            );
                          if (error || !data.Category[0]) return <p>Error</p>;

                          return Object.entries(data.Category[0]).map(data => {
                            let field = data[0];
                            let options = data[1];
                            if (options.length === 0) return null;
                            if (field !== "__typename") {
                              if (
                                field === "themes" ||
                                field === "specials" ||
                                field === "styles"
                              ) {
                                return (
                                  <FormControl
                                    key={field}
                                    className={classes.formControl}
                                  >
                                    <InputLabel>{field}</InputLabel>

                                    <Select
                                      value={this.state[field]}
                                      onChange={this.handleChange(field)}
                                      multiple
                                      renderValue={selected =>
                                        selected
                                          .map(
                                            s =>
                                              options.find(o => o.id === s).name
                                          )
                                          .join(", ")
                                      }
                                    >
                                      {options.map(data => (
                                        <MenuItem key={data.id} value={data.id}>
                                          <Checkbox
                                            checked={
                                              this.state[field].indexOf(
                                                data.id
                                              ) > -1
                                            }
                                          />
                                          <ListItemText primary={data.name} />
                                        </MenuItem>
                                      ))}
                                    </Select>
                                  </FormControl>
                                );
                              }

                              return (
                                <FormControl
                                  key={field}
                                  className={classes.formControl}
                                >
                                  <InputLabel>{field}</InputLabel>

                                  <Select
                                    value={this.state[field]}
                                    onChange={this.handleChange(field)}
                                    renderValue={s =>
                                      options.find(o => o.id === s).name
                                    }
                                  >
                                    {options.map(data => (
                                      <MenuItem key={data.id} value={data.id}>
                                        <Checkbox
                                          checked={
                                            this.state[field] === data.id
                                          }
                                        />
                                        <ListItemText primary={data.name} />
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                              );
                            }
                            return null;
                          });
                        }}
                      </Query>
                    )}
                  </FormControl>

                  <button type="submit">SUBMIT</button>
                </form>
              </Paper>
            );
          }}
        </Mutation>
      </Layout>
    );
  }
}

LotAddForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(LotAddForm));
