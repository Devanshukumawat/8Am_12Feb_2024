import { Button, ButtonGroup, Fab, IconButton, Typography } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Muitest() {
  return (
    <>
      <h1>Mui Comp</h1>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AbcIcon />}
        endIcon={<AddCircleIcon />}
      >
        Test
      </Button>

      <IconButton color="error">
        <AbcIcon />
      </IconButton>

      <ButtonGroup variant="outlined">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

        <Fab color="error">
            <AbcIcon color="success"/>
        </Fab>

        <Typography variant="h6">
            Hello class
        </Typography>

    </>
  );
}

export default Muitest;
