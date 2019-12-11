import { Memory } from '../models/memory';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface GalleryState {
  memoriesState: MemoriesState;
}

// export interface MemoriesState {
//   memories: Memory[],
//   selectedMemoryId: string;
// }


export interface MemoriesState extends EntityState<Memory> {
  selectedMemoryId: number;
}

export const adapter: EntityAdapter<Memory> = createEntityAdapter<Memory>({
  selectId: (memory) => memory.name
});

export const initialState: MemoriesState = adapter.getInitialState({
  selectedMemoryId: null,
});
