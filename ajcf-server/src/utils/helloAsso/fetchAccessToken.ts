import axios from "axios";
import qs from "querystring";
import memoizeOne from "memoize-one";

const helloAssoAccessTokenUrl = "https://api.helloasso.com/oauth2/token";

type HelloAssoAccessTokenResponse = {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: "bearer";
};

export const fetchAccessToken = async () => {
  const body = qs.stringify({
    client_id: process.env.HELLOASSO_V5_CLIENT_ID,
    client_secret: process.env.HELLOASSO_V5_CLIENT_SECRET,
    grant_type: "client_credentials",
  });
  const result = await axios.post<HelloAssoAccessTokenResponse>(helloAssoAccessTokenUrl, body, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  return result.data.access_token;
};

export const memoizedAccessToken = memoizeOne(() => fetchAccessToken());
