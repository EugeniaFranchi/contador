export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const DATOS = "DATOS";

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const datos = (payload) => ({
  type: DATOS,
  payload
});
