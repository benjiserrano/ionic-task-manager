export interface Tag {
  id: number;
  name: string;
  color: string;
}

export const DefaultTags: Tag[] = [
  { id: 1, name: 'Trabajo', color: 'primary' },
  { id: 2, name: 'Estudiar', color: 'secondary' },
  { id: 3, name: 'Personal', color: 'warning' },
  { id: 4, name: 'Urgente', color: 'danger' }
];