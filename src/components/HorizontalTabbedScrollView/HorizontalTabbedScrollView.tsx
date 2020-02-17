import React, { useState, useEffect } from 'react';
import { ScrollView, NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import styled from 'styled-components/native';

interface HorizontalTabbedScrollViewProps {

}

const Container = styled.View`
  display:flex;
  flexDirection: column;

`

export const HorizontalTabbedScrollView: React.FC<HorizontalTabbedScrollViewProps> = ({ children }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    React.Children.forEach<React.ReactNode>(children, child => {
      child
    })
  })



  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScroll(event.nativeEvent.contentOffset.x);
  };

  const handleScrollEnd = () => {
    console.log('scroll ended..');


  }

  return (
    <Container>
      <ScrollView style={{ flex: 1 }} horizontal scrollEventThrottle={5} onScrollEndDrag={handleScrollEnd} onScroll={handleScroll}>
        {children}
      </ScrollView>
      {/* <TabDots /> */}
    </Container>

  );

}





