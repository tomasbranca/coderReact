import { classes } from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={classes.loading}>
      <img
        src="https://i.kym-cdn.com/photos/images/original/001/930/426/ed2.png"
        alt=""
      />
      <h1>Cargando...</h1>
    </div>
  );
};

export default LoadingPage;
