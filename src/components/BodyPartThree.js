import React from 'react';
import { Card,Button } from 'antd';

import '../css/bodyPartThree.css';
import {  UserOutlined} from '@ant-design/icons';
class BodyPartThree extends React.Component{
    render(){
        const { Meta } = Card;
        return(
            <div className="threeP">
                <h1>How We</h1>
               <div className="threeA">
               <Card
    hoverable
    style={{ width:200 }}
    cover={<img alt="example" src="https://via.placeholder.com/600/f66b97" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  <Card
    hoverable
    style={{ width:200 }}
    cover={<img alt="example" src="https://via.placeholder.com/600/f66b97" height="200px" width="100px" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
               </div>
               <Button type="primary" block>
      Primary
    </Button>
            </div>
        )
    }
}
export default BodyPartThree;