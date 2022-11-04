import { useEffect } from "react";
export default function MenuItem(props) {

  useEffect(() => {

  }, []);

  return (
    <>

      <a-assets>
        <canvas id="my-canvas" width="500" height="100"></canvas>
      </a-assets>

      <a-plane available="true"
        position={`${props.x} ${props.y} -2`} scale="1 0.2 0" draw-canvas></a-plane>


     
    </>
  );
}