import React from 'react';
import './Headerbar.css';

class Headerbar extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div id="Headerbar">
					<nav className="navbar navbar-default" role="navigation">
						<div className="container-fluid">
							<div className="navbar-header">
								<a className="navbar-brand" href="#">Kugou Music</a>
							</div>
							<div id="left-nav">
								<ul className="nav navbar-nav">
									<li className="active"><a href="#">shouye</a></li>
									<li><a href="#">bangdan</a></li>
									<li><a href="#">xiazaikehuduan</a></li>
									<li className="dropdown">
										<a href="#" className="dropdown-toggle" data-toggle="dropdown">gengduo<b className="caret"></b></a>
										<ul className="dropdown-menu">
											<li><a href="#">diantai</a></li>
											<li><a href="#">MV</a></li>
											<li><a href="#">gedan</a></li>
											<li><a href="#">geshou</a></li>
										</ul>
									</li>
								</ul>
							</div>
							<div id="right-nav">
								<ul className="nav navbar-nav">
									<li><a href="#">yingyuezhibo</a></li>
									<li><a href="#">kugou LIVE</a></li>
									<li><a href="#">yingyueren</a></li>
									<li><a href="#">youxi</a></li>
									<li><a href="#">shangcheng</a></li>
								</ul>
							</div>
						</div>
					</nav>
				</div>

			);
	}

};

export default Headerbar;