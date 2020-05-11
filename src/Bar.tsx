import React, { FC, useContext } from "react";
import { SomeContext } from "./SomeContext";

export const Bar: FC = () => {
  // 動作検証用
  const { state, dispatch } = useContext(SomeContext);

  return (
    <>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dispatch.user.set({ name: "Bar", age: 20 });
        }}
      >
        Bar ぼたん
      </button>
      <p>{state.user.name} ちゃん</p>
      <p>
        {state.user.age} 歳なので、{state.label}
      </p>
    </>
  );
};
