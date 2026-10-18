export type Proyecto = {
  titulo: string;
  categoria: string;
  estado: string;
  imagen: string;
  descripcion: string;
  github?: string;
  demo?: string;
};

export const proyectos: Proyecto[] = [];
