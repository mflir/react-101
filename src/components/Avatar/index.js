import React from 'react';
import avatar from './i1.png';

export default (props) =>
<div>
<img src={avatar} className="App-avatar" 
	alt="avatar"
	width="{props.size}"
	height="{props.size}"  />
</div>