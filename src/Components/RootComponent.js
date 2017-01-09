/**
 * Created by rs on 08/01/17.
 */
import React, {Component} from 'react'

class RootComponent extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)


	}
}

export default RootComponent