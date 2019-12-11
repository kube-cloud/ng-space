import { MemoryType } from './memory-type.enum';

export interface Memory {
  url: string;
  name: string;
  type: MemoryType
}
