import { FormikHelpers, useFormik } from "formik";
import React, { useCallback } from "react";
import * as yup from "yup";
import axios from "axios";

import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";
import {
  HorizontalView,
  StyledTextInput,
  textInputStyle,
} from "./shortUrlForm.style";
import { tokens } from "../../utils/tokens";
import { useAppDispatch } from "../../store/store";
import { setPreviousUrls } from "../../store/app/appSlice";
import { getShortUrl } from "../services/shortUrl";

export const ShortUrlForm = () => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (values: ShortUrlValues, action: FormikHelpers<ShortUrlValues>) => {
      action.setSubmitting(true);
      getShortUrl(values.originalUrl)
        .then((response) => {
          console.log("[ShortUrlForm] on submit short url", response.data);
          dispatch(
            setPreviousUrls({
              originalUrl: values.originalUrl,
              shortUrl: response.data.data.shortUrl,
            })
          );
          action.setSubmitting(false);
        })
        .catch((error) => {
          console.error("[ShortUrlForm] on short url submit failed", error);
          action.setSubmitting(false);
        });
    },
    []
  );

  const validationSchema = yup.object().shape({
    originalUrl: yup.string().url(),
  });

  const {
    values,
    setFieldValue,
    setFieldTouched,
    touched,
    errors,
    isSubmitting,
    handleSubmit,
  } = useFormik({
    initialValues: { originalUrl: "" },
    onSubmit,
    validationSchema,
  });

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
        onPress={() => handleSubmit()}
        loading={isSubmitting}
      >
        SUBMIT
      </Button>
    </HorizontalView>
  );
};
