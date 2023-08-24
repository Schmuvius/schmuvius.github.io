import {
  CaretDownIcon,
  CaretUpIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { useState } from 'preact/hooks';
import { styled, theme } from 'stitches.config';

const Container = styled('div', {
  backgroundColor: theme.colors.componentInteractive,
  border: theme.borderStyles.interactive,
  flex: 1,
  borderRadius: '35px',
  display: 'flex',
});
const InputContainer = styled('div', {
  display: 'flex',
  gap: theme.space.gapRelatedMajor,
  flex: 1,
  padding: `${theme.space.paddingRegular} ${theme.space.paddingMajor}`,
  alignItems: 'center',
  justifyContent: 'center',
});
const SearchIcon = styled(MagnifyingGlassIcon, {
  width: '1rem',
  height: '1rem',
  color: theme.colors.textLowContrast,
});
const Input = styled('input', {
  padding: '0',
  outline: 'none',
  border: 'none',
  flex: 1,
  backgroundColor: 'transparent',
  fontSize: theme.fontSizes.input,
  color: theme.colors.textHighContrast,

  '&::placeholder': { color: theme.colors.textLowContrast },
});
const DropdownContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${theme.space.paddingRegular} ${theme.space.paddingMajor}`,
  cursor: 'pointer',
  userSelect: 'none',
  gap: theme.space.gapRelatedMajor,
  borderLeft: theme.borderStyles.interactive,
});
const DropdownIconDown = styled(CaretDownIcon, {
  width: '1rem',
  height: '1rem',
  color: theme.colors.textHighContrast,
});
const DropdownIconUp = styled(CaretUpIcon, {
  width: '1rem',
  height: '1rem',
  color: theme.colors.textHighContrast,
});
const DropdownText = styled('span', {
  fontSize: theme.fontSizes.paragraph,
  color: theme.colors.textHighContrast,
});

export default function Search() {
  const [opened, setOpened] = useState(false);

  return (
    <Container>
      <InputContainer>
        <SearchIcon />
        <Input placeholder="Search" />
      </InputContainer>

      <DropdownContainer onClick={() => setOpened((state) => !state)}>
        <DropdownText>Resource packs</DropdownText>
        {opened ? <DropdownIconUp /> : <DropdownIconDown />}
      </DropdownContainer>
    </Container>
  );
}
