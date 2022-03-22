import React, { useState } from "react";
import { Typography, Input, Row, Col, Table, Button } from "antd";
import { SearchOutlined, UserAddOutlined, StockOutlined, TeamOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import AppLayout from "../../components/layout/layout";


const MemberTable = () => {
	const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
	const history = useHistory();
	const { t } = useTranslation();
	interface DataType {
		key: React.Key;
		name: string;
	}
	// useEffect(() => {
	// 	dispatch(memberActions.getMember())
	// }, []);
	const columns = [
		{
			title: '# Dossier',
			dataIndex: 'dossier',
		},
		{
			title: 'Nom',
			dataIndex: 'nom',
			render: (text: string) => <a onClick={() => { history.push('/members/details') }}>{text}</a>,

		},
		{
			title: 'Date de naissance ',
			dataIndex: 'date',
		},
		{
			title: 'Genre',
			dataIndex: 'genre',
			sorter: (a: any, b: any) => a.genre - b.genre,
			filters: [
				{
					text: 'Feminin',
					value: 'feminin',
				},
				{
					text: 'Masculin',
					value: 'masculin',
				},
			],
			onFilter: (value: any, record: any) => record.genre.indexOf(value) === 0,
		},
		{
			title: 'Nation',
			dataIndex: 'nation',
			sorter: (a: any, b: any) => a.nation - b.nation,
			filters: [
				{
					text: 'India',
					value: 'india',
				},
				{
					text: 'Masculin',
					value: 'masculin',
				},
			],
			onFilter: (value: any, record: any) => record.nation.indexOf(value) === 0,
		},
		{
			title: 'Communaute',
			dataIndex: 'communaute',
			sorter: (a: any, b: any) => a.Communaute - b.Communaute,
			filters: [
				{
					text: 'Manawan',
					value: 'manawan',
				},
				{
					text: 'Wemontaci',
					value: 'wemontaci',
				},
			],
			onFilter: (value: any, record: any) => record.communaute.indexOf(value) === 0,
		},
		{
			title: 'Derniere intervention',
			dataIndex: 'intervention',
			sorter: (a: any, b: any) => a.intervention - b.intervention,

		},
	];

	const data: any = [];
	for (let i = 1; i <= 10; i++) {
		data.push({
			key: i,
			dossier: 'John Brown',
			nom: "***",
			date: "26/6/1997",
			genre: "Feminin",
			nation: "Indian",
			communaute: "wemontaci",
			intervention: '21/02/2020'
		});
	}

	const tableColumns = columns.map((item) => ({
		...item,
	}));

	const rowSelection = {
		onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
			console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		},
		getCheckboxProps: (record: DataType) => ({
			name: record.name,
		}),
	};

	return (
		<AppLayout>
			<div>
			
			</div>
			{/* <div className={'overflow-x-auto'}>
				<Table
					rowSelection={{
						type: selectionType,
						...rowSelection,
					}}

					columns={tableColumns}
					dataSource={data}

				/>
			</div>
			<div>
				<div>
					<Row gutter={12}>
						<Col className="gutter-row" span={4}>
							<div><Button icon={<StockOutlined />}
							>
								View statistics
							</Button></div>
						</Col>
					</Row>
				</div>
			</div> */}
		</AppLayout>

	)
}

export default MemberTable;