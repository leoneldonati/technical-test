import { CLIENT_ID, CLIENT_SECRET } from "@/constants/env-variables";

export async function fetchActivities(accessToken: string) {
  const response = await fetch(
    "https://www.strava.com/api/v3/athlete/activities",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Error fetching activities");
  }

  return response.json();
}

export const TOKEN_ENDPOINT = "https://www.strava.com/oauth/token";

export async function exchangeCode(code: string) {
  try {
    const res = await fetch(
      `${TOKEN_ENDPOINT}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&grant_type=authorization_code`
    );

    if (!res.ok)
      return {
        ok: false,
        response: null,
      };

    const data = await res.json();

    return {
      ok: true,
      response: data,
    };
  } catch (err) {
    console.log(err);
    return { ok: false, response: null };
  }
}
