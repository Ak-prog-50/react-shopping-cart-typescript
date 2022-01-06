import Grid from '@mui/material/Grid';
import SelectType from './SelectType';
import SelectSize from './SelectSize';

const Filters = () => {
    return (
      <Grid container spacing={2}>
      <Grid item xs={6}>
        <SelectSize />
      </Grid>
      <Grid item xs={6}>
        <SelectType />
        </Grid>
    </Grid>
    )
}

export default Filters;