import { FusePageSimple } from '@fuse';
import { Tab, Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React, { PureComponent } from 'react';
import { ProfileInfoTab } from './tabs/ProfileInfoTab';
import { ProfileTeamsTab } from './tabs/ProfileTeamsTab';

const styles = theme => ({
	layoutRoot: {},
	tabs: {
		height: '64px',

	}

});

class Example extends PureComponent {
	state = {
		currentTab: 0
	}
	render() {
		const { classes } = this.props;
		const { currentTab } = this.state;
		return (
			<FusePageSimple
				classes={{
					root: classes.layoutRoot
				}}
				header={
					<div className="p-16"><h1>Profile</h1></div>
				}
				content={
					<React.Fragment>
						<Tabs
							indicatorColor="primary"
							textColor="primary"
							value={currentTab}
							onChange={($, tab) => this.setState({ currentTab: tab })}
							className={classNames(classes.tabs,"")}
						>
							<Tab label="Info" value={0} />
							<Tab label="Teams" value={1} />
							<Tab label="Logs" value={2} />
						</Tabs>
						{currentTab === 0 && <ProfileInfoTab />}
						{currentTab === 1 && <ProfileTeamsTab />}
					</React.Fragment>
				}
			/>
		)
	}
}

export default withStyles(styles, { withTheme: true })(Example);