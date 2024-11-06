import React from 'react';
import { Layout, Row, Col, Card, Button } from 'antd';
import CircleWithNumbers from './StatisticsCircle';
import Circletitre from './Circletitre';
import StatisticsCard from './Assetsdefined';
import Findingbycritic from './Findingbycritic';
import Ciritictitre from './Critictitre';
import Mostcritical from './Mostcritical';
import Assetgroups from './Assetgroups';
import Criticalfinding from './Criticalfindings';
import Lastscan from './Lastscans';
import Mostasset from './Mostasset';
import Groupsasset from './Groupsasset';
import Svss from './Svss';


const { Content } = Layout;

const Dashboard = () => {
  return (
    <Layout >
      <Content style={{ padding: '24px', minHeight: 'calc(100vh - 64px)' }}>
        <Row gutter={[24, 24]} justify="space-around">
          <Col span={8}>
            <Card style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>
              <h1 style={{ textTransform: 'uppercase', color: '#738FE5 ', fontFamily: 'fantasy', fontSize: '20px', letterSpacing: '2px' }}> Running Scans</h1>
              <div style={{ textAlign: 'center', marginTop: '20px', marginLeft: '90px' }}>
                <CircleWithNumbers />
                <br />
              </div>
              <Circletitre />

            </Card>

          </Col>
          <Col span={8}>
            <Card style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '10px' }} >

              <h1 style={{ textTransform: 'uppercase', color: '#738FE5 ', fontFamily: 'fantasy', fontSize: '20px', letterSpacing: '2px' }}>

                Assets Defined
                <span style={{ color: '#BEC0C7', marginLeft: '10px', fontSize: '20px', fontFamily: 'sans-serif' }}>67</span></h1>


              <StatisticsCard />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '300px', padding: '10px' }}>
              <h1 style={{ textTransform: 'uppercase', color: '#738FE5', fontFamily: 'fantasy', fontSize: '20px', letterSpacing: '2px' }}>Running Scans</h1>
              <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'left ' }}>
                <Findingbycritic />
                <div style={{ marginLeft: '80px' }}>
                  <Ciritictitre />
                </div>
              </div>
            </Card>
          </Col>
          {/* Add more cards as needed */}
          <Col span={12}>
            <Card >
              <div style={{ marginBottom: '10px' }}>
                <h1 style={{ color: '#738FE5', fontFamily: 'sans-serif', fontSize: '20px', letterSpacing: '2px' }}>Most critical assets</h1>
              </div>
              <div className="most-critical-table">
                <Mostcritical />
              </div>
            </Card>
          </Col>




          <Col span={12}>
            <Card >
              <h1 style={{ color: '#738FE5', fontFamily: 'sans-serif', fontSize: '20px', letterSpacing: '2px' }}>Most critical asset groups</h1>
              <div className="most-critical-table">
                <Assetgroups />
              </div>
            </Card>
          </Col>

          <Col span={12}>
            <Card >

              <h1 style={{ color: '#738FE5', fontFamily: 'sans-serif', fontSize: '20px', letterSpacing: '2px' }}>Most critical assets</h1>

              <div className="most-critical-table">
                <Mostasset />
              </div>
            </Card>
          </Col>




          <Col span={12}>
            <Card >
              <h1 style={{ color: '#738FE5', fontFamily: 'sans-serif', fontSize: '20px', letterSpacing: '2px' }}>Most critical asset groups</h1>
              <div className="most-critical-table">
                <Groupsasset />
              </div>
            </Card>
          </Col>

          <Col span={12}>
            <Card >
              <h1 style={{ color: '#738FE5', fontFamily: 'sans-serif', fontSize: '20px', letterSpacing: '2px' }}>Most critical findings</h1>
              <div className="most-critical-table">
                <Criticalfinding />
              </div>
            </Card>
          </Col>

          <Col span={12}>
            <Card style={{ height: '100%' }} >
              <h1 style={{ color: '#738FE5', fontFamily: 'sans-serif', fontSize: '20px', letterSpacing: '2px' }}>Last scans</h1>
              <div className="most-critical-table">
                <Lastscan />

              </div>
            </Card>
          </Col>


          <Col span={8}>
            <Card  >

              <h1 style={{ color: '#738FE5', fontFamily: 'sans-serif', fontSize: '20px', letterSpacing: '2px' }}>Top CVSS score /findings</h1>

              <Svss />


            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%' }}>

              <h1 style={{  color: '#738FE5 ', fontFamily: 'sans-serif', fontSize: '20px', letterSpacing: '2px' }}>

                New alerts
                <span style={{ color: '#BEC0C7', marginLeft: '10px', fontSize: '20px', fontFamily: 'sans-serif' }}>320</span></h1>
              <Row justify="center" gutter={[8, 8]}> {/* Espacement plus court entre les boutons */}
                <Col span={6} sm={6}>
                  <Button style={{ backgroundColor: 'yellow', color: 'black' }}>Low: 8</Button>

                </Col>
                <Col span={6} sm={6}>
                  <Button style={{ backgroundColor: 'blue', color: 'white' }}>Info: 302</Button>
                </Col>
                <Col span={5} sm={5}>
                  <Button style={{ backgroundColor: 'red', color: 'white' }}>High: 0</Button>
                </Col>
              </Row>
              <br />

              <Row justify="center" gutter={[8, 8]}> {/* Espacement plus court entre les boutons */}
                <Col span={6} sm={6}>
                  <Button style={{ backgroundColor: 'red', color: 'white' }}>critical: 0</Button>
                </Col>
                <Col span={6} sm={6}>
                  <Button style={{ backgroundColor: 'orange', color: 'white' }}>Medium: 10</Button>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ height: '100%' }} >

              <h1 style={{  color: '#738FE5 ', fontFamily: 'sans-serif', fontSize: '20px', letterSpacing: '2px' }}>

               Active engines
                <span style={{ color: '#BEC0C7', marginLeft: '10px', fontSize: '20px', fontFamily: 'sans-serif' }}>0</span></h1>
                <Row justify="center" gutter={[8, 8]}>
          <Col span={8} sm={8}>
            <Button style={{ backgroundColor: '#202949', color: 'white' }}>Total engines : 8</Button>
          </Col>
          <Col span={8} sm={8}>
            <Button style={{ backgroundColor: '#202949', color: 'white' }}>Total pelices : 10</Button>
          </Col>
        </Row>

            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;
