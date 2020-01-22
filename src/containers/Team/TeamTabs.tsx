import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const TabContainer = styled.TouchableOpacity<{ selected: boolean }>`
  flex: 1;
  height: 36;
  border-bottom-width: ${props => props.selected ? '2' : '0'};
  border-bottom-color: #4684f0;
  padding-top: 10;
`

interface TabProps {
  title: string;
  selected: boolean;
  onSelect: () => void;
};

const Tab: React.FC<TabProps> = ({ title, selected, onSelect }) => {

  return (
    <TabContainer onPress={onSelect} selected={selected}>
      <Text style={{ color: selected ? 'black' : 'rgba(0,0,0,0.5)', textAlign: 'center', textTransform: 'uppercase', fontSize: 14 }}>{title}</Text>
    </TabContainer>
  )
}

const TabsContainer = styled.View`
  display: flex;
  flex-direction: row;
`

interface TabDef {
  index: number;
  title: string;
  screen: React.ReactNode;
}

interface TeamTabsProps {
  selectedTabIndex: number;
  onTabSelected: (tab: number) => void;
  tabs: TabDef[];
}

export const TeamTabs: React.FC<TeamTabsProps> = ({ tabs, selectedTabIndex, onTabSelected }) => {

  return (
    <TabsContainer>
      {tabs.map(tab => (
        <Tab
          onSelect={() => onTabSelected(tab.index)}
          selected={tab.index === selectedTabIndex}
          key={tab.index}
          title={tab.title} />
      ))}
    </TabsContainer>
  );
}
