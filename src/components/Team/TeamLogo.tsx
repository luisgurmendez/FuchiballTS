import React from 'react';
import styled from 'styled-components/native';
//@ts-ignore
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { COLORS } from 'constants/colors';

interface LogoProps {
  size: number;
  rounded?: boolean;
}

const Logo = styled.Image<LogoProps>`
  align-self: center;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.rounded ? props.size / 2 : '0'};
`

const DefaultTeamLogoContainer = styled.View<LogoProps>`
  display: flex;
  width: ${props => props.size};
  height: ${props => props.size};
  align-items: center;
  justify-content:center;
  background-color: #eee;
  border-radius: ${props => props.size / 2};
`

interface TeamLogoProps {
  logo: any;
  size: number;
  rounded?: boolean;
  style?: any;
}

export class TeamLogo extends React.Component<TeamLogoProps, {}> {
  render() {
    const { rounded = false, logo, size, style = {} } = this.props;
    return (
      <>
        {
          logo ?
            <Logo rounded={rounded} size={size} source={logo} />
            :
            <DefaultTeamLogoContainer size={size}>
              <Icon name="shield-alt" size={size * 0.5} color={COLORS.gray} />
            </DefaultTeamLogoContainer>
        }
      </>
    )
  }
}
