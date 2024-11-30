import { REDIRECT_URI } from "@/utils/constants";
import {} from "expo-auth-session";
const AUTH_ENDPOINT = `http://www.strava.com/oauth/authorize`;

export const login = async () => {
  try {
    const authUrl = `${AUTH_ENDPOINT}?client_id=${
      process.env.PUBLIC_EXPO_CLIENT_ID
    }&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&approval_prompt=force&scope=read,activity:read_all`;
    // 2. Abrir el navegador para la autenticación

    if (result.type === "success") {
      const { code } = result.params;

      // 3. Intercambiar el código por tokens
      const tokenResponse = await fetch(TOKEN_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${code}&grant_type=authorization_code`,
      });

      const tokens = await tokenResponse.json();
      console.log("Access Token:", tokens.access_token);

      // Guarda los tokens para usarlos en la app
      return tokens;
    }

    return null;
  } catch (e) {}
};
