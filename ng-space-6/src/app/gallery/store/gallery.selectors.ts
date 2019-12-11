import { createSelector } from '@ngrx/store';
import { GalleryState } from './gallery.state';

export const getGalleryState = (state: GalleryState) => state;

export const getMemoriesState = createSelector(getGalleryState, (state: GalleryState) => state.memoriesState);

export const getMemories = createSelector(getMemoriesState, (state) => state.memories);
export const getSelectedMemoryId = createSelector(getMemoriesState, (state) => state.selectedMemoryId);
export const getSelectedMemory = createSelector(getMemories, getSelectedMemoryId, (memories, id) => id ? memories.find(m => m.name === id) : null);
