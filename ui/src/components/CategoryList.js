import React from "react";
import { Query } from "react-apollo";
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
import { lotQuery } from "../gql";
import Layout from "../views";

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

class LotCard extends React.Component {
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
        params: { id }
      }
    } = this.props;

    const cols = [
      "id",
      "name",
      "price",
      "reserve",
      "qty",
      "increment",
      "status",
      "size",
      "grade",
      "height",
      "gender",
      "user"
    ];

    return (
      <Layout>
        <Query
          query={lotQuery}
          variables={{
            id
          }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error</p>;

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
                    {data.Lot.map(n => {
                      let mapData = [
                        n.id,
                        n.name,
                        n.price,
                        n.reserve,
                        n.qty,
                        n.increment,
                        n.status,
                        n.size.name,
                        n.grade.name,
                        n.height.name,
                        n.gender.name,
                        n.user.name
                      ];

                      return (
                        <TableRow
                          onClick={() =>
                            this.props.history.push(
                              `/l/${n.name.replace(/\s/g, "-")}/${n.id}`
                            )
                          }
                          hover
                          key={n.id}
                        >
                          {mapData.map((d, i) => (
                            <TableCell key={i} component="th" scope="row">
                              {d}
                            </TableCell>
                          ))}
                        </TableRow>
                      );
                    })}
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

export default withStyles(styles)(withRouter(LotCard));
