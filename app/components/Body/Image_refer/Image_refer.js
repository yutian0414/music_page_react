import React from 'react';
import './Image_refer.css';
import image from "./image.jpg"

class Image_refer extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
				<div id="Image_refer">
					<div className="show_image">
						<img src={image} />
					</div>
					<div className="download_music">
						<button type="button" className="btn btn-primary btn-lg">dianjixiazai</button>
					</div>
				</div>
			)
	}
}

export default Image_refer