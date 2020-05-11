/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext } from "react";
import { SomeContext } from "./SomeContext";

export const Bar: FC = () => {
  const { state, dispatch } = useContext(SomeContext);

  return (
    <>
      <a
        className="button"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          dispatch.user.set({ name: "Bar", age: 20 });
          // こんなのは、しっかりエラーになる
          // dispatch.user.set({ xx: "", age: 1 });
        }}
      >
        Bar ぼたん
      </a>

      <p>{state.user.name} ちゃん</p>
      <p>
        {state.user.age} 歳なので、{state.label}
      </p>
    </>
  );
};
