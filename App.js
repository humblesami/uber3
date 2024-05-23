import "intl";
import "intl/locale-data/jsonp/en";

import React from "react";
import { View, Text, KeyboardAvoidingView, Platform, AppRegistry } from "react-native";

import HomeNavigation from "./components/HomeNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store } from "./app/store";

export default function MainApp() {
  // return(
  //   <View style={{padding: 50}}>
  //     <Text>GG Love</Text>
  //   </View>
  // );
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
            style={{ flex: 1 }}
          >
            <HomeNavigation />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent('main', () => MainApp);
