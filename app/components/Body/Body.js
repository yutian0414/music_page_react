import React from 'react';
import './Body.css';
import Lyric from './Lyric/Lyric'
import Image_refer from './Image_refer/Image_refer'
import Liv_sing from './Live_sing/Live_sing'

class Body extends React.Component{
	constructor(props){
		super(props);
	}
		render(){
			return(
					<div id="Body" className="container-fluid">
						<div className="row">
							<div className="col-xs-6 left_area">
								<Image_refer></Image_refer>
								<Liv_sing></Liv_sing>
							</div>
							<div className="col-xs-6 right_area">
								<Lyric></Lyric>
							</div>
						</div>
					</div>
				);
		}
};

export default Body;
