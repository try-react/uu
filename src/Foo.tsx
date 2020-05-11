import React, { FC, useContext } from "react";
import { SomeContext } from "./SomeContext";

export const Foo: FC = () => {
  const { state, dispatch } = useContext(SomeContext);

  return (
    <>
      <button onClick={() => dispatch.user.set({ name: "Foo", age: 10 })}>
        Foo
      </button>
      <p>{state.user.name}</p>
      <p>{state.user.age}</p>
      <p>{state.label}</p>
    </>
  );
};
