import React from "react"
import { Stack } from "expo-router"

export default function Layout() {
    return (
          <Stack>
            <Stack.Screen 
            name="index" 
            options={{
                title: "Shows",
                headerStyle: {
                    backgroundColor: "black",
                },
                headerTintColor: "#fff",
                headerTitleAlign: "center",
                statusBarColor: "grey"
            }}/>
            <Stack.Screen 
            name="add"
            options={{
                title: "Add",
                headerStyle: {
                    backgroundColor: "black",
                },
                headerTintColor: "#fff",
                headerTitleAlign: "center",
                statusBarColor: "grey"
            }} />
            <Stack.Screen 
            name="edit"
            options={{
                title: "Edit",
                headerStyle: {
                    backgroundColor: "black",
                },
                headerTintColor: "#fff",
                headerTitleAlign: "center",
                statusBarColor: "grey"
            }} />
          </Stack>
      );
}