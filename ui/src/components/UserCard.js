import React from "react";
import { withRouter } from "react-router-dom";
import "../styles/UserList.css";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Paper,
  TableSortLabel
} from "@material-ui/core";
import Layout from "../views";

import { Query } from "react-apollo";
import { userQuery } from "../gql";

const styles = theme => ({
  root: {
    maxWidth: 700,
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    margin: "auto"
  },
  table: {
    minWidth: 700
  }
});

class UserCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: "asc",
      orderBy: "name",
      page: 0,
      rowsPerPage: 10
    };
  }

  handleSortRequest = property => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  render() {
    const { order, orderBy } = this.state;

    const {
      match: {
        params: { name }
      }
    } = this.props;

    const cols = [
      "id",
      "name",
      "first",
      "last",
      "email",
      "username",
      "phone",
      "dob",
      "street",
      "state",
      "country",
      "lots"
    ];

    return (
      <Layout>
        <Query
          query={userQuery}
          variables={{
            name
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

            const mapData = [
              data.User[0].id,
              data.User[0].name,
              data.User[0].last,
              data.User[0].email,
              data.User[0].username,
              data.User[0].phone,
              data.User[0].dob.formatted,
              data.User[0].street
              // data.User[0].state.name,
              // data.User[0].country.name,
            ];

            return (
              <Paper className={this.props.classes.root}>
                <Table className={this.props.classes.table}>
                  <TableHead>
                    <TableRow>
                      {cols.map(col => (
                        <TableCell
                          key={col}
                          sortDirection={orderBy === col ? order : false}
                        >
                          <Tooltip
                            title="Sort"
                            placement="bottom-start"
                            enterDelay={300}
                          >
                            <TableSortLabel
                              active={orderBy === col}
                              direction={order}
                              onClick={() => this.handleSortRequest(col)}
                            >
                              {col}
                            </TableSortLabel>
                          </Tooltip>
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow
                      onClick={() =>
                        this.props.history.push(`/u/${data.User[0].name}`)
                      }
                      hover
                      key={data.User.id}
                    >
                      {mapData.map((d, i) => (
                        <TableCell key={i} component="th" scope="row">
                          {d}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableBody>
                </Table>
              </Paper>
            );
          }}
        </Query>
      </Layout>
    );
  }
}

export default withStyles(styles)(withRouter(UserCard));
