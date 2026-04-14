import { useState } from "react";

export default function Logicos() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h2> Operadores Lógicos</h2>

      <input
        type="number"
        onChange={(e) => setNum(Number(e.target.value))}
      />

      <p>Entre 10 e 50? {num > 10 && num < 50 ? "Sim" : "Não"}</p>
      <p>Fora do intervalo (0-100)? {num < 0 || num > 100 ? "Sim" : "Não"}</p>
    </div>
  );
}