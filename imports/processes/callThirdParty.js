import { HTTP } from 'meteor/http';

import { ThirdParties } from '../api/thirdParties';

export async function callREST(URL, method, parameters) {

  const matchingAPIs = ThirdParties.find({"URL" : {$regex : URL+".*"}}).fetch();
  let matchingAPI = {};
  if (matchingAPIs.length === 0) {
    throw "No API matches your request, please add " + URL + " to the database.";
  } else if (matchingAPIs.length === 1) {
    matchingAPI = matchingAPIs[0];
  } else {
    throw "Too many APIs matching base URL " + URL + " in the database.";
  };

  let options = {
    params: parameters
  };
  if (matchingAPI.hasOwnProperty("user") && matchingAPI.hasOwnProperty("password")) {
    options[auth] = matchingAPI.user + ":" + matchingAPI.password;
  };

  if (matchingAPI.APIType === "REST") {

    let result = await HTTP.callPromise(
      method,
      URL,
      options
    );

    console.log(result);
    return result;

  } else {
    throw "API with URL " + URL + " is not a REST one but a " + matchingAPI.APIType + " one, please call the right method.";
  };

}
