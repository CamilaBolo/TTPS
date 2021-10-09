import RightItems from "../Header/RightItems";
import useStyles from "./headerStyles";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <RightItems />
    </div>
  );
};

export default Header;