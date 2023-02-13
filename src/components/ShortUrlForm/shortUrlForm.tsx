import { useFormik } from "formik";
import React, { useCallback } from "react";
import * as yup from "yup";

import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {
  HorizontalView,
  StyledTextInput,
  textInputStyle,
} from "./shortUrlForm.style";
import { tokens } from "../../utils/tokens";

export const ShortUrlForm = () => {
  const onSubmit = useCallback(() => {}, []);

  const validationSchema = yup.object().shape({
    originalUrl: yup.string().url(),
  });

  const { values, setFieldValue, setFieldTouched, touched, errors } = useFormik(
    {
      initialValues: { originalUrl: "" },
      onSubmit,
      validationSchema,
    }
  );

  return (
    <HorizontalView>
      <View style={{ flex: 1 }}>
        <StyledTextInput
          value={values.originalUrl}
          onChangeText={(value: string) => setFieldValue("originalUrl", value)}
          placeholder="Please enter your url..."
          error={touched.originalUrl && !!errors.originalUrl}
          label={
            touched.originalUrl && errors.originalUrl ? errors.originalUrl : ""
          }
          onBlur={() => setFieldTouched("originalUrl", true)}
        />
      </View>
      <View style={{ margin: 4 }} />
      <Button
        mode="contained"
        buttonColor={tokens.palette.grey[1]}
        labelStyle={{ color: tokens.palette.black[0] }}
        theme={{ roundness: 0 }}
      >
        SUBMIT
      </Button>
    </HorizontalView>
  );
};
