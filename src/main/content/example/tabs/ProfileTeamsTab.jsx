import { FuseAnimateGroup } from '@fuse';
import { Grid, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { Team } from './components/Team';

const style = theme => ({
	root: {

	},
});

class ProfileTeamsTabClass extends React.PureComponent {


	render() {
		const { classes } = this.props;
		return (
			<FuseAnimateGroup
				enter={ {
					animation: "transition.slideUpBigIn"
				} }
			>
				<Grid container className={ classNames(classes.root, "md:flex max-w-2xl p-24") } spacing={ 24 }>
					<Grid item md={ 6 }>
						<Team
							name="My Team"
							members={ [
								{
									name: 'Abbott B',
									group: 'Super',
									status: 'online',
									avatar: 'Abbott'
								}, {
									name: 'Alice R',
									group: 'Super',
									status: 'inactive',
									avatar: 'alice'
								}, {
									name: 'Andrew A',
									group: 'Admin',
									status: 'offline',
									avatar: 'andrew'
								}
							] }
						/>
					</Grid>
					<Grid item md={ 6 }>
						<Team
							name="Multiple Teams feature is coming"
							members={ [
								{
									name: 'Trevino J',
									group: 'Super',
									status: 'online',
									avatar: 'Trevino'
								}, {
									name: 'Lily R',
									group: 'Super',
									status: 'inactive',
									avatar: 'Lily'
								}, {
									name: 'jane A',
									group: 'Admin',
									status: 'online',
									avatar: 'jane'
								}
							] }
						/>
					</Grid>
				</Grid>

			</FuseAnimateGroup>
		);
	}
}

export const ProfileTeamsTab = withStyles(style, { withTheme: true })(ProfileTeamsTabClass);