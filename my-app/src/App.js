import { Authenticator, Image, View, useTheme } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export default function App() {
  const {
    tokens: {
      space: { small },
    },
  } = useTheme();

  const components = {
    Header() {
      return (
        <View textAlign="center" padding={small}>
          <Image
            alt="stefanini-logo"
            src={require("./assets/logo-stefanini.png")}
          />
        </View>
      );
    },
  };

  return (
    <Authenticator loginMechanism={["email"]} components={components}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
