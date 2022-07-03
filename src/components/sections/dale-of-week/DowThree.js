import React from "react";
import { Button, Col, Row } from "antd";
import Countdown, { zeroPad } from "react-countdown";
import Link from "next/link";

import SectionTitle from "../../other/SectionTitle";
import { formatCurrency } from "../../../common/utils";
import Container from "../../other/Container";

function DowThree({ countdownLast = 100000000 }) {
  return (
    <div className="dow-three">
      <Container>
        <div className="dow-three-wrapper">
          <Row>
            <Col md={12}>
              <div className="dow-three-image up-down-anim">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/banners/banner2.png"
                  }
                  alt=""
                />
              </div>
            </Col>
            <Col md={10}>
              <div className="dow-three-content">
                <SectionTitle
                  title="Weekly Deal Pack"
                  className="-coffee -left"
                />
                <h5>
                  {formatCurrency(2550)} <span> / Pakage</span>
                </h5>
                <p>
                  Weekly special pack contains Fresh Milk 1L Package + Munchee Tikiri Maari 300g Packet + Maggiee Nooddles + Maliban Cream Cracker
                </p>
                <Countdown
                  date={Date.now() + countdownLast}
                  renderer={({ days, hours, minutes, seconds }) => {
                    return (
                      <div className="dow-three-countdown">
                        <div className="dow-three-countdown-item">
                          <h6>{zeroPad(days)}</h6> <span>days</span>
                        </div>
                        <div className="dow-three-countdown-item">
                          <h6>{zeroPad(hours)}</h6> <span>hr</span>
                        </div>
                        <div className="dow-three-countdown-item">
                          <h6>{zeroPad(minutes)} </h6>
                          <span>min</span>
                        </div>
                        <div className="dow-three-countdown-item">
                          <h6>{zeroPad(seconds)}</h6> <span>sec</span>
                        </div>
                      </div>
                    );
                  }}
                />
                <Button type="primary" shape="round">
                  <Link href={process.env.PUBLIC_URL + "/shop/"}>
                    <a href={process.env.PUBLIC_URL + "/shop/"}>
                      Shop now
                    </a>
                  </Link>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default React.memo(DowThree);
