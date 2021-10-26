import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import { routes } from "../../constants/routes";
import HomeButtons from "./HomeButtons";

const mapPagetoIcons = () => {
  return {
    [routes.HOME]: () => <HomeButtons/>,
  };
};

const RightItems = () => {
  const { path } = useRouteMatch();
  const [rightItems, setRightItems] = useState(mapPagetoIcons()[path]);

  useEffect(() => {
    setRightItems(mapPagetoIcons()[path]);
  }, [path]);

  return <div >{rightItems}</div>;
};

export default RightItems;
