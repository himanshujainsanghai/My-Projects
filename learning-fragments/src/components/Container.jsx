import css from "./Container.module.css";
const Container = (props) => {
  return <div className={css.ContainerFull}>{props.children}</div>;
};
export default Container;
