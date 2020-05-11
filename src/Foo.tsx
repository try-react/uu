/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from "react";
import { SomeContext } from "./SomeContext";

export const Foo: FC = () => {
  const { state, dispatch } = useContext(SomeContext);

  return (
    <>
      <a
        className="button"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          dispatch.user.set({ name: "Foo", age: 10 });
        }}
      >
        🖌ぼたん
      </a>
      <p>{state.user.name}</p>
      <p>{state.user.age}</p>
      <p>{state.label}</p>
    </>
  );
};
