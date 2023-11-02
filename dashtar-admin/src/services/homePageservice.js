import requests from "./httpService";

const HomePageService = {
  addHomePageImage: async (body) => {
    return requests.post("/uploads/add-home-img", body);
  },
  getHomePageImage: async (body) => {
    return requests.get("/uploads/img-all");
  },
  updateOneImage: async (body) => {
    return requests.post("/uploads/img-update", body);
  },
  deleteHomePage: async (body) => {
    return requests.post("/uploads/delete-home-img", body);
  },
};
export default HomePageService;
