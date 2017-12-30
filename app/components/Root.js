import React from "react";
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import Headerbar from './Headerbar/Headerbar';
import './Root.css'
class Root extends React.Component{
	constructor(props){
		super(props);
	}

		render(){
			return(
					<div id="Root">
						<Header></Header>
						<Headerbar></Headerbar>
						<Body></Body>
						<Footer></Footer>
					</div>
				);
		}
};

export default Root;