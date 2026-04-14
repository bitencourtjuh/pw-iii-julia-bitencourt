import { useState } from "react";

export default function Decisao() {
  const [num, setNum] = useState(0);

  function renderNumero() {
    switch (num) {
      case 1:
        return "Você digitou UM";
      case 2:
        return "Você digitou DOIS";
      case 3:
        return "Você digitou TRÊS";
      default:
        return "Outro número";
    }
  }

  return (
    <div>
      <h2> Estruturas de Decisão</h2>

      <input
        type="number"
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <p>{renderNumero()}</p>
    </div>
  );
}