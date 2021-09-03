import React, { useState } from "react";
import { Container, Title, Icon } from "./Select.styles";
import { SelectProps, OptionType } from "./Select.types";
import OptionsModal from "./OptionsModal/OptionsModal";
const Select = (props: SelectProps) => {
  const [openOptionModal, setOpenOptionModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionType>();
  const { title, onSelect, options } = props;

  const handleToggleOptionModal = () => setOpenOptionModal(!openOptionModal);

  const handleSelect = (option?: OptionType) => {
    setSelectedOption(option);
    if (option) {
      onSelect(option);
    }
    handleToggleOptionModal();
  };

  return (
    <Container onPress={handleToggleOptionModal}>
      <Title>{selectedOption?.label ? selectedOption?.label : title}</Title>
      <Icon name="chevron-down" />
      <OptionsModal
        title={title}
        options={options}
        onSelectOption={handleSelect}
        visible={openOptionModal}
      />
    </Container>
  );
};

export default Select;
