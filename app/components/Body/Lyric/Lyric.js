import React from 'react';
import './Lyric.css';

class Lyric extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="lyric" className="">
				<div className="col-xs-12 lyric_title">zhuiguangzhe</div>
				<div className="row">
					<div className="col-xs-6">zhuanji:</div>
					<div className="col-xs-6">geshou</div>
				</div>
				<div className="row">
					<div className="col-xs-12">lyric goes here</div>
				</div>
			</div>
		)
	}
}

export default Lyric