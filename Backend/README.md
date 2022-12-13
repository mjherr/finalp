



### Routes
| Method    |                      Path |                                          Purpose |
|-----------|---------------------------|--------------------------------------------------|
| GET       |                      /    |                                         Home page|
| GET       |               /cards      |                                  Cards index page|
| POST      |                 /cards   |                                    Create new card|
| GET       | /cards/new               | Form page for creating a new card                 |
| GET       | /cards/:id               | Details about a card                              |
| PUT       | /cards/:id               | Update a card                                     |
| GET       | /cards/:id/edit          | Form page for editing a card                      |
|DELETE     | /cards/:id               | Delete a card                                     |
| GET       | *                         | 404 page (matches any route not defined above)   |