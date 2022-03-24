// Importando react-router
import { Link, Outlet } from "react-router-dom";
//


const Main = () => {
  return (
    <>
      <div className="">
        <div className="">
          <div>
          </div>
          <div>
            <ul className="">
              <li className="">
                <Link to="/"></Link>
              </li>
              <li className="">
                <Link to="/"></Link>
              </li>
              <li className="link__item">
                <Link to="/"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Main;
