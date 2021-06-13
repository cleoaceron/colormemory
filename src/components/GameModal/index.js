import React from 'react';
import Modal from 'react-native-modal';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';

import styles from './style';

const PlayerSchema = Yup.object().shape({
  name: Yup.string().required('Please enter a valid name'),
});

const GameModal = ({
  isVisible,
  setGameModal,
  setName,
  onSubmitScore,
  setResetGame,
  setPairedColors,
}) => {
  const handleSubmit = (values, form) => {
    setGameModal(false);
    onSubmitScore();
    setResetGame(true);
    setPairedColors([]);
  };

  return (
    <>
      <Modal isVisible={isVisible} backdropColor="rgba(0,0,0,0.75)">
        <View style={styles.container}>
          <Text style={styles.label}>Nice game! Tell me your name.</Text>

          <Formik
            initialValues={{
              name: '',
            }}
            validationSchema={PlayerSchema}
            onSubmit={() => handleSubmit()}>
            {formikProps => (
              <>
                <View style={styles.inputContainer}>
                  <Field>
                    {({field, form}) => {
                      const handleChange = value => {
                        form.setFieldValue('name', value);
                        setName(value);
                      };

                      return (
                        <>
                          {console.log(form)}
                          <View style={styles.inputTextStyle}>
                            <TextInput
                              allowFontScaling={false}
                              style={styles.inputStyle}
                              maxLength={50}
                              onChangeText={handleChange}
                              value={field.value}
                            />
                            {form.errors && (
                              <Text style={styles.errorStyle}>
                                {form.errors.name}
                              </Text>
                            )}
                          </View>
                        </>
                      );
                    }}
                  </Field>
                </View>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={formikProps.handleSubmit}>
                  <Text style={styles.buttonText}>Okay</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      </Modal>
    </>
  );
};

export default GameModal;
