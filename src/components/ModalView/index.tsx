import React, { ReactNode, useState } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback
} from 'react-native';

import { styles } from './styles';

import { Background } from '../Background';

type Props = ModalProps & {
  children: ReactNode;
  closeModal: ()=>void;
}

export function ModalView({children, closeModal, ...rest}: Props){
  console.log
  return (
    <Modal
      transparent
      statusBarTranslucent
      animationType="slide"
      {...rest}
   
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
      
    </Modal>
  );
}