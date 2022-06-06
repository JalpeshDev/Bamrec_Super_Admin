import React, { useState } from 'react'
import AppLayout from '../../components/layout/layout';
import { Checkbox, Row, Table } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { ColumnsType, TableProps } from 'antd/lib/table';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';





interface DataType {
  key: React.Key;
  Modules: string;
  checkbox: boolean;
  address: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: 'Modules',
    dataIndex: 'modules',  
  },
  {
    title: 'Parent',
    dataIndex: 'parent',
  },
  {
    title: 'Organization',
    dataIndex: 'organization',
  },
  {
    title: 'Admin',
    dataIndex: 'admin',
  }
]
const data : any = [
  {
    key: '1',
    modules: 'Edit Profile',
    admin : (<Checkbox ></Checkbox>),
    organization : (<Checkbox ></Checkbox>),
    parent : (<Checkbox ></Checkbox>),
  },
  {
    key: '2',
    modules: 'Add news',
    admin : (<Checkbox ></Checkbox>),
    organization : (<Checkbox ></Checkbox>),
    parent : (<Checkbox ></Checkbox>),

    
  },
  {
    key: '3',
    modules: 'Create event',
    admin : (<Checkbox ></Checkbox>),
    organization : (<Checkbox ></Checkbox>),
    parent : (<Checkbox ></Checkbox>),

    
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const onChangeCheckbox = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};
const Permission = ({ match }: any) => {
  return (
       <div>
          <div>
            <h1>Permissions</h1>
          </div>
          <Table 
            columns={columns} 
            dataSource={data} 
            onChange={onChange} 
          />
       </div>
  )
}
export default Permission;
