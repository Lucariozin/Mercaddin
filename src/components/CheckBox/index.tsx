import * as Styled from './styles';

import { BsCheckLg } from 'react-icons/bs';

interface CheckBoxProps {
  isActive: boolean;
  setIsActive: () => void;
}

export function CheckBox({ isActive, setIsActive }: CheckBoxProps) {
  if (!isActive) {
    return (
      <Styled.Container onClick={setIsActive}>

      </Styled.Container>
    );
  } else {
    return (
      <Styled.ContainerActive onClick={setIsActive}>
        <BsCheckLg color="#F7FAFC" size="14" />
      </Styled.ContainerActive>
    );
  }
}
