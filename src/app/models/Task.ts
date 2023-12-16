import { Tag, DefaultTags } from "./Tag";

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    tagIds: number[]; // Array de identificadores de las etiquetas asociadas a la tarea
    getTags(): Tag[];
  }
  
export enum TaskStatus {
  pending = 'Pendiente',
  in_progress = 'En progreso',
  completed = 'Completada'
}

export function getTags(this: Task): Tag[] {
  // Lógica para cargar las etiquetas correspondientes a partir de los tagIds
  return this.tagIds
    .map(tagId => DefaultTags.find(tag => tag.id === tagId)) // Intenta encontrar la etiqueta correspondiente
    .filter(tag => tag !== undefined) as Tag[]; // Filtra los elementos undefined del array resultante
}
