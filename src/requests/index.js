import axiosHelper from "../helpers/axiosHelper";

export const getAlbumPhotosById = id => axiosHelper().request({
  url: `album/${id}/photos`,
  method: 'GET'
})