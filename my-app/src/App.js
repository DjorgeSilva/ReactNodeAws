import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { AwsComponents } from "./components/AwsComponents";
import { Home } from "./Home";

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator loginMechanism={["email"]} components={AwsComponents}>
      {({ signOut, user }) => <Home />}
    </Authenticator>
  );
}
