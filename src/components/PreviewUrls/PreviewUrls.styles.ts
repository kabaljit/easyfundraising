import styled from "styled-components/native";
import { tokens } from "../../utils/tokens";

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const StyledView = styled.View`
  border: 2px;
  border-radius: 8px;
  border-color: ${tokens.palette.grey[0]};
  padding: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const OriginalUrl = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  margin-bottom: 4px;
`;

export const ShortUrl = styled.Text`
  font-size: 14px;
  text-decoration: underline;
`;

export const LinkWrapper = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;
