import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import { FetchMemoriesSuccess, FetchMemoriesFailure, AddMemory, SelectMemory } from './gallery.actions';
import { initialState, adapter, GalleryState } from './gallery.state';

const memoriesReducer = createReducer(initialState,
  on(FetchMemoriesSuccess, FetchMemoriesFailure, (state, { memories }) => adapter.addAll(memories, { ...state, selectedMemoryId: null })),
  on(AddMemory, (state, { memory }) => adapter.addOne(memory, { ...state, selectedMemoryId: memory.name })),
  on(SelectMemory, (state, { memoryId }) => ({ ...state, selectedMemoryId: memoryId })),
)

export const reducers: ActionReducerMap<GalleryState> = {
  memoriesState: memoriesReducer,
};
