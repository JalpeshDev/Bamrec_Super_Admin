
import React, { useState } from 'react'
import facebookIcon from "../../assets/Images/facebook.svg"
import twitterIcon from "../../assets/Images/twitter.svg"
import linkedinIcon from "../../assets/Images/linkedin.svg"
import youtubeIcon from "../../assets/Images/youtube.svg"
import instagramIcon from "../../assets/Images/instagram.svg"
import tiktokkIcon from "../../assets/Images/tiktok.svg"
import { Button, Col, Row, Select, Switch } from 'antd'; import PrivacyPolicyModal from '../Modals/SettingsModal/PrivacyPolicyModal'
import TermsandConditionModal from '../Modals/SettingsModal/TermsandConditionModal'
import { useHistory } from "react-router";

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
const AppInformation = ({ match }: any) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleTD, setModalVisibleTD] = useState(false);
  const history = useHistory();

  return (
    <div className="app-information-block">
      <h1>App information </h1>
      <p>Legal Information</p>
      <div className='legal-btn-div'>
        <Button className='legal-btn'
          onClick={() => {
            setModalVisible(true);
            // setCurrentData([])
          }}
        >
          Privacy Policy
        </Button>
      </div>
      <div className='legal-btn-div'>
        <Button
          onClick={() => {
            setModalVisibleTD(true);
            // setCurrentData([])
          }}
          className='legal-btn'>
          Terms and Conditions
        </Button>
      </div>
      <div className='legal-btn-div'>
        <Button
          onClick={() => {
            history.push("/askQuestions");
          }}
          className='legal-btn'
        >
          Frequently asked questions
        </Button>
      </div>
      <h4>Social media settings</h4>


      <div className="social-switch-div">
        <div className="social-switch-img">
          <img src={facebookIcon} />
        </div>
        <input
          type={"text"}
          placeholder="Facebook profile URL"
          className={'social-input'}
        />
        <div className='switch-btn'>
          <Switch defaultChecked onChange={onChangetoggle} />
        </div>
      </div>

      <div className="social-switch-div">
        <div className="social-switch-img">
          <img src={twitterIcon} />
        </div>
        <input
          type={"text"}
          placeholder="Twitter profile URL"
          className={'social-input'}
        />
        <div className='switch-btn'>
          <Switch defaultChecked onChange={onChangetoggle} />
        </div>
      </div>

      <div className="social-switch-div">
        <div className="social-switch-img">
          <img src={linkedinIcon} />
        </div>
        <input
          type={"text"}
          placeholder="Twitter profile URL"
          className={'social-input'}
        />
        <div className='switch-btn'>
          <Switch defaultChecked onChange={onChangetoggle} />
        </div>
      </div>

      <div className="social-switch-div">
        <div className="social-switch-img">
          <img src={youtubeIcon} />
        </div>
        <input
          type={"text"}
          placeholder="Twitter profile URL"
          className={'social-input'}
        />
        <div className='switch-btn'>
          <Switch defaultChecked onChange={onChangetoggle} />
        </div>
      </div>

      <div className="social-switch-div">
        <div className="social-switch-img">
          <img src={instagramIcon} />
        </div>
        <input
          type={"text"}
          placeholder="Twitter profile URL"
          className={'social-input'}
        />
        <div className='switch-btn'>
          <Switch defaultChecked onChange={onChangetoggle} />
        </div>
      </div>

      <div className="social-switch-div">
        <div className="social-switch-img">
          <img src={tiktokkIcon} />
        </div>
        <input
          type={"text"}
          placeholder="Twitter profile URL"
          className={'social-input'}
        />
        <div className='switch-btn'>
          <Switch defaultChecked onChange={onChangetoggle} />
        </div>
      </div>
      {isModalVisible ? (
        <PrivacyPolicyModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        <></>
      )}
      {isModalVisibleTD ? (
        <TermsandConditionModal
          isModalVisibleTD={isModalVisibleTD}
          setModalVisibleTD={setModalVisibleTD}
        />
      ) : (
        <></>
      )}
    </div>

  )
}
export default AppInformation;
