export interface Task {
    id: number;
    title: string;
    description: string;
    status: string;
    tags: number[]; // Array de identificadores de las etiquetas asociadas a la tarea
}

export enum Status {
  pending = 'Pendiente',
  in_progress = 'En Progreso',
  completed = 'Completada',
  canceled = 'Cancelada'
}