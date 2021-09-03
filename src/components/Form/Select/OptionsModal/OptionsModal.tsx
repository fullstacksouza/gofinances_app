import React, { useState } from "react";
import { categories } from "../../../../utils/categories";
import Button from "../../Button/Button";
import { OptionType } from "../Select.types";
import {
  Modal,
  Container,
  Header,
  Title,
  OptionsList,
  Option,
  Icon,
  Label,
  Separator,
  Footer,
} from "./OptionsModal.styles";
import { OptionsModalProps } from "./OptionsModal.types";

const OptionsModal = (props: OptionsModalProps) => {
  const { visible, onSelectOption, options, title } = props;
  const [selectedOption, setSelectedOption] = useState<OptionType>();
  const handleClickOption = (option: OptionType) => () =>
    setSelectedOption(option);
  const handleSelectOption = () => onSelectOption(selectedOption);
  return (
    <Modal visible={visible}>
      <Container>
        <Header>
          <Title>{title}</Title>
        </Header>
        <OptionsList
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <Option
              isActive={selectedOption?.value === item.value}
              onPress={handleClickOption(item)}
            >
              {item.icon && <Icon name={item.icon} />}
              <Label>{item.label}</Label>
            </Option>
          )}
          keyExtractor={(item) => item.value}
          data={options}
        />
        <Footer>
          <Button onPress={handleSelectOption} title="Selecionar" />
        </Footer>
      </Container>
    </Modal>
  );
};

export default OptionsModal;
