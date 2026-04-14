export default function Repeticao() {
  const lista = [1, 2, 3, 4, 5];

  return (
    <div>
      <h2> Estruturas de Repetição</h2>

      {lista.map((item) => (
        <p key={item}>Item {item}</p>
      ))}
    </div>
  );
}