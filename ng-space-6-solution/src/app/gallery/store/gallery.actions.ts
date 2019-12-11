import { createAction } from '@ngrx/store';
import { Memory } from '../models/memory';

export const FetchMemories = createAction('[Gallery] Fetch memories');
export const FetchMemoriesSuccess = createAction('[Gallery] Fetch memories success', (memories: Memory[]) => ({ memories }));
export const FetchMemoriesFailure = createAction('[Gallery] Fetch memories failure', () => ({ memories: [] }));

export const AddMemory = createAction('[Gallery] Add memory', (memory: Memory) => ({ memory }));

export const SelectMemory = createAction('[Gallery] Select memory', (memoryId: string) => ({ memoryId }));
