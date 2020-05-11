import React, { FC, useContext } from "react";
import { SomeContext } from "./SomeContext";

export const Bar: FC = () => {
  const { state, dispatch } = useContext(SomeContext);

  return (
    <>
      <button onClick={() => dispatch.user.set({ name: "Bar", age: 20 })}>
        Bar
      </button>
      <p>{state.user.name}</p>
      <p>{state.user.age}</p>
      <p>{state.label}</p>
    </>
  );
};
