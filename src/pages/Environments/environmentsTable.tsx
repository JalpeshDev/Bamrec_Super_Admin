import React, { useEffect } from "react";
import { Typography, Input, Row, Col, Table, Button } from "antd";
import { SearchOutlined, UserAddOutlined, CoffeeOutlined } from '@ant-design/icons';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../../components/layout/layout';
import livingEnvironment from '../../Redux/Environment/action';
import moment from "moment";

const EnvironmentTable = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(livingEnvironment.getLivingEnvironmentReport())
	}, []);

	const { livingEnvironmentList } = useSelector((state: any) => state.livingEnvironmemnt);

	const columns = [
		{
			title: 'Date',
			dataIndex: 'date',
			render: (text: any) => <>{moment(text).format('DD/MM/YYYY')}</>
		},
		{
			title: 'Living Environment',
			dataIndex: 'livingEnvironment',
			render: (text: any, record: any) => <a onClick={() => history.push(`/environments/environment-details/${record._id}`)}>{text}</a>
		},
		{
			title: 'Visiting Members',
			dataIndex: 'members',
			render: (text: any) => <>{text.length}</>
		},
		{
			title: 'Non Member Visitors',
			dataIndex: 'nonMembers',
			render: (text: any) => <>{text.length}</>
		},
		{
			title: 'Total Visitors',
			dataIndex: 'totalMembers',

		},

	];

	const tableColumns = columns.map((item) => ({
		...item,
	}));

	return (
		<AppLayout>
			<div>
				<Row>
					<Col span={1}>
						<CoffeeOutlined style={{ fontSize: '35px' }} />
					</Col>
					<Col span={15}> <Typography className={'title-fontStyle '}>
						LIST OF DAILY REPORTS OF A LIVING ENVIRONMENT
					</Typography>
					</Col>
					<Col span={8} >
						<Row justify='space-around'>
							<Col span={12}>
								<Input size='middle' placeholder="To research.." prefix={<SearchOutlined />} />
							</Col>
							<Button type="primary" icon={<UserAddOutlined />}
								onClick={() => { history.push('/environments/environment-report') }}
							>
								Daily Report
							</Button>
						</Row>
					</Col>
				</Row>
			</div>
			<div className={'margin-20'}>
				<Table
					columns={tableColumns}
					dataSource={livingEnvironmentList}
				/>
			</div>
		</AppLayout>
	)
}

export default EnvironmentTable;