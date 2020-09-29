import React, {FunctionComponent} from "react";
import Home from "Home/Home";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core";

const theme = responsiveFontSizes(createMuiTheme());

/**
 * The main app container.
 * @constructor
 */
export const App: FunctionComponent = (): JSX.Element =>
{
	return (
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Home />
			</ThemeProvider>
		</React.StrictMode>
	);
};

export default App;