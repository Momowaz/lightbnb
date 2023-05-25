INSERT INTO users (name, email, password)
VALUES
('John Doe', 'john.doe@example.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.
'),
('Jane Smith', 'jane.smith@example.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.
'),
('Michael Johnson', 'michael.johnson@example.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.
');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code, active)
VALUES
(1, 'Cozy Cabin', 'A beautiful cabin surrounded by nature.', 'https://example.com/cabin_thumbnail.jpg', 'https://example.com/cabin_cover.jpg', 100, 2, 1, 2, 'United States', '1234 Pine Street', 'Seattle', 'Washington', '12345', TRUE),
(2, 'Luxury Villa', 'A luxurious villa with a private pool.', 'https://example.com/villa_thumbnail.jpg', 'https://example.com/villa_cover.jpg', 300, 3, 3, 4, 'Spain', '4567 Beach Road', 'Barcelona', 'Catalonia', '56789', TRUE),
(1, 'City Apartment', 'A modern apartment in the heart of the city.', 'https://example.com/apartment_thumbnail.jpg', 'https://example.com/apartment_cover.jpg', 150, 1, 1, 1, 'United States', '7890 Main Street', 'New York', 'New York', '67890', TRUE);

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES
('2023-06-01', '2023-06-05', 1, 2),
('2023-07-15', '2023-07-20', 2, 3),
('2023-08-10', '2023-08-15', 1, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES
(2, 1, 1, 5, 'Had a wonderful time at the cabin!'),
(3, 2, 2, 4, 'The villa was amazing, highly recommended.'),
(1, 1, 3, 4, 'Great experience staying at the cabin.');