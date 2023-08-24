import {
  CaretDownIcon,
  CaretUpIcon,
  CheckIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { useState } from 'preact/hooks';
import { styled, theme } from 'stitches.config';
import { FILTER_NAMES, useApp } from 'stores/app';

const Container = styled('div', {
  backgroundColor: theme.colors.componentInteractive,
  border: theme.borderStyles.interactive,
  flex: 1,
  borderRadius: '35px',
  display: 'flex',
  position: 'relative',
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
const DropdownTrigger = styled('button', {
  backgroundColor: 'transparent',
  border: 'none',
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
const Dropdown = styled('div', {
  position: 'absolute',
  top: '100%',
  right: 0,
  transform: `translateY(${theme.space.gapRelatedMajor})`,
  backgroundColor: theme.colors.componentInteractive,
  border: theme.borderStyles.interactive,
  borderRadius: theme.radii.regular,
  padding: theme.space.paddingMajor,
  display: 'flex',
  flexDirection: 'column',
});
const DropdownItem = styled('button', {
  textAlign: 'left',
  padding: theme.space.paddingRegular,
  fontSize: theme.fontSizes.paragraph,
  cursor: 'pointer',
  border: 'none',
  borderRadius: theme.radii.regular,
  color: theme.colors.textHighContrast,
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  gap: theme.space.gapRelatedRegular,

  '&:hover': {
    backgroundColor: theme.colors.componentInteractiveHover,
  },
  '&:focus, &:active': {
    backgroundColor: theme.colors.componentInteractiveActive,
  },
});
const DropdownSelectIcon = styled(CheckIcon, {
  width: '1rem',
  height: '1rem',
  color: theme.colors.textHighContrast,

  variants: {
    selected: {
      false: {
        opacity: 0,
      },
    },
  },
});

export default function Search() {
  const [open, setOpen] = useState(false);
  const currentFilter = useApp((state) => state.filter);

  return (
    <Container>
      <InputContainer>
        <SearchIcon />
        <Input placeholder="Search" />
      </InputContainer>

      <DropdownTrigger onClick={() => setOpen((state) => !state)}>
        <DropdownText>{FILTER_NAMES[currentFilter]}</DropdownText>
        {open ? <DropdownIconUp /> : <DropdownIconDown />}
      </DropdownTrigger>

      {open && (
        <Dropdown>
          {Object.entries(FILTER_NAMES).map(([filter, name]) => {
            const filterInt = parseInt(filter, 10);

            return (
              <DropdownItem
                key={filter}
                onClick={() => {
                  useApp.setState({ filter: filterInt });
                  setOpen(false);
                }}
              >
                <DropdownSelectIcon selected={currentFilter === filterInt} />
                {name}
              </DropdownItem>
            );
          })}
        </Dropdown>
      )}
    </Container>
  );
}
