import { MemoryType } from './memory-type.enum';

export interface Memory {
  id: number;
  url: string;
  name: string;
  type: MemoryType
}
