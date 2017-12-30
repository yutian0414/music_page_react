import React from 'react';

class Musiclist extends React.Component{
	constructor(props){
		super(props);
		this.state={
			hidden:'hidden'
		}
	}

componentWillReceiveProps(){
	if (this.props.hide=="hidden"){
		this.refs.music_list.setAttribute('hidden','hidden')
	}else(
		this.refs.music_list.removeAttribute('hidden')
		)
}


	render(){
		return(
			<div className="music_list" ref="music_list">
				<ul >	
					<li>this is the frist music</li>
					<li>this is the second music</li>
					<li>this is the thrid music</li>
					<li>this is the forth music</li>
				</ul>
			</div>
			)
	}
}


export default Musiclist