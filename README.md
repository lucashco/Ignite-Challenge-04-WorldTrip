# Ignite Challenge 04 WorldTrip
Main Challenge of Chapter 04. WorldTrip. Using Chakra, Swiper and Next.js.

# Screenshot - Final Result

## Home Page:

Home page up part            |  Home page down part  
:-------------------------:|:-------------------------:
<img src="https://github.com/Vinicius-PR/-Ignite-Challenge-04-WorldTrip/blob/main/Final%20Result%20Screenshot/HomePageUp.png" width="425"/>  |  <img src="https://github.com/Vinicius-PR/-Ignite-Challenge-04-WorldTrip/blob/main/Final%20Result%20Screenshot/HomePageDown.png" width="425"/>

## One of the Nations pages:

Nation page up part            |  Nation page down part  
:-------------------------:|:-------------------------:
<img src="https://github.com/Vinicius-PR/-Ignite-Challenge-04-WorldTrip/blob/main/Final%20Result%20Screenshot/EuropaPageUp.png" width="425"/>  |  <img src="https://github.com/Vinicius-PR/-Ignite-Challenge-04-WorldTrip/blob/main/Final%20Result%20Screenshot/EuropaPageDown.png" width="425"/>

# Technologies used
* NextJs
* Typescript
* yarn
* Chakra
* Swiper

# Overview of how was done

This project used two main things. Next and Chakra. Next to use its power of Static Generation and Chakra to use its new way of styling. 

The pages for each nation is created dynamically with getStaticProps methods. Also had to use getStaticPaths to create a list of possible paths. Its use a fake api. There is a json file with all the data needed. Like the title, description, photos paths, cities information and so on. Was done this way to avoid creating multiple tsx files for each nation page. Next is here to help so, lets use it, right?

Chakra give me a new way to styling the components. Its property is declared within the tag. Not html tag but the crakra tag. It is converted to html tag in the end. The project can become a little big and messy but with right indentation and spacing in the code, it become easy to change, debug, etc. There is too much to tell about chackra. To find more, visit its documentation: [Chakra](https://chakra-ui.com/)

The slides was created with Swiper. Very easy to use. To find more about Swiper: [Swiper](https://swiperjs.com/react)

# To start using

Clone this project to you local files typing the command (go to the location where you wanna save it):
> git clone https://github.com/Vinicius-PR/Ignite-Challenge-04-WorldTrip

Move to the file project:
> cd Ignite-Challenge-04-WorldTrip

Open with your code editor. If you are using Visual Code, run:

> code .

Install the dependencies:
> yarn

Start the aplication and enjoy: \o/
> yarn dev

# Conclusion
This projet is my solution of the main challenge, chapter 4 - React. Bootcamp Administered by [Rocketseat](https://rocketseat.com.br/ "Rocketseat").
Each challenge done is one more step to become a better programmer 😎. With this one, I took a huge step forward.
