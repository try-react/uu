import React, { FC } from "react";
import { SomeContextProvider } from "./SomeContext";
import { Foo } from "./Foo";
import { Bar } from "./Bar";

export const App: FC = () => (
  <SomeContextProvider>
    <Foo />
    <Bar />
  </SomeContextProvider>
);
