import { Image, Text, View, useTheme } from "@aws-amplify/ui-react";

export const AwsComponents = {
  Header() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.small}>
        <Image
          alt="stefanini-logo"
          src={require("../../assets/logo-stefanini.png")}
        />
      </View>
    );
  },
  Footer() {
    const { tokens } = useTheme();
    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; Stefanini Group - Todos os direitos reservados
        </Text>
      </View>
    );
  },
};
