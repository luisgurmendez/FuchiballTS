import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

export function useTextInputValue(initalValue: string): [string, (e: NativeSyntheticEvent<TextInputChangeEventData>) => void] {
  const [value, setValue] = useState(initalValue);

  const handleOnChangeValue = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setValue(e.nativeEvent.text)
  }

  return [value, handleOnChangeValue];
}


