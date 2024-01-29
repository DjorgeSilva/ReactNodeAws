import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import { Provider } from "react-redux";
import { Home } from "./Home";
import awsExports from "./aws-exports";
import { AwsComponents } from "./components/AwsComponents";
import configureStore from "./store/configureStore";

Amplify.configure(awsExports);
const store = configureStore();
export default function App() {
  return (
    <Authenticator loginMechanism={["email"]} components={AwsComponents}>
      {({ signOut, user }) => (
        <Provider store={store}>
          <Home />
        </Provider>
      )}
    </Authenticator>
  );
}
