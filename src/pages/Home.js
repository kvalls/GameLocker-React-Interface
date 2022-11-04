import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Input } from 'antd';
import 'antd/dist/antd.css';
import './Home.css';
import Games from "../data/Games.json";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const { Meta } = Card;

  const handleClick = () => {
    navigate("/all-routes");
  }

  const { Search } = Input;
  const onSearch = (input) => setInput(input);
  const[input, setInput] = useState([]);

  return (
    <>
      <h1 className="title">🔒 GameLocker</h1>
      <Search className="Search" placeholder="input search text" allowClear onSearch={onSearch} />
      <h1 className="subtitle">Top Games of the Week</h1>
      
      <div className="Content">
        <Row gutter={[16, 16]}>
        {/* .filter(i => i.name == input) */}
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
                  description={item.players+" players"}
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
      {/* <div>
        <table border="2">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Department</th>
            </tr>
                          // Mapping array of objects
            {Games.games.map((item, i) => (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </>
  );
}