# NgSpace

Champion, your company is looking for a hero to work on its bleeding edge frontend application. This is no easy task, which is why we setup this quest for you to prepare yourself for the journey. Follow the todo list and keep an eye on the helpful links if you want to succeed.

## Todos

1. Add form feature to the `ng-space` application
2. Our users would like to filter launches by year:
* Add a search box to the `Rocket` component toolbar using the snippet below
* Call the API `https://api.spacexdata.com/v3/launches?id=${rocket_id}&launch_year=${launch_year}` everytime the year value is changed by the user.
3. Our log analysis shows that our customers sometimes use letters instead of numbers in our search box. This leads to a bad request on the API side. Help out the users by validating their input using this year regex pattern `^[0-9]{4}$` before calling the API.
4. Because SpaceX was founded in 2002, there is no launches before that year. How about you add another validation for that
5. Oh no ! Our users are now confused because they don't know what's wrong with their input. Display a custom error message per type of error using the snippet below.
6. Our friends at the backend team are complaining that we are calling the API too often. perhaps we should wait some 200 milliseconds for the user to finish typing before sending the request to the back. Don't forget to fix the `Rocket` component test `should display 3 launches when the user types 2010 in the search box`.
7. Every launch is a success, this is why our best developer created a dedicated gallery module to share those amazing moments:

* Add the `GalleryModule` to the application
* Navigate to `gallery` to verify everything is in order
* Although his top skills, our developer forgot to wire the add button to our `AddMemoryDialog`, please do something about it !
* It seems that the form is not well set, we need your help to configure the form so that `name`, `url` fields are required while `type` field is set to `'IDK'` by default.
* Don't forget to send the data back to the `Gallery` component and add it to our `memories` list. Becareful about the `cancel` button ;)
* Users reported that our `Statistics` component doesn't seem to update its values when a new memory is added, can you take a look ?
 
## Further help

- https://angular.io/guide/reactive-forms#reactive-forms
- https://angular.io/api/forms/FormControl#usage-notes
- https://documenter.getpostman.com/view/2025350/RWaEzAiG?version=latest
- https://www.learnrxjs.io/ 
- https://angular.io/api/forms/Validators
- https://www.learnrxjs.io/operators/filtering/debouncetime.html
- https://angular.io/api/core/testing/fakeAsync
- https://material.angular.io/components/dialog/overview
- https://angular.io/api/forms/FormGroup
- https://angular.io/guide/lifecycle-hooks#onchanges

## Resources:

```html
<!-- search box-->
<div class="search-box">
  <input type="text" />
</div>
  ```

```css
/* search box styles */
.search-box {
  display: flex;
  flex-flow: column;
  height: 50px;
  span {
    color: red;
  }
}
```

```html
<!-- search box errors-->
<span>This is not a valid year format</span>
<span>No launches were scheduled before 2002</span>
```


## Goals : Play with forms in Angular

- Learn about forms in SPA

- Create a new FormControl

- Use validators

- Play with RxJs and understand its async nature
