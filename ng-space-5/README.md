# NgSpace

Champion, your company is looking for a hero to work on its bleeding edge frontend application. This is no easy task, which is why we setup this quest for you to prepare yourself for the journey. Follow the todo list and keep an eye on the helpful links if you want to succeed.

## Todos

1. Install `@ngrx/store` `@ngrx/effects` `@ngrx/store-devtools` packages
2. Create a `GalleryState` and the `MemoriesState` using the snippets below and don't forget to create an initial value for the memoriesState.
3. Create three actions to describe fetching memories:
* FetchMemories
* FetchMemoriesSuccess (Should have memories as payload)
* FetchMemoriesFailure (Should have an empty array as payload)
4. Create a `memoriesReducer` function to update the memories property of the `GalleryState` upon receiving actions. Don't forget you will need an `ActionReducerMap<GalleryState>`
5. Create a getMemories selector to read the memories from the store
6. Add your store to the `GalleryModule`
7. Refactor the `GalleryComponent` to use the store to fetch the memories and then read them from the store
8. Hold on, we forgot to handle the `FetchMemories` action. Quick, create a `GalleryEffects` to call `getMemories` when a `FetchMemories` action is dispatched. Map it according to its success/failure results. Don't forget to register the `GalleryEffects` in the module.
9. Great, you have made ! We would like to add the newly created memory to the memories array in the store
* Create `AddMemory` action
* Handle the `AddMemory` in the `memoriesReducer`
* Dispatch the `AddMemory` from the `GalleryComponent`
10. Wouldn't be lovely if we could also move the selected memory to the state as well ?
* Create `SelectMemoryId` action with of payload of type `string`
* Update the `memoriesReducer` to update the selectedMemoryId property on receiving `SelectMemoryId` and even `FetchMemoriesSuccess`, `FetchMemoriesFailure` and `AddMemory`.
* Refactor the `GalleryComponent` to use the `SelectMemory` action
* Add a `getSelectedMemoryId` selector to read the selected memory id from the store
* `GalleryComponent` requires the selected memory from the store but we have `getMemories` and `getSelectedMemoryId` selectors. Find a way to combine the two selectors to produce `getSelectedMemory` selector
11. Bonus: Try to get rid of your last subscription using javascript closure !
 
## Further help

- https://ngrx.io/guide/store
- https://ngrx.io/guide/effects
- https://ngrx.io/guide/store/selectors
- https://ngrx.io/guide/store-devtools

## Expected results:

![Final results](ng-space-5.gif "At the end, your app should look like this")

## Resources

```javascript
export interface GalleryState {
  memoriesState: MemoriesState;
}

export interface MemoriesState {
  memories: Memory[];
  selectedMemoryId: string;
}
```
