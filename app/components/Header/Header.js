import React from "react";
import './Header.css'
import logo from './logo.png'


class Header extends React.Component{
	constructor(props){
		super(props);
		this.state={
			searchvalue:'',
		};
	}

	render(){
		return(
				<div id="Header" className="container">
					<div className="row">
						<div className="col-xs-2"></div>
						<div id="log_image" className='col-xs-3'><img src={ logo }></img></div>
						<div id="search" className="col-xs-3">
							<form className="bs-example bs-example-form" role="form">
								<div className="row">
									<div className="input-group col-xs-12">
										<input type="search" name="search" className="form-control"></input>
										<span className="input-group-btn">
											<button className="btn btn-default" type="button">Search</button>
										</span>
									</div>
								</div>
							</form>
							
						</div>
						<div id="user_info" className="col-xs-4">
							<div className='row'>
								<div className="col-xs-6">userprofile|login</div>
								<div className="col-xs-6">username|logout</div>
							</div>
						</div>
					</div>

				</div>
			);
	}
};

export default Header;