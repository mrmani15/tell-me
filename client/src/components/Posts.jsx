import React, { Component, Fragment } from 'react';
import axios from 'axios';

import PostModal from './PostModal';

class Posts extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			showPost: '',
			showModal: false,
		};
	}
	componentDidMount = () => {
		axios
			.get('api/posts')
			.then(res => {
				this.setState({
					posts: res.data,
				});
			})
			.catch(err => err.message);
	};

	showPost = e => {
		this.setState({
			showPost: e.target.getAttribute('value'),
			showModal: true,
		});
	};
	render() {
		if (this.state.posts.length) {
			return (
				<Fragment>
					<ul className='list-group mb-2'>
						{this.state.posts.map(post => (
							<li
								key={post._id}
								className='list-group-item mt-3 bg-dark text-white'
								onClick={this.showPost}
								data-target='#postModal'
								data-toggle='modal'
								value={post.text}
							>
								{post.text.length > 80
									? post.text.slice(0, 80)
									: post.text}
							</li>
						))}
					</ul>
					{this.state.showModal ? (
						<PostModal post={this.state.showPost} />
					) : null}
					<a href="#titlebar"><button className='btn btn-danger top'>top</button></a>
				</Fragment>
			);
		} else {
			return <h3>Data Fetching....</h3>;
		}
	}
}

export default Posts;
