import React from "react";
import { Grid, Box, Container, Typography } from "@mui/material";

function App() {
	return (
		<Grid
			container
			direction="row"
			justifyContent="center"
			sx={{ backgroundColor: "background.secondary" }}
		>
			<Box
				sx={{
					backgroundColor: "background.primary",
					margin: 3,
					width: "40%",
				}}
			>
				<h1>testing 1</h1>
			</Box>

			<Grid
        container
				alignItems="center"
				justifyContent="space-around"
				direction="row"
				sx={{
					backgroundColor: "background.tertiary",
					margin: 3,
					width: "40%",
				}}
			>
				<h1>testing</h1>
        <h1>testing</h1>
			</Grid>
		</Grid>
	);
}

export default App;
