import React from "react";
import { PreviewUrls } from "../../components/PreviewUrls";
import { ShortUrlForm } from "../../components/ShortUrlForm";

import { Container, SafeArea, Title } from "./shortUrlScreen.styles";

export const ShortUrlScreen = () => {
  return (
    <SafeArea>
      <Container>
        <Title>URL Shortener App</Title>
        <Container>
          <ShortUrlForm />
        </Container>
        <Container>
          <PreviewUrls />
        </Container>
      </Container>
    </SafeArea>
  );
};
