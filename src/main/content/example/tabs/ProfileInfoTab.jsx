import { FuseAnimateGroup } from '@fuse';
import { AppBar, Avatar, Button, Card, CardContent, List, ListItem, ListItemText, MenuItem, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import ReactTable from 'react-table';

const styles = theme => ({
	layoutRoot: {},
	profileForm: {
		paddingBottom: '0 !important',
	},
	profileField: {
		'& + &': {
			marginTop: '16px',
		}
	}
});

class ProfileInfoTabClass extends PureComponent {
	static columns = [{
		Header: 'Client Name',
		accessor: 'ParentDisplayName',
		headerClassName: 'text-left'
	}, {
		Header: 'Location Id',
		accessor: 'LocId',
		headerClassName: 'text-left'
	}, {
		Header: 'Name',
		accessor: 'DisplayName',
		headerClassName: 'text-left'
	}, {
		Header: 'City',
		accessor: 'City',
		headerClassName: 'text-left'
	}, {
		Header: 'State',
		accessor: 'State',
		headerClassName: 'text-left'
	}];

	static rows = [{ "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50278, "Name": "0248", "DisplayName": "Academy at Canyon Creek", "City": "SPRINGVILLE", "State": "UT" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50279, "Name": "0159", "DisplayName": "Aiken Regional Med. Ctrs.", "City": "Aiken", "State": "SC" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50280, "Name": "0431", "DisplayName": "UHS Alabama Clinical Schools", "City": "Birmingham", "State": "AL" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50282, "Name": "0433", "DisplayName": "ALICANTE AT LAGUANA", "City": "ELK GROVE", "State": "CA" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50283, "Name": "0434", "DisplayName": "UHS Carmichael", "City": "CARMICHAEL", "State": "CA" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50284, "Name": "0251", "DisplayName": "UHS - Anchor Hospital", "City": "Atlanta", "State": "GA" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50285, "Name": "0021", "DisplayName": "Arbour-HRI Hospital", "City": "Brookline", "State": "MA" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50287, "Name": "0020", "DisplayName": "Arbour - HRI Hospital", "City": "Brookline", "State": "MA" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50288, "Name": "XClosed/0294 - ASCENT", "DisplayName": "ASCENT", "City": "NAPLES", "State": "ID" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50290, "Name": "0197", "DisplayName": "AUBURN CENTER FOR CANCER CURE", "City": "AUBURN", "State": "WA" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50291, "Name": "0005", "DisplayName": "CLOSED", "City": "Auburn", "State": "WA" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50292, "Name": "0016", "DisplayName": "The Bridgeway, Inc.", "City": "North Little Rock", "State": "AR" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50293, "Name": "0435", "DisplayName": "BRISTOL YOUTH ACADEMY", "City": "BRISTOL", "State": "FL" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50294, "Name": "021/0134", "DisplayName": "UHS Arbour Senior Care", "City": "Braintree", "State": "MA" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50295, "Name": "0292", "DisplayName": "UHS Boulder Creek Academy", "City": "Bonners Ferry", "State": "ID" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50297, "Name": "0259", "DisplayName": "Carolina Center for Behavioral Health", "City": "Greer", "State": "SC" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50298, "Name": "0436", "DisplayName": "CEDAR GROVE", "City": "MURFREESBORO", "State": "TN" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50299, "Name": "0329", "DisplayName": "UHS Cedar Ridge", "City": "Oklahoma City", "State": "OK" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50300, "Name": "0297", "DisplayName": "Center For Change", "City": "Orem", "State": "UT" }, { "ParentID": 1426, "ParentDisplayName": "UHS Of Delaware, Inc.", "CustId": 1426, "LocId": 50301, "Name": "X0077 - CENTRAL MONTGOMERY MED CTR", "DisplayName": "", "City": "LANSDALE", "State": "PA" }];

	render() {
		const { classes } = this.props;

		return (
			<FuseAnimateGroup
				enter={ {
					animation: "transition.slideUpBigIn"
				} }
			>
				<div className={ classNames(classes.root, "md:flex max-w-2xl p-24") }>
					<div className="md:w-320 md:pr-24">
						<Card className="w-full">
							<AppBar position="static" elevation={ 0 }>
								<Toolbar className="pl-16 pr-8">
									<Typography variant="subheading" color="inherit">
										Account Info
											</Typography>
								</Toolbar>
							</AppBar>
							<CardContent className={ classNames(classes.profileForm, "p-0") }>
								<form className="p-24 flex flex-col">
									<TextField
										label="Name"
										defaultValue="Jamie Zhang"
										className={ classes.profileField }
									/>
									<TextField
										label="Title"
										defaultValue="Developer"
										className={ classes.profileField }
									/>
									<TextField
										label="Email"
										defaultValue="asxasdfghjkl@gmail.com"
										className={ classes.profileField }
									/>
									<TextField
										label="Phone"
										defaultValue="+886982886440"
										className={ classes.profileField }
									/>
									<TextField
										select
										label="Default Client"
										value="40"
										className={ classes.profileField }
									>
										<MenuItem value="40">Walton Demo Company</MenuItem>
										<MenuItem value="41">Company 1</MenuItem>
										<MenuItem value="43">Google</MenuItem>
									</TextField>
								</form>
								<AppBar className="card-footer flex flex-row border-t-1" position="static" color="default" elevation={ 0 }>
									<div className="flex-1 items-center">

									</div>
									<div className="p-8">
										<Button variant="raised" color="primary" size="small" aria-label="post">
											Save
										</Button>
									</div>
								</AppBar>
							</CardContent>
						</Card>
					</div>
					<div className="md:flex-1">
						<Card className="w-full">
							<AppBar position="static" elevation={ 0 }>
								<Toolbar className="pl-16 pr-8">
									<Typography variant="subheading" color="inherit" className="flex-1">
										Recent Activities
											</Typography>
									<Button color="inherit" size="small">See All</Button>
								</Toolbar>
							</AppBar>

							<CardContent className="p-0">
								<List>
									<ListItem>
										<Avatar alt="profile of Jamie Zhang" src="assets/images/avatars/profile.jpg" />
										<ListItemText
											className="flex-1"
											primary={ (
												<div className="*truncate">
													<Typography className="inline font-medium" color="primary" paragraph={ false }>
														Jamie Zhang
															</Typography>

													<Typography className="inline ml-4" paragraph={ false }>
														viewed Profile
															</Typography>
												</div>
											) }
											secondary="4 secs. ago"
										/>
									</ListItem>
									<ListItem>
										<Avatar alt="profile of Jamie Zhang" src="assets/images/avatars/profile.jpg" />
										<ListItemText
											className="flex-1"
											primary={ (
												<div className="*truncate">
													<Typography className="inline font-medium" color="primary" paragraph={ false }>
														Jamie Zhang
															</Typography>

													<Typography className="inline ml-4" paragraph={ false }>
														viewed 120Hours Report
															</Typography>
												</div>
											) }
											secondary="3 mins. ago"
										/>
									</ListItem>
									<ListItem>
										<Avatar alt="profile of Jamie Zhang" src="assets/images/avatars/profile.jpg" />
										<ListItemText
											className="flex-1"
											primary={ (
												<div className="*truncate">
													<Typography className="inline font-medium" color="primary" paragraph={ false }>
														Jamie Zhang
															</Typography>

													<Typography className="inline ml-4" paragraph={ false }>
														invited Jason Sheley to Foresite
															</Typography>
												</div>
											) }
											secondary="5 mins. ago"
										/>
									</ListItem>
									<ListItem>
										<Avatar alt="profile of Jamie Zhang" src="assets/images/avatars/profile.jpg" />
										<ListItemText
											className="flex-1"
											primary={ (
												<div className="*truncate">
													<Typography className="inline font-medium" color="primary" paragraph={ false }>
														Jamie Zhang
															</Typography>

													<Typography className="inline ml-4" paragraph={ false }>
														viewed Admin/Invite
															</Typography>
												</div>
											) }
											secondary="5 mins. ago"
										/>
									</ListItem>
									<ListItem>
										<Avatar alt="profile of Jamie Zhang" src="assets/images/avatars/profile.jpg" />
										<ListItemText
											className="flex-1"
											primary={ (
												<div className="*truncate">
													<Typography className="inline font-medium" color="primary" paragraph={ false }>
														Jamie Zhang
															</Typography>

													<Typography className="inline ml-4" paragraph={ false }>
														viewed Home
															</Typography>
												</div>
											) }
											secondary="6 mins. ago"
										/>
									</ListItem>
								</List>

							</CardContent>
						</Card>
					</div>
				</div>
				<div className={ classNames(classes.root, "md:flex max-w-2xl p-24") }>
					<div className="md:flex-1">
						<Card className="w-full mb-16">
							<AppBar position="static" elevation={ 0 }>
								<Toolbar className="pl-16 pr-8">
									<Typography variant="subheading" color="inherit" className="flex-1">
										Locations
									</Typography>
								</Toolbar>
							</AppBar>

							<CardContent className="p-0" style={ { paddingBottom: 0 } }>
								<ReactTable
									filterable
									pageSize={ 5 }
									data={ ProfileInfoTabClass.rows }
									columns={ ProfileInfoTabClass.columns }
								/>
							</CardContent>
						</Card>
					</div>
				</div>
			</FuseAnimateGroup >
		);
	}
}

export const ProfileInfoTab = withStyles(styles, { withTheme: true })(ProfileInfoTabClass);