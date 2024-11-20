# ✨ Gallery Project ✨

## 🛠 Tools used

[![My Skills](https://skillicons.dev/icons?i=js,html,css,)](https://skillicons.dev)

![Description](https://img.shields.io/badge/Description-purple?style=for-the-badge)
>
>This project involves creating and rendering a gallery markup based on data from the `galleryItems` array and a provided gallery item template. The key features and tasks implemented in this project are as follows:
>
>1. **Create and Render Gallery Markup**: 
>   - Utilize the `galleryItems` data array and provided gallery item template to generate and render gallery items.
>
>2. **Delegate Events to Gallery**:
>   - Delegate events to the `ul.gallery` element to handle click events and retrieve the URL of the large image.
>
>3. **Integrate basicLightbox Library**:
>   - Connect the script and styles from the basicLightbox modal window library.
>   - Use the CDN service `jsdelivr` to add the minimized files (.min) from the basicLightbox library to the project.
>
>4. **Open Modal on Gallery Item Click**:
>   - Open a modal window by clicking on a gallery item.
>   - Refer to the basicLightbox documentation and existing examples to implement this functionality.
>
>5. **Update Image Src in Modal**:
>   - Before opening the modal window, replace the value of the `src` attribute of the `<img>` element in the modal with the large image URL.
>   - Use the existing modal markup from the basicLightbox library examples.
>
>6. **Gallery Items Markup**:
>   - Store the link to the original image in the `data-source` attribute of the `<img>` element and specify it in the `href` attribute.
>   - Do not add any additional HTML tags or CSS classes other than those in the provided template.
>
>7. **Disable Default Link Behavior**:
>   - Ensure that clicking on the image wrapped in a link does not redirect the user to another page by default.
>
>8. **Close Modal with Escape Key**:
>   - Although not required for submission, implement functionality to close the modal window when the Escape key is pressed.
>   - Ensure this occurs only when the modal window is open.
>   - Utilize the method provided by the basicLightbox library to programmatically close the modal window.
>

![Exercise 1 ](https://img.shields.io/badge/Exercise%201-purple?style=for-the-badge)
> - basicLightbox Library
>

Create a gallery with the ability to click on its elements and view the image at full size in a modal window. Complete this task in files 01-gallery.html and 01-gallery.js. Divide it into several subtasks:

1. Creating and rendering markup based on data from the galleryItems array and the provided article template from the gallery.
2. Delegating to ul.gallery and obtaining the URL of the full-size image.
3. Connecting the script and styles from the basicLightbox modal window library. Use the CDN service jsdelivr and add links to the project for the minified (.min) files of the library used.
4. Opening a modal window by clicking on an element of the gallery. Refer to the documentation and existing examples for implementation.
5. Replacing the src attribute value of the <img> element in the modal window before opening. Utilize the existing markup for the modal window from the examples of the basicLightbox library.
   
 **Modify Gallery Item Appearance**:
   - Adjust the appearance of the gallery card using the provided template.
     
 ```html
<li class="gallery__item">
     <a class="gallery__link" href="large-image.jpg">
       <img
         class="gallery__image"
         src="small-image.jpg"
         data-source="large-image.jpg"
         alt="Image description"
       />
     </a>
   </li>
   ```

![Exercise 2](https://img.shields.io/badge/Exercise%202-purple?style=for-the-badge)
> - SimpleLightbox Library
>

1. **Reuse Code from Exercise 1**:
   - Reuse the code written in the first exercise to create and render the gallery markup based on the `galleryItems` data array.
   - Modify the appearance of the gallery card slightly using this template:
     
```html
  <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li>
```

2. **Integrate SimpleLightbox Library**:
   - Connect the script and styles from the SimpleLightbox library.
   - Use the CDN service `cdnjs` to add the files `simple-lightbox.min.js` and `simple-lightbox.min.css` to the project.

3. **Initialize SimpleLightbox**:
   - Initialize the SimpleLightbox library after creating and adding gallery elements to the `ul.gallery`.
   - Refer to the SimpleLightbox documentation, specifically the "Usage" and "Markup" sections, for implementation details.

4. **Add Alt Text with Options**:
   - Refer to the "Options" section in the documentation to add descriptive text to the `alt` attribute of the image.
   - Position the alternative text at the bottom and ensure it appears 250 milliseconds after the image opens.
