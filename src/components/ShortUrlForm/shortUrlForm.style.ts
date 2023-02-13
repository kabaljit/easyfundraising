import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { tokens } from "../../utils/tokens";

export const HorizontalView = styled.View`
  flex-direction: row;
  border: 2px;
  border-radius: 8px;
  border-color: ${tokens.palette.grey[0]};
  padding: 8px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const textInputStyle = {
  backgroundColor: tokens.palette.white[0],
  borderWidth: 2,
  height: 36,
  borderColor: tokens.palette.grey[0],
  width: "100%",
};

export const StyledTextInput = styled(TextInput).attrs({
  theme: {
    roundness: 0,
  },
  activeUnderlineColor: tokens.palette.white[0],
})`
  background-color: ${tokens.palette.white[0]};
  border-width: 2;
  height: 37;
  border-color: ${tokens.palette.grey[0]};
  width: 100%;
`;
