# Landing-page

To open the project,press on the green "code" button then download zip, then just open the index.html file.

The HTML structure: -
1.	Header elements which contain the navigation bar and the title of the page.
2.	The 4 main sections of the page.
The navigation bar is created dynamically using JavaScript. After creating the navigation bar each li element has a class name with the same id name of the main sections. Later when the section is active by the user a new id with ‘active’ attribute is added.

The CSS: -
A new #active section is created that when the section is activated it will have the effect in this section is applied.

The JavaScript: -
First we created the navigation bar by selecting all the sections in the DOM then looping on them and at each section a new li element is added to the header in the HTML.
Second we will select all the li elements made, then at the scroll event we will check the position of the user at the window and at each section an id with ‘active’ attribute is added as mentioned above. So, the #active CSS section is applied. 

