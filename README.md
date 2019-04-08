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

For mobile view the intent was always to stack the content vertically so no wireframes were constructed. I did however draw my ideal up for desktop functionality.

1. [desktop wireframe](https://ibb.co/QnCqq9F)

As you can see there were some slight changes from the original design and planned. Originally there was planned to be a composite chart at the bottom of the page that displayed Pokemon stats. Since that idea I decided to split the stats into a histogram and number display. Due to the number display appearing at the top once an individual Pokemon has been selected I opted to move the stats to the top of the page. 

I had also since decided to include a reset button at the top and bottom of the page which were not included in the original design.

## Features

- Header: The name 'Pokemon Dashboard' is prominent introducting the content of the dashboard.
- Modal: '?' Modal top right corner (Center screen for mobile). Gives the user an overview of the functionality and how to use the dashboard.
- Pokemon selector: Allows the user to select an individual Pokemon to filter the stats to. In reverse the user can also select data and the drop down will reveal which Pokemon match that data.
- Number of Pokemon: Without any filters this number shows the total number of Pokemon. As you filter down the number will change to confirm how many Pokemon match the filters.
- Stats number display (hidden unless filtered to a specific Pokemon): These number displays show the stat of the individual Pokemon.
- Stats histogram: This bar chart displays all Pokemons total stats summed to give an idea of the average total level shared across all Pokemon.
- Height & Weight bar graph: Simply displays weight and height ranges of all Pokemon and confirms which range the filtered Pokemon will fall within.
- Pokemon stats row chart: This chart split all the Pokemon into their 'type' groups.
- Pokemon generation pie chart: This pie chart identifies how many Pokemon are in each generation as well as identifies the filtered Pokemons generation.
- Legendary Pokemon pie chart: This pie chart identifies how many Pokemon are and are not Legendary as well as confirms whether the filtered Pokemon are legendary or not.
- Pokemon color pie chart: This pie chart identifies how many Pokemon are of what color and also confirms the color of the filtered Pokemon.
- Reset All button: This button renders all DC charts in turn reseting any filters that had been selected previously.

### Features Left to Implement

In the future I would like to impliment the below features.
- The ability to incorportate images of each Pokemon depending on the filter.
- The ability to export all highlighted data into an easy to read document that users can take away with them.

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
     - This was used for the question mark icon which links to the modal as well as the GitHub icon in the footer.
    
- [Hover.css](https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css) 
     - I used this to give the clickable links throught the dashboard the Hover Grow effect to give the user confirmation the link is clickable.

## Testing

- I used [This HTML validator](https://validator.w3.org/) to ensure my code was legal.
- I used [This CSS validator](https://jigsaw.w3.org/css-validator/) to ensure my CSS was legal.
- I used [This JS validator](https://jshint.com/) to ensure my JavaScript was legal.

1. New user wanting to know how many Bug type Pokemon there are:
    1. User lands on dashboard with tital 'Pokemon Dashboard prominent'.
    2. User scrolls down using the chart headers to identify chart content.
    3. User views Pokemon Type row chart. User confirms there are 69 bug type Pokemon which make up 8% of the total Pokemon.

2. Existing fan wants to know how many and what Pokemon are Yellow in colour.
    1. User navigates to Pokemon color pie chart and selects Yellow.
    2. User then selects the Legendary slice of the Legendary pie chart.
    3. User can now see that there are a total of 3 Pokemon that match that criteria looking at the number of Pokemon number display.
    4. User selects the drop down selector to view the names of the 3 Pokemon.

3. New fan wants to know how many Pokemon there are in Generation 1 as they have one of the earlier games that only contain gen 1 Pokemon:
    1. User selects the generation 1 slice of the Pokemon generation pie chart.
    2. User can now see via the number of Pokemon number display there are 166 Pokemon.

4. Existing user is designing a costume for a haloween party.
    1. User selects desried Pokemon from the drop down list.
    2. User can now identify the Pokemons height, weight and colour which will give their costume the realistic edge over others.

## Viewport and responsive testing

The main issue i ran into whilst testing viewports was that rows that had multiple graphs/charts would often have different heights depending on data within.
To resolve this I added a media query to apply 'display:flex' to anything above 768px. This allowed them to share the height of their sibling divs whilst still stacking ontop of eachother in mobile view.

1. Desktops & Laptops. 1024×768
    1. Displays as intended.

2. Tablet. 800 x 1280
    2. Displays as intended.

3. Mobile
    1. Galaxy S5 - 360 X 640, Pixel 2 - 411 x 731, Pixel 2 xl - 411 x 823, iPhone 5 - 320 x 568, iPhone 6,7,8 - 375 x 667, iPhone 6,7,8 Plus - 414 x 736, iPhone x - 375 x 812.
    2. Histogram and row chart appear slightly small due to volume of content
    3. Everything else as intended.



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
- The logo image in the top left and background image were sourced from the Google advanced search filtered to 'free to use or share'.
- The main header and footer images were sourced from [this font meme generator](https://fontmeme.com/pokemon-font/).
- The original dataset was sourced from [Kaggle](https://www.kaggle.com/abcsds/pokemon).
  
### Acknowledgements

- I received inspiration for this project from a combination of the data visualization mini project. I also found the dc [documentation](http://dc-js.github.io/dc.js/docs/html/) very helpful.
- Id also like to thank Tim Nelson (2BN-Tim_lead) for his support and feedback on the Project.