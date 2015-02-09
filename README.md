# fakeProductionGeneratorSetup


Database References:
http://docs.mongodb.org/manual/reference/database-references/#document-reference

Connecting to Mongo with a URI:
http://docs.mongodb.org/manual/reference/connection-string

Creating Users in JSON:
http://docs.mongodb.org/manual/reference/method/db.createUser/

Adding a document in Mongo:
http://docs.mongodb.org/manual/tutorial/insert-documents/

Importing json into Mongo:
http://docs.mongodb.org/manual/reference/program/mongoimport

````
mongoimport -u root -p <root password> --authenticationDatabase admin -d softwareDev --collection <students, classes, etc> <path to json file>
````
