import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class TS2 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <VrButton onClick={()=>{
          this.props.history.push('/test')
        }}>
        <Text
          style={{
            backgroundColor: 'red',
            fontSize: 0.4,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          liucheng: second page
        </Text>
        </VrButton>
      </View>
    );
  }
};

