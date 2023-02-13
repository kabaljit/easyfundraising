import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";
import { ShortUrlScreen } from "../screens/ShortUrlScreen";
import { Provider as PaperProvider } from "react-native-paper";
import { store } from "../store/store";
import { Provider } from "react-redux";

const Main = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <ShortUrlScreen />
      </PaperProvider>
    </Provider>
  );
};

export default Main;
