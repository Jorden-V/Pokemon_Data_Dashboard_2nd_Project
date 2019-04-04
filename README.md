# Data Dashboard - Pokemon

This data dashboard has information on 800 Pokemon. The purpose of this dashboard is to give users an overview on all Pokemon and how their attributes are split.
The user can also filter down to an individual Pokemon to get their speicifc statistics.
Finally the user can select by statistic then click on the dropdown bar which will reveal which Pokemon have the stats they have selected.

Dashboard link below:

https://jordenci.github.io/Milestone-Project-2/.
 
## UX
 
This dashboard was designed for new and existing fans of the Pokemon franchise. Fans can either use the dashboard as it is presented to get an overview on all Pokemon or filter down to view the individuals stats.

### User stories

- As an existing fan I want the ability to know the heights of each Pokemon so I am able to make my cosplay costume as realistic as possible.
- As an existing fan I want to know which Water Pokemon are Blue so i can decorate my bedroom with Blue Water Pokemon.
- As a new fan I want to learn how many Legendary Pokemon there are so I can start to attempt to collect them all.
- As an new fan I need to know how many Pokemon there are in total so i can understand how many I need to collect.

## Wireframes

TBC

## Features


- Header: The name 'Pokemon Dashboard' is prominent introducting the content of the dashboard.
- Modal: '?' Modal top right corner (Center screen for mobile). Gives the user an overview of the functionality and how to use the dashboard.
- Pokemon selector: Allows the user to select an individual Pokemon to filter the stats to. In reverse the user can also select data and the drop down will reveal which Pokemon match that data.
- Number of Pokemon: Without any filters this number shows the total number of Pokemon. As you filter down the number will change to confirm how many Pokemon match the filters.
- Pokemon stats row chart: This chart split all the Pokemon into their 'type' groups.
- Pokemon generation pie chart: This pie chart identifies how many Pokemon are in each generation as well as identifies the filtered Pokemons generation.
- Legendary Pokemon pie chart: This pie chart identifies how many Pokemon are and are not Legendary as well as confirms whether the filtered Pokemon are legendary or not.
- Pokemon color pie chart: This pie chart identifies how many Pokemon are of what color and also confirms the color of the filtered Pokemon.
- Pokemon stats composite chart: #########################
- Reset All button: This button renders all DC charts in turn reseting any filters that had been selected previously.
- 
### Features Left to Implement

In the future I would like to impliment the below features.
- The ability to incorportate images of each Pokemon depending on the filter.
- The ability to export all highlighted data into an easy to read document that users can take away with them.
- 
## Technologies Used

- [Bootstrap 3.3.7](https://stackpath.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css)  
     - This was used for the Navbar and grid system used throughout the dashboard.

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
    - [D3.js](D3.js) 
    - [DC.js](https://dc-js.github.io/dc.js/) 
    - [Crossfilter.js](http://square.github.io/crossfilter/) 
    - These were used for the creation and manipulation of the data-visualization elements.

- [D3-queue.js](https://github.com/d3/d3-queue) 
     - This was used to load the dataset before running any other files.

- [jQuery](https://jquery.com/) 
     - This was used in conjunction with Bootstrap for the modal.


- [Font Awesome](https://use.fontawesome.com/releases/v5.8.0/css/all.css) 
     - This was used for the question mark icon which links to the modal.
    
- [Hover.css](https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css) 
     - I used this to give the clickable links throught the dashboard the Hover Grow effect to give the user confirmation the link is clickable.

## Testing

- I used [This HTML validator](https://validator.w3.org/) to ensure my code was legal.
- I used [This CSS validator](https://jigsaw.w3.org/css-validator/) to ensure my CSS was legal.
- I used [This JS validator](https://jigsaw.w3.org/css-validator/) to ensure my JavaScript was legal.

1. New user wanting information on the band:
    1. User lands on the 'about' page first.

2. Existing fan wants to follow all the bands social media:
    1. Social links are located in the footer of each page to ensure visibility across the site.

3. Fan wants to book tickets to the bands tour:
    1. User lands on the 'about' page where there is a call to action banner across the top of the page indicating tour dates are available.

4. Existing or potential fan wants to hear/see the latest music:
    1. User selects Music tab fromt he Navbar.

4. Contact form:
    1. Go to the "Contact" page

## Viewport and responsive testing



## Deployment

I used GitHub Pages to deploy my website by following the steps below:

1. I have created a repository in GitHub.

2. I initialised git from the terminal in Cloud9:
  
    `git init`

3. I added the files that I was working on to the Staging area by using: 

    `git add .`

4. I ran the commit command with the first commit

    `git commit -m “initial commit`

5. I copied from GitHub the following path and I have run it in the cloud9 terminal in order to indicate where is my remote repository:

    `git remote add origin https://jordenci.github.io/Milestone-Project-2/`

    `git push -u origin master`

6. Then from my GitHub repository I have gone to settings, I have selected the master branch, I have saved and the website was published at:

    https://jordenci.github.io/Milestone-Project-2/ 

7. After this was done I have ran regular commits after every important update to the code, and I pushed the changes to GitHub pages.


### Content
- The text for 'about us' was copied from [The Monkees Wikipedia article](https://en.wikipedia.org/wiki/The_Monkees)
- The text for the member info was copied from their respective wikipeadia pages.

  - [Davy Jones](https://en.wikipedia.org/wiki/Davy_Jones_(musician))

  - [Micky Dolenz](https://en.wikipedia.org/wiki/Micky_Dolenz)

  - [Michael Nesmith](https://en.wikipedia.org/wiki/Michael_Nesmith)

  - [Peter Tork](https://en.wikipedia.org/wiki/Peter_Tork)
  
### Media
- Most media used through the site were the assets provided with the exception of the below.

1. Band Logo & testimonal photos.
  - These were found via Google Advanced search function.  

### Acknowledgements

- I received inspiration for this project from a combination of the Whiskey Drop mini project as well as the CV mini project. I also found bootstraps documentation very helpful.