export const fuseNavigationConfig = [
	{
		id: 'home',
		title: 'Home',
		type: 'item',
		icon: 'home',
		url: '/home'
	}, {
		id: 'analytics',
		title: 'Analytics',
		type: 'item',
		icon: 'insert_chart_outlined',
		url: '/analytics/reports'
	}, {
		id: 'applicants',
		title: 'Applicants',
		type: 'item',
		icon: 'people',
		url: '/applicants'
	},
	{
		id: 'admin',
		title: 'Admin',
		type: 'collapse',
		icon: 'stars',
		children: [
			{
				id: 'admin/invite-user',
				title: 'Invite User',
				type: 'item',
				icon: 'contacts',
				url: '/admin/invite_user'
			},
			{
				id: 'admin/permissions',
				title: 'User Permissions',
				type: 'item',
				icon: 'lock_open',
				url: '/admin/permissions'
			}
		]
	}, {
		id: 'dev-tools',
		title: 'Dev Tools',
		type: 'collapse',
		icon: 'settings',
		children: [
			{
				id: 'dev-tools/error-logs',
				title: 'Error Logs',
				type: 'item',
				icon: 'bug_report',
				url: '/dev_tools/error_logs'
			},
			{
				id: 'dev-tools/groups-visualization',
				title: 'Groups Visualization',
				type: 'item',
				icon: 'supervisor_account',
				url: '/dev_tools/groups_visualization'
			}
		]
	}, {
		type: 'divider'
	},
	{
		id: 'external-links',
		title: 'External Links',
		type: 'group',
		icon: 'fa fa-external-link',
		children: [
			{
				id: 'dev-tools/groups-visualization',
				title: 'Groups Visualization',
				type: 'item',
				url: 'https://atlasinsightview.com/?api_key=KmSYbTviWjPT7F5c_FUq'
			}
		]
	}
];
