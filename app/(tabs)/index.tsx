import { Button, StyleSheet, View } from "react-native";
import * as AuthSession from "expo-auth-session";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store";
import { AUTH_ENDPOINT, CLIENT_ID } from "@/constants/env-variables";
import { exchangeCode, TOKEN_ENDPOINT } from "@/services/strava";

const REDIRECT_URI = AuthSession.makeRedirectUri({
  preferLocalhost: process.env.NODE_ENV === "development",
  scheme: "myapp",
  path: "/",
});

export default function Home() {
  const [code, setCode] = useState<string | null>(null);
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri: REDIRECT_URI,
      scopes: ["read"], // Ajusta los scopes según tu necesidad
      responseType: "code",
    },
    { authorizationEndpoint: AUTH_ENDPOINT, tokenEndpoint: TOKEN_ENDPOINT }
  );

  const handleLogin = () => {
    promptAsync();
  };

  useEffect(() => {
    if (response?.type === "success" && response?.params?.code) {
      setCode(response.params.code);
    }

    if (code) {
      exchangeCode(code).then(({ response }) => {
        console.log(response);
      });
    }

    alert(JSON.stringify(response));
  }, [response]);

  return (
    <View style={styles.titleContainer}>
      <Button title="Inicia sesion" onPress={handleLogin} disabled={!request} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    minHeight: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
