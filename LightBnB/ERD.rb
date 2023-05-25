          +-----------------+
          |      User       |
          +-----------------+
          | id              |
          | name            |
          | email_address   |
          | password        |
          +-----------------+
                |     ^
                |     |
                |     |
                |     |
                |     |
          +-----------------+
          |    Property     |
          +-----------------+
          | id              |
          | title           |
          | description     |
          | cost_per_night  |
          | parking_spaces  |
          | num_of_bathrooms|
          | num_of_bedrooms |
          | thumbnail_photo |
          | cover_photo     |
          | country         |
          | street          |
          | city            |
          | province        |
          | post_code       |
          | active          |
          | owner_id (FK)   |
          +-----------------+
                |     ^
                |     |
                |     |
                |     |
                |     |
          +-----------------+
          |   Reservation   |
          +-----------------+
          | id              |
          | start_date      |
          | end_date        |
          | guest_id (FK)   |
          | property_id (FK)|
          +-----------------+
                |     ^
                |     |
                |     |
                |     |
                |     |
          +-----------------+
          | PropertyReview  |
          +-----------------+
          | id              |
          | message         |
          | rating          |
          | guest_id (FK)   |
          | reservation_id (FK)|
          +-----------------+
