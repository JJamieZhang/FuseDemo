import { Button, Chip, ListItem, ListItemSecondaryAction, ListItemText, Typography, withStyles } from '@material-ui/core';
import React from 'react';

const style = theme => ({
});

class TeamMemberClass extends React.PureComponent {
	render() {
		const { name, group, avatar, status } = this.props;
		return (
			<ListItem>
				<img className="w-64 border-1" alt={ name } src={ `assets/images/avatars/${avatar}.jpg` } />
				<ListItemText
					primary={ (
						<div className="">
							<Typography className="inline font-medium" color="primary" paragraph={ false }>
								{ name }
							</Typography>
							<Typography className="inline ml-4" paragraph={ false }>
								{ group }
							</Typography>
						</div>
					) }
					secondary={ <Chip label={ status } color={ { 'online': 'primary', 'offline': 'secondary' }[status] } /> }
				/>
				<ListItemSecondaryAction>
					<Button className="mr-8" variant="contained">
						<i className="fa fa-eye" />
						&nbsp;
						View
					</Button>
					<Button variant="contained" color="primary">
						<i className="fa fa-user-secret" />
						&nbsp;
						Impersonate
					</Button>
				</ListItemSecondaryAction>
			</ListItem>
		);
	}
}
export const TeamMember = withStyles(style)(TeamMemberClass);
