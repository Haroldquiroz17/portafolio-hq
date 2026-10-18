import "./ProyectoCard.css";

type ProyectoCardProps = {
  titulo: string;
  imagen: string;
  categoria: string;
};

export default function ProyectoCard({
  titulo,
  imagen,
  categoria,
}: ProyectoCardProps) {
  return (
    <article className="proyecto-card">
      <img src={imagen} alt={titulo} />
      <div className="proyecto-card-contenido">
        <span>{categoria}</span>
        <h3>{titulo}</h3>
      </div>
    </article>
  );
}
