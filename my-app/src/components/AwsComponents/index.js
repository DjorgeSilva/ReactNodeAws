import { Image, View, useTheme } from "@aws-amplify/ui-react";

export const AwsComponents = {
  Header() {
    const { tokens } = useTheme();
    return (
      <View padding={tokens.space.small}>
        <Image
          alt="stefanini-logo"
          src={require("../../assets/logo-stefanini.png")}
        />
      </View>
    );
  },
};
