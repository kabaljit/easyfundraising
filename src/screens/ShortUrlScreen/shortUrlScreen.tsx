import React from "react";
import { ShortUrlForm } from "../../components/ShortUrlForm";

import { SafeArea, Title } from "./shortUrlScreen.styles";

export const ShortUrlScreen = () => {
  return (
    <SafeArea>
      <Title>URL Shortener App</Title>
      <ShortUrlForm />
    </SafeArea>
  );
};
