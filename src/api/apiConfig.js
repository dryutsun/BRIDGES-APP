let apiUrl;

const apiUrls = {
  production: "",
  development: `http://l;ocalhost:8000`,
};

window.location.hostname === `localhost`
  ? (apiUrl = apiUrls.development)
  : (apiUrl = apiUrls.production);

export default apiUrl;
