import React, { useState } from "react";
import { Typography, InputNumber, Row, Col, Button, Form, Input, Select, DatePicker, Checkbox, Popover } from "antd";
import { PlusOutlined, MinusCircleOutlined, UserAddOutlined, SolutionOutlined, ContactsOutlined } from '@ant-design/icons';
import CreateMemberModalpopup from './createMemberModalpopup';
import CreateNonMemberModalpopup from './createNonMemberModalpopup';
import AppLayout from "../../components/layout/layout";
import moment from "moment";

const MemberFile = () => {
	const [form] = Form.useForm();
	const { Option } = Select;
	const [isVisible, setIsVisible] = useState(false)
	const [isAddMemberModal, setIsAddMemberModal] = useState(false);
	const [isAddNonMemberModal, setIsAddNonMemberModal] = useState(false);

	const onFinish = (values: any) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const addMember = () => {
		setIsAddMemberModal(true);
		setIsVisible(false);
	}

	const addNonMember = () => {
		setIsAddNonMemberModal(true);
		setIsVisible(false);
	}

	return (
		<AppLayout>
			<div>
				<Row>
					<Col span={1}>
						<UserAddOutlined style={{ fontSize: '35px' }} />
					</Col>
					<Col span={23} style={{ fontSize: '35px' }}>
						<Typography className={'title-fontStyle '}>
							FILE OPENING
						</Typography>
					</Col>
				</Row>
			</div>
			<div className={'margin-20'}>
				<Row justify='space-between'>
					<Col span={12}>
						<Row >
							<Col span={2}>
								<SolutionOutlined style={{ fontSize: '35px' }} />
							</Col>
							<Col span={22}>
								<Typography className={'font-title-member'}>
									INFORMATIONS
								</Typography>
							</Col>
						</Row>
					</Col>
					<Col span={11}>
						<Row >
							<Col span={2}>
								<ContactsOutlined style={{ fontSize: '35px' }} />
							</Col>
							<Col span={22}>
								<Typography className={'font-title-member'}>
									ENTOURAGE
								</Typography>
							</Col>
						</Row>
					</Col>
				</Row>
			</div>
			<div className={'margin-20'}>
				<Form
					form={form}
					layout="vertical"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete="off"
				>
					<Row>
						<Col span={24}>
							<Row justify='space-between'>
								<Col span={12}>
									<Row justify='space-between'>
										<Col span={11}>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="firstName"
													label="FirstName"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please input your Firstname!' }]}
												>
													<Input />
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="nickname"
													label="Nickname"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please input your nickname!' }]}
												>
													<Input />
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="city"
													label="City"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please input your city!' }]}
												>
													<Input />
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Row justify='space-between'>
													<Col span={12}>
														<Form.Item
															name="nation"
															label="Nation"
															style={{ fontWeight: 500 }}
															rules={[{ required: true, message: 'Please select Nation!' }]}
														>
															<Select placeholder="Principle">
																<Option value="france">France</Option>
																<Option value="india">India</Option>
															</Select>
														</Form.Item>
													</Col>
													<Col span={11}>
														<Form.Item
															name="addional"
															label="Additional"
															style={{ fontWeight: 500 }}
															rules={[{ required: true, message: 'Please select Additional!' }]}
														>
															<Select placeholder="supplementaire">
																<Option value="Zhejiang">France</Option>
																<Option value="Jiangsu">India</Option>
															</Select>
														</Form.Item>
													</Col>
												</Row>
											</div>

											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="gender"
													label="Gender"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please select gender!' }]}
												>
													<Select placeholder="select">
														<Option value="male">Male</Option>
														<Option value="female">Female</Option>
													</Select>
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="date-picker"
													label="In urban areas since"
													style={{ fontWeight: 500 }}
													rules={[
														{ type: 'object' as const, required: true, message: 'Please select Date!' }
													]}
												>
													<DatePicker
														style={{ width: '100%' }} />
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="occupation"
													label="Occupation"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please select Occupation!' }]}
												>
													<Select placeholder="select">
														<Option value="male">Male</Option>
														<Option value="female">Female</Option>
													</Select>
												</Form.Item>
											</div>
										</Col>
										<Col span={12}>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="lastName"
													label="Lastname"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please input your Lastname!' }]}
												>
													<Input />
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="address"
													label="Address"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please input your Address!' }]}
												>
													<Input />
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="case"
													label="# Case"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please input your Case!' }]}
												>
													<Input />
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="communate_appartment"
													label="communate of apartment / bands"
													style={{ fontWeight: 500, marginBottom: 0 }}
												>
													<Row justify='space-between'>
														<Col span={12}>
															<Form.Item
																name="apartment"
																style={{ fontWeight: 500 }}
																rules={[{ required: true, message: 'Please select Principle!' }]}
															>
																<Select placeholder="Principle">
																	<Option value="france">France</Option>
																	<Option value="india">India</Option>
																</Select>
															</Form.Item>
														</Col>
														<Col span={11}>
															<Form.Item
																name="band"
																style={{ fontWeight: 500 }}
																rules={[{ required: true, message: 'Please select Supplementaire!' }]}
															>
																<Select placeholder="supplementaire">
																	<Option value="Zhejiang">France</Option>
																	<Option value="Jiangsu">India</Option>
																</Select>
															</Form.Item>
														</Col>
													</Row>
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="dob"
													label="Date of Birth"
													style={{ fontWeight: 500 }}
													rules={[
														{ type: 'object' as const, required: true, message: 'Please select Date of Birth!' }
													]}>
													<DatePicker
														disabledDate={(current) => {
															return moment().add(0, 'days') <= current
														}}
														style={{ width: '100%' }} />
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="maritalStatus"
													label="Marital status"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please select Marital Status!' }]}
												>
													<Select placeholder="select">
														<Option value="single">Single</Option>
														<Option value="married">Married</Option>
													</Select>
												</Form.Item>
											</div>
											<div style={{ overflow: 'hidden' }}>
												<Form.Item
													name="reason"
													label="Reason to settle in the city"
													style={{ fontWeight: 500 }}
													rules={[{ required: true, message: 'Please select Reason to settle in the city!' }]}
												>
													<Select placeholder="select">
														<Option value="single">Single</Option>
														<Option value="married">Married</Option>
													</Select>
												</Form.Item>
											</div>
										</Col>
									</Row>
								</Col>
								<Col span={11}>
									<div style={{ marginTop: "100px", textAlign: "center" }}>
										<Typography>No family member in the file</Typography>
										<Row justify='center'>
											<Popover trigger="click"
												placement="bottom"
												title="To select"
												visible={isVisible}
												onVisibleChange={() => setIsVisible(!isVisible)}
												content={
													<Row justify='space-between'>
														<a onClick={() => addMember()}>Member</a>
														<a onClick={() => addNonMember()}>Non-member</a>
													</Row>
												}
											>
												<Button type="primary">Add</Button>
											</Popover>
										</Row>
									</div>

								</Col>
							</Row>
							<div>
								<Col span={12}>
									<div style={{ overflow: 'hidden' }}>
										<Form.Item
											name={'notes'}
											label="Internal notes"
											style={{ fontWeight: 500 }}
											rules={[{ required: true, message: 'Please Add Internal notes!' }]}>
											<Input.TextArea />
										</Form.Item>
									</div>
									<div style={{ overflow: 'hidden' }}>
										<Form.List name="addNumber">
											{(fields, { add, remove }) => (
												<>
													{fields.map(field => (
														<Row justify='space-between' >
															<Col span={4}>
																<Form.Item
																	style={{ fontWeight: 500 }}
																	shouldUpdate={(prevValues, curValues) =>
																		prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
																	}
																>
																	{() => (
																		<Form.Item
																			{...field}
																			label="Telephone"
																			name={[field.name, 'telephone']}
																			// fieldKey={[field.fieldKey, 'telephone']}
																			style={{ fontWeight: 500 }}
																			rules={[{ required: true, message: 'Please select prefix!' }]}
																		>
																			<Select >
																				<Option value="91">+91</Option>
																				<Option value="92">+111</Option>
																			</Select>
																		</Form.Item>
																	)}
																</Form.Item>
															</Col>
															<Col span={10}>
																<Form.Item
																	{...field}
																	label="Number"
																	name={[field.name, 'number']}
																	// fieldKey={[field.fieldKey, 'number']}
																	// rules={[{ message: 'Missing number' }]}
																	style={{ fontWeight: 500 }}
																>
																	<InputNumber
																		type="number"
																		style={{ width: '100%' }} />
																</Form.Item>
															</Col>
															<Col span={4}>
																<Form.Item
																	{...field}
																	label="Poste/ ext"
																	name={[field.name, 'ext']}
																	// fieldKey={[field.fieldKey, 'ext']}
																	style={{ fontWeight: 500 }}
																>
																	<InputNumber type="number" />
																</Form.Item>
															</Col>
															<Col span={2}>
																<MinusCircleOutlined onClick={() => remove(field.name)} />
															</Col>
														</Row>
													))}
													<Form.Item>
														<Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
															Add Onther Number
														</Button>
													</Form.Item>
												</>
											)}
										</Form.List>

									</div>

									<div style={{ overflow: 'hidden' }}>
										<Form.Item name="remember1" valuePropName="checked"
											rules={[
												{
													validator: (_, value) =>
														value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
												},
											]}>
											<Checkbox>member has signed consent form required to open a file</Checkbox>
										</Form.Item>
									</div>
									<div style={{ overflow: 'hidden' }}>
										<Form.Item name="remember2" valuePropName="checked"
											rules={[
												{
													validator: (_, value) =>
														value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
												},
											]}>
											<Checkbox>member involves volunteering at centerdance the last 30 days</Checkbox>
										</Form.Item>
									</div>
								</Col>
							</div>
						</Col>
					</Row>

					<Form.Item wrapperCol={{ offset: 12, span: 24 }}>
						<Button type="primary" htmlType="submit" icon={<UserAddOutlined />}>
							Create
						</Button>
					</Form.Item>
				</Form>
			</div>
			<CreateMemberModalpopup
				isAddMemberModal={isAddMemberModal}
				setIsAddMemberModal={setIsAddMemberModal} />
			<CreateNonMemberModalpopup
				isAddNonMemberModal={isAddNonMemberModal}
				setIsAddNonMemberModal={setIsAddNonMemberModal} />
		</AppLayout>
	)
}

export default MemberFile;