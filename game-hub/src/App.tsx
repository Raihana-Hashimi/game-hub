import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="black">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="orange">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="purple">
        Nav
      </GridItem>
    </Grid>
  );
}

export default App;
