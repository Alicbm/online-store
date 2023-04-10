# Bargailix REST API
> This REST API is available for 21 days every month, the cloud database works for 21 days every month, because it is a free account.

Hello, :wave: welcome to this repository.

:watch: This time I want to introduce you to the Bargailix REST API. This project was created with the objective of providing data to the "Bargailix Application", which is an electronic commerce with interesting things, for more information follow the previous link.

Bargailix REST API :convenience_store:	 was created with the single responsibility principle, to fulfill this I created a differentes directories :file_folder: for the routes and for the services, with this, I could separate the different option of the services and connected in its respective function, for example, the method POST used in the route, I could conneted it to the create function located in the service, and in this way I connected the differents function in the services with the respective options in the routes. 

For controlate the structure to the differents routes option I used a library called Joi, with this I could specify the fields requires for each options in the routes, such as option to get the elements or the option to create and update elements. 

Continuing with the structure to the API is important mentioned that for this project I used MySQL and Docker for save and persistent the data in a database.

This REST API has full CRUD, you can create, read, update and delete data for the different routes. Within the routes we have three main ones:

- **/products:** In this route we have all the products, with the following characteristics:

		 "id": 1,
		 "name": "Product name",
		 "brand": "Product brand",
		 "price":  Product price,
		 "description": "Here would go the product description.",
		 "image": "https://link-for-a-product-1.png",
		 "favorite": true,
		 "product": "Kind of product",
		 "createAt": "Product creation name",
		 "categoryId": 1,
		 "category": {
		   "id": 1,
		   "name": "Category name",
		   "image": "https://link-for-a-category-1.png",
		   "createAt": "2023-18-02"
		 },
		 "feedback": [
		  {
           "id": 1,
           "name": "Comment owner",
           "bad": false,
           "regular": false,
           "good": true,
           "description": "This is the comment wrote for the person",
           "createAt": "Comment creation date",
           "productId": 1
		  }
		 ]


- **/categories:** In this route we have all categories, also we have all products respective to each category, this is possible thank the connections between category table and product table, through the foreign keys :key::

       "id": 1,
       "name": "Category name",
       "image": "https://link-for-a-category-1.png",
       "createAt": "2023-18-02",
       "products": [
         {
         "id": 1,
         "name": "Product name",
         "brand": "Product brand",
         "price":  Product price,
         "description": "Here would go the product description.",
         "image": "https://link-for-a-product-1.png",
         "favorite": true,
         "product": "Kind of product",
         "createAt": "Product creation name",
         "categoryId": 1,
         }
        ]

- **/feedback:** In the feedback route we have a direct connection between the comment and the product where the comment is located, the structure would be the following:

        "id": 1,
        "name": "Comment owner",
        "bad": false,
        "regular": false,
        "good": true,
        "description": "This is the comment wrote for the person",
        "createAt": "Comment creation date",
        "productId": 1,
        "products": [
          {
          "id": 1,
          "name": "Product name",
          "brand": "Product brand",
          "price":  Product price,
          "description": "Here would go the product description.",
          "image": "https://link-for-a-product-1.png",
          "favorite": true,
          "product": "Kind of product",
          "createAt": "Product creation name",
          "categoryId": 1,
          }
         ]

## How to use it? :brain:
### GET: :heavy_check_mark:

- ### All results: :mag:

**Main url** : `online-store-production.up.railway.app/api/v1/` 

If you want to access the different routes with general information, you have the following routes available:

1. [online-store-production.up.railway.app/api/v1/products](http://online-store-production.up.railway.app/api/v1/products "online-store-production.up.railway.app/api/v1/products") :link:
2. [online-store-production.up.railway.app/api/v1/categories](http://online-store-production.up.railway.app/api/v1/categories "online-store-production.up.railway.app/api/v1/categories") :link:
3. [online-store-production.up.railway.app/api/v1/feedback](http://online-store-production.up.railway.app/api/v1/feedback "online-store-production.up.railway.app/api/v1/feedback") :link:

- ### Specific results: :mag:

On the other hand, if you want to access the different routes with information of a specific element, you have the following structure:

    1. online-store-production.up.railway.app/api/v1/products/id
    2. online-store-production.up.railway.app/api/v1/categories/id
    3. online-store-production.up.railway.app/api/v1/feedback/id
    
### POST :ledger:
To create a new article it is necessary to comply with the structure for the different routes.

- In the case of the product, the obligatory syntax is the following:

> online-store-production.up.railway.app/api/v1/products/

       "id": number,
       "name": string,
       "brand": string,
       "price":  number,
       "description": string,
       "image": string,
       "favorite": boolean,
       "product": string,
       "createAt": string,
       "categoryId": number
       
- In the case of the categories, the obligatory syntax is the following:

> online-store-production.up.railway.app/api/v1/categories

      "id": number,
      "name": string,
      "image": string,
      "createAt": string
  
- In the case of the feedback, the obligatory syntax is the following:

> online-store-production.up.railway.app/api/v1/feedback

      id": number,
      "name": string,
      "bad": boolean,
      "regular": boolean,
      "good": boolean,
      "description": string,
      "createAt": string,
      "productId": number
      
### PATCH :pencil2:

To use this method it is necessary to review the previous information, the data structure goes in the **POST** option, since the structure is the same, the difference between the **POST** and **PATCH** option is that in **POST** all the data in the respective structure is required, however, in **PATCH** you are not required to send all the parameters, you only have to write the parameter that you want to modify.

**To perform this action you must use the following means:**

- online-store-production.up.railway.app/api/v1/products/id
- online-store-production.up.railway.app/api/v1/categories/id
- online-store-production.up.railway.app/api/v1/feedback/id     

### DELETE :link:

The way to use this method is very simple, you just write the main url with a specific id and that's it.

**To perform this action you must use the following means:**

- online-store-production.up.railway.app/api/v1/products/id
- online-store-production.up.railway.app/api/v1/categories/id
- online-store-production.up.railway.app/api/v1/feedback/id


***Created by Alic Barandica, FullStack Developer***
