import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Input } from 'antd';
import { useState } from "react";
import 'antd/dist/antd.css';
import './Home.css';
import Games from "../data/MyGames.json";

export default function Library() {
  const navigate = useNavigate();
  const { Meta } = Card;

  const { Search } = Input;
  const onSearch = (input) => setInput(input);
  const[input, setInput] = useState([]);

  return (
    <>
      <div className="App">
        <h1 className="title">🔒 GameLocker</h1>
        <Search className="Search" placeholder="input search text" allowClear onSearch={onSearch} />
        <h1 className="subtitle">Your Games</h1>
        <div className="Content">

        <Row gutter={[16, 16]}>
        {(Games.games && Games.games.length > 0 && (input == "" || input == null)) ? Games.games.map((item,i) => (
              <Col key={i} span={12}>
              <Card
                cover={
                  <img
                    alt="example"
                    src={item.img}
                  />
                }
              >
                <Meta
                  className="Card"
                  // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={item.name}
                  description={item.hours+ " hours"}
                />
              </Card>
            </Col>
            )) : Games.games.filter(i => i.name == input).map((item, i) => (
              <Col key={i} span={12}>
              <Card
                cover={
                  <img
                    alt="example"
                    src={item.img}
                  />
                }
              >
                <Meta
                  className="Card"
                  // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={item.name}
                  description={item.players}
                />
              </Card>
            </Col>
              
            ))}
        </Row>
        </div>
      </div>
    </>
  );
}