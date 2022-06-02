import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div style={{marginTop:"50px"}}>
				<Map
					next={this.props.next}
					google={this.props.google}
					center={{lat: 18.5204, lng: 73.8567}}
					height='300px'

					zoom={15}
				/>
			</div>
		);
	}
}

export default Home;