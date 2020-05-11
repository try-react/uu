import React, { useState, createContext, FC, useEffect } from "react";

const initState = { name: "名無し", age: 0 };
type InitState = typeof initState;
const logic = (p: InitState["age"]) => (p < 20 ? "きっず" : "おとな");
type Label = ReturnType<typeof logic>;

const useCTX = () => {
  const user = useState(initState);
  const label = useState<Label>(logic(user[0].age));
  useEffect(() => label[1](logic(user[0].age)), [label, user]);

  return {
    state: {
      user: user[0],
      label: label[0],
    },
    dispatch: {
      user: {
        set: user[1],
      },
    },
  };
};

export const SomeContext = createContext<ReturnType<typeof useCTX>>(undefined!);

export const SomeContextProvider: FC = ({ children }) => {
  const { state, dispatch } = useCTX();

  return (
    <SomeContext.Provider value={{ dispatch, state }}>
      {children}
    </SomeContext.Provider>
  );
};
