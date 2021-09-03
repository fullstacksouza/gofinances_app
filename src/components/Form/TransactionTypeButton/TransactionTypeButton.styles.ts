import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TransactionTypeButtonProps } from "./TransactionTypeButton.types";

interface IconProps {
  type: string;
}

interface ContainerProps
  extends Pick<TransactionTypeButtonProps, "selected" | "type"> {}
export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;
  ${({ selected, type, theme }) =>
    selected &&
    type === "D" &&
    css`
      background-color: ${theme.colors.attention_light};
      border: none;
    `}
  ${({ selected, type, theme }) =>
    selected &&
    type === "C" &&
    css`
      background-color: ${theme.colors.success_light};
      border: none;
    `}
`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    theme.colors[type === "C" ? "success" : "attention"]};
`;

export const Title = styled.Text<Pick<ContainerProps, "selected">>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  /* ${({ selected, theme }) =>
    selected &&
    css`
      color: ${theme.colors.title};
    `} */
`;
