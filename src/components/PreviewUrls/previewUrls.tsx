import React from "react";
import { Linking, Touchable, TouchableOpacity, View } from "react-native";
import {
  LinkWrapper,
  OriginalUrl,
  ShortUrl,
  StyledView,
  Title,
} from "./PreviewUrls.styles";
import { useSelector } from "react-redux";

import { selectPreviousUrls } from "../../store/app/appSelectors";

export const PreviewUrls = () => {
  const previousUrls = useSelector(selectPreviousUrls);

  console.log("previousUrls", previousUrls);

  return (
    <StyledView>
      <Title>Your last 5 shortenerd URLs</Title>

      {previousUrls?.map((url, index) => (
        <LinkWrapper>
          <TouchableOpacity onPress={() => Linking.openURL(url.originalUrl)}>
            <OriginalUrl>{url.originalUrl}</OriginalUrl>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL(url.shortUrl)}>
            <ShortUrl>{url.shortUrl}</ShortUrl>
          </TouchableOpacity>
        </LinkWrapper>
      ))}
    </StyledView>
  );
};
