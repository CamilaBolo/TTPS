import useStyles from "./backgroundStyles";

const Background = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.background}`}>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default Background;