import { useState } from "react";

export default function Aritmetica() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2> Operações Aritméticas</h2>

      <input
        type="number"
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <p>Soma: {num + 10}</p>
      <p>Subtração: {num - 5}</p>
      <p>Multiplicação: {num * 2}</p>
      <p>Divisão: {num / 2}</p>
    </div>
  );
}