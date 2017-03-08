import { HTTP } from 'meteor/http';

import { ThirdParties } from '../api/thirdParties';

export async callREST(URL, method, parameters) {

  // ThirdParties.find({})

  let result = await HTTP.callPromise(
    method,
    URL,
    {
      params: parameters,
      auth: "foo:bar"
    }
  });
}
