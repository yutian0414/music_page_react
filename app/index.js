import React from 'react';
import { render } from "react-dom";
import  Root  from './components/Root';
import { AppContainer } from 'react-hot-loader'
import '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'

render(
		<AppContainer>
			<Root></Root>
		</AppContainer>,

		document.getElementById("root")

	);
if (module.hot){
	module.hot.accept('./components/Root',()=>{
		const NewRoot=require("./components/Root").default;
		render(
			<AppContainer>
				<NewRoot />
			</AppContainer>,
			document.getElementById('root')
			);
	})
}