import { AppBar, Card, CardContent, Icon, IconButton, InputAdornment, List, TextField, Toolbar, Typography, withStyles } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { TeamMember } from './TeamMember';

const style = theme => ({
	white: {
		color: 'white'
	},
	inputUnderline: {
		'&:after': {
			borderBottomColor: 'white',
		},
		'&:before': {
			borderBottomColor: 'white',
		},
		'&:hover:before': {
			borderBottomColor: 'white',

		}
	},
});

class TeamClass extends React.PureComponent {
	state = {
		showSearch: false,
		searchValue: ''
	};

	render() {
		const { classes, name, members } = this.props;
		const { searchValue, showSearch } = this.state;
		const filteredMembers = members.filter(m => m.name.toUpperCase().includes(searchValue.toUpperCase()));

		return (
			<Card className="w-full">
				<AppBar position="static" elevation={ 0 }>
					<Toolbar className="pl-16 pr-8 justify-between">
						<Typography variant="subheading" color="inherit" className="">
							{ name }
						</Typography>
						{
							showSearch
								? <TextField
									autoFocus
									className={ classNames('flex-1 pl-24', classes.white) }
									value={ searchValue }
									onChange={ $ => this.setState({ searchValue: $.target.value }) }
									onBlur={ () => {
										if (!searchValue) {
											this.setState({ showSearch: false })
										}
									} }

									InputProps={ {
										classes: {
											underline: classes.inputUnderline,
											input: classes.white
										},
										startAdornment: (
											<InputAdornment position="start" className={ classes.white } color="inherit" >
												<Icon color="inherit">search</Icon>
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment position="end" className={ classes.white } color="inherit">
												<Typography color="inherit">{ filteredMembers.length } / { members.length }</Typography>
											</InputAdornment>
										)
									} }
								/>
								: <IconButton color="inherit" onClick={ () => {
									this.setState({ showSearch: true });

								} }><Icon>search</Icon></IconButton>
						}
					</Toolbar>
				</AppBar>
				<CardContent className="p-0">
					<List className="p-8">
						{ filteredMembers.map(m => <TeamMember key={ m.name } { ...m } />) }
					</List>
				</CardContent>
			</Card>

		);
	}
}
export const Team = withStyles(style)(TeamClass);
