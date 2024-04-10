import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counterActions } from "../store/counterSlice";
import { privacyActions } from "../store/privacySlice";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(inputElement.current.value));

    inputElement.current.value = "";
  };
  const handleSubstract = () => {
    dispatch(counterActions.subtract(inputElement.current.value));
    inputElement.current.value = "";
  };
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controlled">
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          className="btn btn-success"
        >
          -1
        </button>
        <button
          type="button"
          onClick={handlePrivacyToggle}
          className="btn btn-warning"
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controlled">
        <input
          type="text"
          className="inputted"
          placeholder="Add a Number"
          ref={inputElement}
        />
        <button type="button" onClick={handleAdd} className="btn btn-info">
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubstract}
        >
          SUBTRACT
        </button>
      </div>
    </>
  );
};
export default Controls;
