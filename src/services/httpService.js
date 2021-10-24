import axios from "axios";
import { isEmpty } from "lodash";
import Swal from "sweetalert2";
axios.interceptors.response.use(null, (error) => {
  const notFound = error.response.status == 404;
  const expectedError =
    error.response.status >= 400 &&
    error.response.status < 500 &&
    !error.response.status == 404;
  if (notFound) {
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: "شهر مورد نظر یافت نشد؟!؟",
      footer: "<small>.برای نتایج بهتر از فینگلیش استفاده کنید</small>",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "مشکلی از سمت سرور به وجود آمده است؟!؟",
      footer: "<smalll>مرورگرتان را بروز ودوباره امتحان کنید</smalll>",
    });
  }

  // console.log(error.response)
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
