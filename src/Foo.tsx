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
        Foo ぼたん
      </a>
      <p>{state.user.name} ちゃん</p>
      <p>
        {state.user.age} 歳なので、{state.label}
      </p>
    </>
  );
};
