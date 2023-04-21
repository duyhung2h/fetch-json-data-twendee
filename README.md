# fetch-json-data-twendee
A mockup website for fetching given JSON data, providing for Twendee's interview assignment

To run this project, first you need to write these command through the terminal (given that you have already installed node):
```
npm install
```

Then to run the project, navigate into the `fetch-json-data-twendee` folder then write this into terminal to start the project:

```
npm start
```

Alternatively, you can view this website on a registered host (using firebase hosting) here:
https://fetch-json-data-twendee.web.app/

# Project Explaination

This project is a simple website displaying a data table of different users, using an existing API. It is a simple table with different features. 

The table displays a list of 100 users, and there's a pagination bar right here, that allows this table to be separated into multiple pages. 

You can change the number of rows to be displayed.

By clicking on the first row of each individual column, you can apply ascending/descending filter to user's full name, or username.

![image](https://user-images.githubusercontent.com/40296674/233270055-bfb1e1ea-3a21-4b57-b258-39a2f4631238.png)

This is a simple ReactJS website, you can view and run the code yourself in the github link that I've sent you through an email, but alternatively, you can visit the link in this github project's description, which will take you into a hosted website, which I implemented using Firebase.

I used create-react-app to generate the code base, so nothing too big. This project also has only one page, so no need for routing, so instead, I just code my function into an existing file called app.js. 

![image](https://user-images.githubusercontent.com/40296674/233563447-2c721adf-d699-4211-8b44-a8b5b1fe701c.png)

Up top of the file is all of the project's library declaration. In this project, since there's an existing React library for a detailed table, I used DataTable from the react-data-table-component library, instead of displaying a table using conventional methods like a javascript for loop. 

From there, I just need to declare a column variable with some JSON data assigned, signifying the first row of the table, with assigned names for data fetching which I will explain later. 

![image](https://user-images.githubusercontent.com/40296674/233563805-a970d483-8e26-42d1-8116-fc02836f5009.png)


In the App nest, the first rows are useState hook declarations, to preserve variables value between each function call. After that is fetchData function which uses javascript fetch, to fetch data from an API URL, in the form of JSON. After that, I deconstruct the JSON data into another readable JSON list, to integrate those data into the data table. I also used another useState hook to determine whether the data is loaded or not, called isLoaded, and in case of any error occurring, the error variable will be parsed with some message.

Here we have different handling functions that triggers whenever you interact with the Data Table, and an useEffect hook that trigger during website's first load, which call the initial fetchdata function.

![image](https://user-images.githubusercontent.com/40296674/233563876-eb77d947-6d6d-4caa-85db-70d78267686f.png)

And in the last part of this code is where the magic happens. If the website is not in a loading state, or occurs any error, the App nest will return a DataTable component with these parameters. The most important parameters are the columns, which takes data from the column variable to turn it into viewable columns. And the data parameter is to take in JSON data to turn them into readable data inside the table.

On top of that, there are parameters for interaction handle like onChangePage, onSort, and onChangeRowsPerPage.

