import { useState } from "react";

export default function Condicao() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2> Estruturas de Condição</h2>

      <input
        type="number"
        onChange={(e) => setNum(Number(e.target.value))}
      />

      {num > 0 ? (
        <p>Número positivo</p>
      ) : num < 0 ? (
        <p>Número negativo</p>
      ) : (
        <p>Número é zero</p>
      )}
    </div>
  );
}