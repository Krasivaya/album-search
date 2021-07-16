import React from "react";
import { Button, Form } from "semantic-ui-react";

const SearchBar = ({
  search,
  error,
  errorMessage,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="search-bar">
      <Form onSubmit={handleSubmit}>
        <Form.Input
          placeholder="Search an album..."
          name="search"
          value={search}
          onChange={handleChange}
          error={error && errorMessage}
        />
        <Button
          type="submit"
          content="Get Album Photos By Id"
          disabled={error}
        />
      </Form>
    </div>
  );
};

export default SearchBar;
