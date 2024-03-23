import { useState } from "react";
import cls from "./Counter.module.scss";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter((prev) => (prev += 1));
  };

  return (
    <div className={cls.counter}>
      <p>Счётчик: {counter}</p>
      <button className={cls.button} onClick={increment}>
        increment
      </button>
    </div>
  );
};
