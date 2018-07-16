import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class TS1 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <VrButton onClick={()=>{
          this.props.history.push('/test_1')
        }}>
          <Text
            style={{
              backgroundColor: 'blue',
              fontSize: 0.4,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -3]}],
            }}>
            liucheng: first page
          </Text>
        </VrButton>
      </View>
    );
  }
};

