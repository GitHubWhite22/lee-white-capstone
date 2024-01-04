# Project Title

Raven Stone Knits

## Overview

Raven Stone Knits is a site for visitors to find hand knitting patterns to make clothing accessories for men and women.

### Problem

I produce high quality knitwear accessories which are highly sought after by people who see them. The problem is, I don't have the time to personally knit items for everyone who would like to own something of mine. A few people have talked me into custom orders for them, and though it's rewarding to see how happy they are, it's extremely time-consuming and not economical for me to fulfill knitwear orders on a one-to-one basis.

### User Profile

Any skill level of hand knitter will be able to select and purchase a pattern from my website to be able to produce a high quality clothing accessory. The pattern will give specific guidance about which fibers can be used with which tools to create the best product. The person who purchases the pattern might be someone who's a knitter themselves, or they can find someone to follow the pattern and make the item for them.

### Features

-Site visitors will be able find information and select patterns to suit their skill level, choosing from beginner, easy, intermediate or advanced level patterns.

-Site visitors will be able find information and select patterns according to type of fibre, a very personal choice that can make or break one's enjoyment of the production process. They will be able to choose between merino, alpaca, cotton or silk.

-Site visitors will be able to navigate from links on the header to social media accounts linked to the page, where they can see more photos of the knitwear.

-Site visitors will be able to view available patterns in a gallery on the landing page that features a product photo, price, fibre type and skill level needed for production.

-Site visitors will be able to contact the site owner through contact details, most likely an email address, posted on the bottom of the landing page.

-Site visitors will be able to add products to a shopping cart from the gallery or from the single item page, then navigate to the SHOPPING CART page to review their selections and total before purchasing.

-Site visitors will receive a pdf of the patterns they have purchased once they have paid for the items in their cart.

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries:
  - knex
  - express

### APIs

- No external API's will be used for this sprint, but might be added later so that site users can access libraries of knit stitches and/or videos of stitches or techniques.

### Sitemap

THE LANDING PAGE WILL INCLUDE THE FOLLOWING:
-a HEADER with the website name, a subheader to describe the products available and social media links.
-a GALLERY of photos of finished examples of the hand knit item patterns; the price of each pattern will be included underneath the photo, along with the skill level
and fibre.

### Mockups

\*Please refer to the attached screenshots of the sitemap.

#### Home Page

![](HomePage.png)

### Data

Data will be stored in MySQL tables, which will be served to the client side through KNEX and Express.js. There will be a second table to store the client shopping cart, and a third table to store the data in that cart for the website owner to be able to monitor and track.

### Endpoints

### Auth

Login functionality will not be part of the scope of this project, though it may be included in nice-to-haves.

## Roadmap

- Create client

  - react project with routes and boilerplate pages

- Create server

  - express project with routing, with placeholder 200 responses

- Deploy client and server projects so all commits will be reflected in production

- Create migrations

- Populate database with infomation from individual patterns, aka 'items', for sale on the site

- Create seeds with knitting pattern item data

- Deploy client and server projects so all commits will be reflected in production

The following will all exist on the Homepage:

-Feature: Header
-page title and description with cart and social media links

- Feature: Gallery
  Images of the items/patterns for sale will have subheadings of price, skill level, and fibre type.
  Clicking on an image will give the visitor the option to 'add to cart.'

- Bug fixes

- DEMO DAY

## Nice-to-haves

Link to external API's will not be integral to the functioning of this project, but it would be nice in future to have such links so that site visitors could access external libraries containing instructions for specific knit stiches, or videos demonstrating skills needed to complete the items they've purchased. Of course, all of this information will be provided on the pattern they've purchased, but it can be nice to have access to more than one point of reference, especially for those new to hand knitting.

User login would be nice as an add on.

#### Single Item Page

![](SingleItemPage.png)  
SINGLE ITEM PAGE:
-clicking on a gallery item will lead to an individual item page, where eventually more photos of the item will be available, alongside a more specific breakdown of required tools and optional fibre choices.

#### Shopping Cart Page

![](ShoppingCart.png)
SHOPPING CART PAGE:
-while moving through the website, the user will have the option to add to or delete items from their cart. When they select the shopping cart option from the header, they will be taken to the shopping cart page, where they will be able to review the items in their cart before deciding whether or not to make a purchase.
