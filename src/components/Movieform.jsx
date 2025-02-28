import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Movieform = () => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/"); // Navigate back to the dashboard
  };

  return (
    <Container className="mt-4">
      <h2>Add a Movie</h2>
      <Form
      //   onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            // value={formData.title}
            // onChange={handleChange}
            placeholder="Enter movie title"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Director</Form.Label>
          <Form.Control
            type="text"
            name="director"
            // value={formData.director}
            // onChange={handleChange}
            placeholder="Enter director's name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Select
            name="genre"
            // value={formData.genre}
            // onChange={handleChange}
            required
          >
            <option value="">Select genre</option>
            {/* {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))} */}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Release Year</Form.Label>
          <Form.Control
            type="number"
            name="releaseYear"
            // value={formData.releaseYear}
            // onChange={handleChange}
            placeholder="Enter release year"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Synopsis</Form.Label>
          <Form.Control
            as="textarea"
            name="synopsis"
            // value={formData.synopsis}
            // onChange={handleChange}
            rows={3}
            placeholder="Enter a short synopsis"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Poster Image URL</Form.Label>
          <Form.Control
            type="url"
            name="posterUrl"
            // value={formData.posterUrl}
            // onChange={handleChange}
            placeholder="Enter poster image URL"
            required
          />
        </Form.Group>
        <div className="d-flex gap-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </Container>
  );
};