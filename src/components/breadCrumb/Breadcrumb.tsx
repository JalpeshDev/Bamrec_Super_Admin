import React from 'react';
import { Breadcrumb } from 'antd';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { NavLink } from 'react-router-dom';
import {
	HomeOutlined,
	TeamOutlined,
	UserAddOutlined,
	ScheduleOutlined,
	ContainerOutlined,
	CoffeeOutlined,
	DeploymentUnitOutlined,
	FundOutlined,
	UserOutlined,
	SettingOutlined
} from '@ant-design/icons';

const BreadCrumb: React.FC<{}> = (props) => {
	const breadcrumbs = useBreadcrumbs();

	const dynamicIcon = (breadcrumb: any) => {
		switch (breadcrumb.props.children) {
			case 'System-administration':
				return <SettingOutlined />
			case 'Members':
				return <TeamOutlined />
			case 'Home':
				return <HomeOutlined />
			case 'File-opening':
				return <UserAddOutlined />
			case 'Activities':
				return <ScheduleOutlined />
			case 'Activity-report':
				return <ContainerOutlined />
			case 'Activity-details':
				return <ContainerOutlined />
			case 'Environments':
				return <CoffeeOutlined />
			case 'Environment-report':
				return <CoffeeOutlined />
			case 'Environment-details':
				return <CoffeeOutlined />
			case 'TeamMeeting':
				return <DeploymentUnitOutlined />
			case 'TeamMeeting-report':
				return <DeploymentUnitOutlined />
			case 'TeamMeeting-details':
				return <DeploymentUnitOutlined />
			case 'Statistiques':
				return <FundOutlined />
			case 'Interventions':
				return <TeamOutlined />
			case 'Interventions-table':
				return <TeamOutlined />
			case 'Interventions-graph':
				return <TeamOutlined />
			case 'Activities-table':
				return <ScheduleOutlined />
			case 'Activities-graph':
				return <ScheduleOutlined />
			case 'Details':
				return <UserOutlined />
			case 'System-settings':
				return <SettingOutlined />
			default:
				return <HomeOutlined />
		}
	}

	return (
		<>
			<Breadcrumb>
				{breadcrumbs.map(({ breadcrumb, match }, index) => (
					<Breadcrumb.Item href="">
						{dynamicIcon(breadcrumb)}
						<span>
							<NavLink to={match.url}>  {breadcrumb}</NavLink>
						</span>
					</Breadcrumb.Item>
				))}
			</Breadcrumb>
		</>
	)
}

export default BreadCrumb;