import { Memory } from '../models/memory';

export interface GalleryState {
  memoriesState: MemoriesState;
}

export interface MemoriesState {
  memories: Memory[];
  selectedMemoryId: string;
}

export const initialState: MemoriesState = {
  memories: [],
  selectedMemoryId: null
}
