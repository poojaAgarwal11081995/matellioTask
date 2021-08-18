import React from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button, Table, TableBody } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea"
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  root2: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));
const TypograpyItem = (props) => {

  return (
    <Typography variant="body2" color="textSecondary" component="p">
      {props.value}
    </Typography>
  );
};
function Photolistdetails(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableBody>
          <Grid container spacing={3}>
              {props.photolist.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
                return (
                  <Grid item xs={4} key={item.id}>
                    <Card className={classes.root2}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={item.thumbnailUrl}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <TypograpyItem value={item.title} />
                          <TypograpyItem value={item.id} />
                          <TypograpyItem value={item.url} />
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          onClick={
                            props.compareTable.findIndex((i) => i.id === item.id) === -1
                              ? () =>
                                props.addItemInCompareTable(
                                  item.id,
                                  item.url,
                                  item.title,
                                  item.thumbnailUrl
                                )
                              : () => props.removeData(item.id)
                          }
                        >
                          {props.compareTable.findIndex((i) => i.id === item.id) === -1
                            ? "Compare"
                            : "Remove"}
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>



          </TableBody>


        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 10, 25, 100]}
        component="div"
        count={props.photolist.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>


  )
}

export default Photolistdetails;
