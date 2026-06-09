import classes from "./loading.module.css";
export default function LoadingPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}></div>
    </div>
  );
}
