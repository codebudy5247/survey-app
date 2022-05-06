import * as axios from "axios";

const apiURL = "http://localhost:5000/api";

function normalizeServerResponse(serverResponse: any) {
  let response = serverResponse.data;
  return response;
}

function normalizeServerError(serverResponse: any) {
  let response = serverResponse.message;
  return response;
}

export async function getAllQuestions() {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "get",
      url: `${apiURL}/question`,
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}

export async function createAnswer(answer:Answer) {
  try {
    const axiosConfig: axios.AxiosRequestConfig = {
      method: "post",
      url: `${apiURL}/answer`,
      data: {
        questionId: answer.questionId,
        rating: answer.rating,
        content: answer.content,
      },
    };
    const response = await axios.default.request(axiosConfig);
    const normalizedResponse = normalizeServerResponse(response);
    return [null, normalizedResponse];
  } catch (error) {
    const errorObject = normalizeServerError(error);
    return [errorObject, null];
  }
}
