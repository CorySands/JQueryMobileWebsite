# JQueryMobileWebsite

## Introduction

This page is centered around a website I designed for a Mobile Application Development Course Project. It features a combination of features and capabilities that come together to form a mobile-friendly website. The purpose of this website is to provide a collection of programming languages that I have had experience with and consider to be my favorite. 

One notable feature concerning the design is the integration of JQuery Mobile. JQuery Mobile is a framework that provides seamless mobile integration to a website. It provides a lot of formatting options that help to quickly design a mobile-friendly website. Note, webpages made with JQuery Mobile will also work on Desktop.



## Visit the Website

To visit the website simply click on the URL below.

http://sotd.us/corysands/MobileApplicationDevelopment/Module6/ProjectWebpage/main.html



## Structure

With any great website, it is first necessary to have a landing page, or more commonly known as the homepage. The homepage is primarily used for navigation. It also functions to welcome the user to the website and give a basic run down of its purpose.

On the homepage, the user can begin to navigate the website by clicking the open button on the top left of the page. Doing so will open a side panel that lists two primary options. At this point, the user may click on the Collection button to be redirected to the Collection page. Otherwise, they can click on the Contact button to be brought to the contact page.



## Contact Page

The contact page provides an example contact form. The form itself provides a set of input boxes. These inputs account for the user's first and last name, an email, a phone number, and a message field. In a use case scenario, a user may enter information regarding them self, information to contact them, and a message to forward to a website manager.

In this use case, the user would enter all of the pertinent information and select the submit button. For this project, the submit button will forward the submitted data to the user's local storage. Then, to display functionality, the data is reinserted on the page after a reload or revisit.

One more function this page features is the reset button. Assuming that you do not want to submit the same information you previously had, the reset button will reset all input boxes to an empty value. Therefore, allowing the user to enter another message to forward to storage.

Note, the functionality provides an example of web storage in the local sense. However, this could easily be adjusted to point to a server for data processing.



## Collection Page

Following the side panel navigation, we are brought to the Collection page. The collection page should be seen as one of the website's most important features. It displays all of the listing regarding my collection of favorite programming languages.

One feature that is prominent on this page is the favorite feature. Favoriting allows users to essentially bookmark listings for later review. This means that refreshing the page will cause favorited listing to remain checked.

Once a user has selected any websites that they would like to favorite, they can then move onto the product page. This is done by selecting a desired listing.



## Product Page

After the user has chosen a listing, they will be redirected to this product page. For each listing, a different product page will be presented. On the page, the icon and description will change depending on the selected listing. This is accomplished by a JavaScript handler script that will note the name of the selected listing. When the user selects a listing, this handler script will initially cancel the redirect. This is done to present to data on the upcoming page. 

Within the script is a small database that corresponds to each listing. Each database object contains data relating to the language name, icon reference, and description. Therefore, the script will grab the redirect request and apply to applicable data to the product page. Once this is finished, it will redirect the user to the updated page.

One thing to note about this approach is that the product page will not stand on its own. It needs the script called before the redirect to fill it with information. To prevent prevent leaving the user on an empty page after a refresh, additional JavaScript is added. It will perform a check whenever a page is loaded. If the page is the product page and contains no information, the website will redirect back to the collection page. Ultimately, this allows the data to be accurately loaded without unexpected behavior.



## Miscellaneous

A final note on navigation refers to returning to the home page. One way this can be done (and is the most common way) is clicking the back button to go back to the previous page. Additionally, the website provides an additional route via the logo present in the top right corner. Clicking it on any page except the homepage will return the user directly to the homepage. Functionally, this provides the quickest way back from the product page (which would be two levels in).



## Download

You can download the source code using two different methods.

### Method 1

1. Click on the green code button near the top of the page.
2. Select the "Download ZIP" option.

### Method 2

1. Navigate to the [Releases](https://github.com/CorySands/JQueryMobileWebsite/releases/tag/Release) tab on the right
2. Under _Assets_, select the ZIP file

