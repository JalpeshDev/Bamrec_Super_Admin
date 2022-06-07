


import { Col, Row, Select, Switch } from 'antd';
import React, { useState } from 'react'

const { Option } = Select;

const onChangetoggle = (checked: boolean) => {
    console.log(`switch to ${checked}`);
};
const onChange = (value: string) => {
    console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
    console.log('search:', value);
};
const GeneralSetting = ({ match }: any) => {
    return (

        <div>
            <h2 className='general-s-heading'>General Settings</h2>
            <Row>
                <Col>
                    <div className="switch-div">
                        <p className='switch-pra'>Set a phone number as a mandatory field</p>
                        <div className='switch-btn'>
                            <Switch defaultChecked onChange={onChangetoggle} />
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="switch-div">
                        <p className='switch-pra'>Set an email as a mandatory field</p>
                        <div className='switch-btn'>
                            <Switch defaultChecked onChange={onChangetoggle} />
                        </div>
                    </div>
                </Col>
            </Row>
            <h5 className='pra-heading'>Default phone country code:</h5>
            <Select
                className={'dropdown-setting'}
                placeholder="Identify country code by user’s IP address"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
                }
            >
                <Option value="jack">181.20.20.123</Option>
                <Option value="lucy">186.53.30.303</Option>
                <Option value="tom">110.20.30.454</Option>
            </Select>

        </div>

    )
}
export default GeneralSetting;
