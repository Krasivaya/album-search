import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { getAlbumPhotosById } from "../requests";
import AlbumList from "./AlbumList";
import SearchBar from "./SearchBar";

const AlbumSearch = () => {
  const [album, setAlbum] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { push } = useHistory();
  const albumId = new URLSearchParams(window.location.search).get("albumId");

  const handleAlbum = async (id) => {
    const { data } = await getAlbumPhotosById(id);
    setAlbum(data);
  };

  useEffect(() => {
    if (!isEmpty(albumId)) {
      setSearch(albumId);
      handleAlbum(albumId);
    }
  }, [albumId]);

  const handleChange = (e, { value }) => {
    if (isNaN(value)) {
      setError(true);
      return setErrorMessage("Please search by numbers");
    }
    const albumId = value && parseInt(value, 10);
    if (albumId === 0 || albumId > 100) {
      setError(true);
      return setErrorMessage("The number should be between 1 - 100");
    }
    setError(false);
    return setSearch(albumId);
  };

  const handleSubmit = async () => {
    handleAlbum(search);
    push({ search: `?albumId=${search}` });
  };

  return (
    <div className="album-search">
      <SearchBar
        search={search}
        error={error}
        errorMessage={errorMessage}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <AlbumList album={album} />
    </div>
  );
};

export default AlbumSearch;
