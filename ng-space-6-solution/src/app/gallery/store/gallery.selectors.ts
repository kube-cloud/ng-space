import { createSelector } from '@ngrx/store';
import { GalleryState, adapter, MemoriesState } from './gallery.state';

export const getGalleryState = (state: GalleryState) => state;

export const getMemoriesState = createSelector(getGalleryState, (state) => state.memoriesState);
export const getSelectedMemoryId = createSelector(getMemoriesState, (state) => state.selectedMemoryId);

// export const getMemories = createSelector(getMemoriesState, (state) => state.memories);
// export const getSelectedMemory = createSelector(getMemories, getSelectedMemoryId, (memories, id) => id ? memories.find(m => m.name === id) : null);
const { selectEntities, selectAll } = adapter.getSelectors();

export const getMemories = createSelector(getMemoriesState, selectAll);
export const getMemoriesEntities = createSelector(getMemoriesState, selectEntities);
export const getSelectedMemory = createSelector(getMemoriesEntities, getSelectedMemoryId, (memories, id) => id ? memories[id] : null);
