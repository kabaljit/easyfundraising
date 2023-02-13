import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";
import { ShortUrlScreen } from "../screens/ShortUrlScreen";
import { Provider as PaperProvider } from "react-native-paper";

const Main = () => {
  return (
    <PaperProvider>
      <ShortUrlScreen />
    </PaperProvider>
  );
};

export default Main;
