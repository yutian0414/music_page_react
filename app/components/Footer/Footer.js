import React from "react";
import './Footer.css'
import Musiclist from './Musiclist/Musiclist'


class Footer extends React.Component{
	constructor(props){
		super(props);
		this.state={
			volume_state:"glyphicon glyphicon-volume-up",
			play_time:0,
			play_ratio:0,
			play_order:1,
			show_music_list:'hidden'
		};

		this.volume_control=this.volume_control.bind(this);
		this.play_or_pause=this.play_or_pause.bind(this);
		this.show_music_list=this.show_music_list.bind(this)
	}	
	volume_control(){
		var newvolumestate=this.state.volume_state
		if (newvolumestate=='glyphicon glyphicon-volume-up'){
			newvolumestate="glyphicon glyphicon-volume-off";
			this.refs.music_on_play.muted=true
		}else{
			newvolumestate='glyphicon glyphicon-volume-up';
			this.refs.music_on_play.muted=false
		}
		this.setState({volume_state:newvolumestate});

	}

	play_order_control(){

	}

	footer_download(){

	}
	footer_share(){

	}

	show_music_list(){
		if (this.state.show_music_list=="hidden"){
			this.setState({show_music_list:''});
			console.log('123')
		}else{
			this.setState({show_music_list:'hidden'})
			console.log('234')
		}
	}
	play_or_pause(){
		if (this.refs.music_on_play.paused){
			this.refs.music_on_play.play();
		}else{
			this.refs.music_on_play.pause();
		}
	}


	componentDidMount(){
			var audioDom=this.refs.music_on_play;
			audioDom.play();
			setInterval(()=>{
			this.setState({play_time:parseInt(this.refs.music_on_play.currentTime)});
			this.setState({play_ratio:this.refs.music_on_play.currentTime/this.refs.music_on_play.duration*100});
		},1000);
	}

	render(){

		return(
				<div id="Footer">
					<div id="play_control">
						<div id="backward_song">
							<span className="glyphicon glyphicon-step-backward"></span>
						</div>
						<div id="play_or_pause" onClick={this.play_or_pause}>
							<span className="glyphicon glyphicon-pause" ></span>
						</div>
						<div id="next_song">
							<span className="glyphicon glyphicon-step-forward"></span>
						</div>
					</div>
					<div id="play_area">
						<div className="music_image">
							<img src="#"></img>
						</div>
						<div className="music_name_and_play row">
							<div className="music_name col-xs-6">
								<p>chengdu</p>
							</div>
							<div className="music_play_time col-xs-6">
								<p>{this.state.play_time}</p>
							</div>
							<div className="process_bar progress col-xs-12" style={{"paddingRight":"0px","paddingLeft":"0px"}}>
								<div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{"width":this.state.play_ratio+'%'}}>
									<audio controls='false' id='music' hidden ref="music_on_play">
										<source src=".//app//components//Footer//music.mp3" />
									</audio>
								</div>
							</div>
						</div>
					</div>
					<div id="other_control_button">
						<span className={this.state.volume_state} onClick={ this.volume_control}></span>
						<span className='glyphicon glyphicon-refresh' onClick={ this.play_order_control}></span>
						<span className='glyphicon glyphicon-download-alt' onClick={ this.footer_download}></span>
						<span className='glyphicon glyphicon-new-window' onClick={ this.footer_share}></span>
					</div>
					<div className="playlist" onClick={this.show_music_list} >
						<Musiclist hide={this.state.show_music_list}>
						</Musiclist>
						<span className='glyphicon glyphicon-th-list' onClick={ this.show_music_list}></span>

					</div>		
				</div>
			);
	}
};


export default Footer;
