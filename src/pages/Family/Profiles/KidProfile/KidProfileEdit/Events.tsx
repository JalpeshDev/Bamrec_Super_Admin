import { Button, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import eventCard1 from "../../../../assets/Images/eventCard-1.png";
import eventCard2 from "../../../../../assets/Images/eventCard-2.png";
import eventCard3 from "../../../../../assets/Images/eventCard-3.png";
const Events = () => {
  return (
    <div>
      <Row>
        <Card style={{ width: 730}} title="Today's Events">
          <div className="register-box">
            <Button color="primary">Register a child</Button>
          </div>
          <p className="event-date">5 June, 09:00</p>
          <Meta
            avatar={<img src={eventCard2} />}
            title="Day in a Zoo"
            description="Ages 3 - 5"
          />
        </Card>
      </Row>
      <Row>
        <Card style={{ width: 730}}>
          <div className="register-box">
            <Button color="primary">Register a child</Button>
          </div>
          <p className="event-date">3 June, 09:00</p>
          <Meta
            avatar={<img src={eventCard3} />}
            title="Minions Camp"
            description="Ages 3 - 5"
          />
        </Card>
      </Row>
    </div>
  );
};

export default Events;
