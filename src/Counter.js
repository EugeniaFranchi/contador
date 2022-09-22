import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./app/actions/CounterActions";
import axios from "axios";

const styles = {
  container: {
    width: "500px",
    margin: "0 auto"
  }
};

const Counter = () => {
  const count = useSelector((store) => store.count.count);
  const dispatch = useDispatch();

  const increment = () => {
    return axios
      .put(process.env.REACT_APP_URL + "/increment/", null)
      .then(function (response) {
        const count = response.data.count
        console.log("Éxito!", count)
        dispatch(actions.set(count))
      })
      .catch(function (response) {
        console.log("Error", response.data)
      });
  }

  const decrement = () => {
    return axios
      .put(process.env.REACT_APP_URL + "/decrement/", null)
      .then(function (response) {
        const count = response.data.count
        console.log("Éxito!", count)
        dispatch(actions.set(count))
      })
      .catch(function (response) {
        console.log("Error", response.data)
      });
  }

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

export default Counter;
