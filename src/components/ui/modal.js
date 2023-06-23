import reactDom from "react-dom";
import classes from "./modal.module.css";
import { useDispatch } from "react-redux";
import { closeUserForm } from "../redux/slices/usersSlice";

const BackDrop = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className={classes.backdrop}
      onClick={() => dispatch(closeUserForm())}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const overlay = document.getElementById("overlays");
  return (
    <>
      {reactDom.createPortal(<BackDrop />, overlay)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlay
      )}
    </>
  );
};
export default Modal;
