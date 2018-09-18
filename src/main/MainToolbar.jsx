import { FuseAnimate } from '@fuse';
import { Avatar, Button, Hidden, Icon, IconButton, ListItemIcon, ListItemText, MenuItem, Popover, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles/index';
import classNames from 'classnames';
import * as quickPanelActions from 'main/quickPanel/store/actions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

const styles = theme => ({
	root: {
		display: 'flex',
		alignItems: 'center',
		width: '100%'
	},
	breadcrum: {
		textTransform: 'none',
	},
	breadcrumDivider: {
		minWidth: '10px',
		width: '10px',
		paddingLeft: 0,
		paddingRight: 0,
	},
	seperator: {
		width: 1,
		height: 64,
		backgroundColor: theme.palette.divider
	}
});

class MainToolbar extends Component {
	state = {
		userMenu: null
	};

	userMenuClick = event => {
		this.setState({ userMenu: event.currentTarget });
	};

	userMenuClose = () => {
		this.setState({ userMenu: null });
	};

	render() {
		const { classes } = this.props;
		const { userMenu } = this.state;
		return (
			<div className={classNames(classes.root, "flex flex-row")}>

				<div className="flex flex-1 px-24">
					<Button className={classes.breadcrum}>
						<Icon>home</Icon>
						Foresite</Button>
					<Hidden mdDown>
						<Button disabled className={classes.breadcrumDivider}>/</Button>
						<Button className={classes.breadcrum}>Profile</Button>
					</Hidden>
				</div>

				<div className="flex">
					<IconButton className="w-64 h-64">
						<Icon>help_outline</Icon>
					</IconButton>
					<div className={classes.seperator} />
					<FuseAnimate delay={300}>
						<Button className="h-64" onClick={this.userMenuClick}>
							<Avatar className="" alt="user photo" src="assets/images/avatars/profile.jpg" />

							<div className="hidden md:flex flex-col ml-12 items-start">
								<Typography component="span" className="normal-case font-500 flex">
									Jamie Zhang
								</Typography>
								<Typography className="text-11 capitalize" color="textSecondary">
									Developer
								</Typography>
							</div>

							<Icon className="text-16 ml-12 hidden sm:flex" variant="action">keyboard_arrow_down</Icon>
						</Button>
					</FuseAnimate>

					<Popover
						open={!!userMenu}
						anchorEl={userMenu}
						onClose={this.userMenuClose}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right'
						}}
						classes={{
							paper: "py-8"
						}}
					>
						<MenuItem component={Link} to="/profile">
							<ListItemIcon>
								<Icon>person</Icon>
							</ListItemIcon>
							<ListItemText className="pl-0" primary="Profile" />
						</MenuItem>
						<MenuItem component={Link} to="/logout">
							<ListItemIcon>
								<Icon>close</Icon>
							</ListItemIcon>
							<ListItemText className="pl-0" primary="Logout" />
						</MenuItem>
					</Popover>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		toggleQuickPanel: quickPanelActions.toggleQuickPanel
	}, dispatch);
}

export default withStyles(styles, { withTheme: true })(connect(null, mapDispatchToProps)(MainToolbar));
