const properties = require("./json/properties.json");
const users = require("./json/users.json");
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */

const getUserWithEmail = (email) => {
  return pool
    .query('SELECT name, email FROM users WHERE users.email = $1', [email])
    .then((result) => {
      if (result.rows.length > 0) {
        const user = result.rows[0];
        console.log('user is :',user);
        return user;
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

/*
const getUserWithEmail = function (email) {
  let resolvedUser = null;
  for (const userId in users) {
    const user = users[userId];
    if (user?.email.toLowerCase() === email?.toLowerCase()) {
      resolvedUser = user;
    }
  }
  return Promise.resolve(resolvedUser);
};
*/

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
// const getUserWithId = function (id) {
//   return Promise.resolve(users[id]);
// };

const getUserWithId = (id) => {
  return pool
    .query('SELECT name, email FROM users WHERE id = $1', [id])
    .then((result) => {
      if (result.rows.length > 0) {
        const user = result.rows[0];
        return user;
      } else {
        return null;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
// const addUser = function (user) {
//   const userId = Object.keys(users).length + 1;
//   user.id = userId;
//   users[userId] = user;
//   return Promise.resolve(user);
// };

const addUser = (user) => {
  const { name, email, password } = user;
  const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
  const values = [name, email, password];

  return pool
    .query(query, values)
    .then((result) => {
      const newUser = result.rows[0];

      console.log('add newUser', newUser);
      return newUser;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
// const getAllReservations = function (guest_id, limit = 10) {
//   return getAllProperties(null, 2);
// };

const getAllReservations = function(guest_id, limit = 10) {
  const query = `
    SELECT reservations.id, properties.title, properties.cost_per_night, reservations.start_date, AVG(rating) AS average_rating
    FROM reservations
    JOIN properties ON reservations.property_id = properties.id
    LEFT JOIN property_reviews ON properties.id = property_reviews.property_id
    WHERE reservations.guest_id = $1
    GROUP BY reservations.id, properties.id
    ORDER BY reservations.start_date
    LIMIT $2;
  `;
  const values = [guest_id, limit];

  return pool
    .query(query, values)
    .then((result) => {
      const reservations = result.rows;
      return reservations;
    })
    .catch((err) => {
      console.log(err.message);
    });
};


/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = (options, limit = 10) => {
  return pool
    .query(`SELECT * FROM properties LIMIT $1`, [limit])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// const getAllProperties = function (options, limit = 10) {
//   const limitedProperties = {};
//   for (let i = 1; i <= limit; i++) {
//     limitedProperties[i] = properties[i];
//   }
//   return Promise.resolve(limitedProperties);
// };

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};

module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllReservations,
  getAllProperties,
  addProperty,
};
