
### Steps what we perform for creation of RESTful API
1. Created server with Express
2. Setup Routes and Controllers with Express Routers
3. Use MongoDB and connected with backend too.
4. Created Schema and model and sotred API data(JSON) in Database using Express and Mongoose.
5. Added Filtering, Searching and Sorting with ASC and Desc, Low to High.
6. Return specific documents fields and added pagination with skip, page and limit functionality.

### Express: req.params, req.query and req.body
These three are part of Express request object. These are used by client to send data to the server.

1. req.body
Generally used in POST/PUT requestd.
Use it when we want to send sensitive data (eg:- form data) or super long JSON data to the server.

2. req.params
These are properties attached to the url i.e named route parameters. We prefix the parameter name with a colon(:) when writing our routes.

3. req.query
This is mostly used to searching, sorting, filtering and pagination etc.
Say for instance we want to query an API but only want to get data from page 10, this is what wee wuould generally use. If we want more values then we can use ampersand(&).
It is written as key=value

