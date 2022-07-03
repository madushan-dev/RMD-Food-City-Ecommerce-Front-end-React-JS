import React from 'react';
import { Rate, Tabs, Form, Input, Button, Row, Col,message } from "antd";
import ReviewExcept from "../../../other/ReviewExcept";
import { onAddReviews } from "../../../../common/reviewsServices";






const { TabPane } = Tabs;
const ReviewItem = ({ data }) => {
  console.log(data);
  return (
    <div className="product-detail-tab__reviews-item">
      <div className="product-detail-tab__reviews-item__avatar">
        <img
          src={'http://127.0.0.1:8000/images/users/'+data.customers.profile_photo}
          alt="Customer avatar"
        />
        <Rate defaultValue={data.rating} disabled />
      </div>
      <div className="product-detail-tab__reviews-item__content">
        <h5>{data.created_at}</h5>
        <h3>{data.customers.first_name+" "+data.customers.last_name}</h3>
        <p>{data.comment}</p>
      </div>
    </div>
  );
};

function ProductDetailTab({ fullDescription, reviews,productid }) {
  const onFinish = (values) => {
    values.product_id = productid;
    values.logged_user = localStorage.getItem('cus_id');

    onAddReviews({
      values,
      onSuccess: (data) => {
        message.success("Your review is successfully submitted!. Wait for Admin approve");
      },
      onError: (mes, err) => {
        message.error(mes);
        console.log(err);
      },
    });


  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="product-detail-tab">
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Description" key="1">
          <div className="product-detail-tab__description">
            {fullDescription}
          </div>
        </TabPane>
  
        <TabPane tab="Reviews" key="3">
          <div className="product-detail-tab__reviews">
            {reviews.map((item, index) => (
              <ReviewItem key={index} data={item} />
            ))}





              {

              localStorage.getItem('cus_id') ?      

                <div className="product-detail-tab__reviews-form">
              <h5>Add Review</h5>
              <Form
                name="review"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Row gutter={15}>
                  
                  <Col span={24}>
                    <Form.Item name="rate" label="Your rating">
                      <Rate />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="message">
                      <Input.TextArea placeholder="Message" />
                    </Form.Item>
                  </Col>
                  <Col>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" shape="round">
                        Submit Review
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </div> :
            <ReviewExcept/>

              }


            
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default React.memo(ProductDetailTab);
