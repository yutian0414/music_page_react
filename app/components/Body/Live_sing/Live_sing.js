import React from 'react';
import './Live_sing.css';
import singer_image from './singer.jpg'

class Liv_sing extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div id="Live_sing" className="row">
					<div id="Live_singer" className="col-xs-4">
						<img src={singer_image}/>
					</div>
					<div id="Live_sing_refer" className="col-xs-8">
						<div className="row">
							<div className="col-xs-8">
								<div id="Live_singer_name">meiyingshuier</div>
								<div id="Live_music_name">zhuiguangzhe</div>
							</div>
							<div className="col-xs-4">
								<a src="#">quxianchang ></a>
							</div>
						</div>
					</div>
				</div>
			)
	}
}

export default Liv_sing