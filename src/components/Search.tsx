import {
  CaretDownIcon,
  CaretUpIcon,
  CheckIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'preact/compat';
import { useImperativeHandle, useRef, useState } from 'preact/hooks';
import { styled, theme } from 'stitches.config';
import { PROJECT_TYPE_NAMES, useApp } from 'stores/app';

const Container = styled('div', {
  backgroundColor: theme.colors.componentInteractive,
  border: theme.borderStyles.interactive,
  flex: 1,
  borderRadius: theme.radii.blunter,
  display: 'flex',
  position: 'relative',
  cursor: 'text',

  '&:focus-within, &:active': {
    outline: theme.borderStyles.interactiveActive,
  },
  '@verticalNavbar': {
    width: '100%',
  },
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
  width: 0,
  textOverflow: 'ellipsis',

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
  borderRadius: theme.radii.blunter,
  padding: theme.space.paddingRegular,
  display: 'flex',
  flexDirection: 'column',
});
const DropdownItem = styled('button', {
  textAlign: 'left',
  padding: theme.space.paddingRegular,
  fontSize: theme.fontSizes.paragraph,
  cursor: 'pointer',
  border: 'none',
  borderRadius: theme.radii.blunter,
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

export const Search = forwardRef<HTMLInputElement, ComponentProps<'input'>>(
  (props, ref) => {
    const [open, setOpen] = useState(false);
    const currentFilter = useApp((state) => state.projectType);
    const input = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => input.current as HTMLInputElement);

    return (
      <Container onClick={() => input.current?.focus()}>
        <InputContainer>
          <SearchIcon />
          <Input placeholder="Search" ref={input} />
        </InputContainer>

        <DropdownTrigger
          onClick={(event: MouseEvent) => {
            event.stopPropagation();
            setOpen((state) => !state);
          }}
        >
          <DropdownText>
            {currentFilter === undefined
              ? 'All'
              : PROJECT_TYPE_NAMES[currentFilter]}
          </DropdownText>
          {open ? <DropdownIconUp /> : <DropdownIconDown />}
        </DropdownTrigger>

        {open && (
          <Dropdown>
            <DropdownItem
              onClick={() => {
                useApp.setState({ projectType: undefined });
                setOpen(false);
              }}
            >
              <DropdownSelectIcon selected={currentFilter === undefined} />
              All
            </DropdownItem>

            {Object.entries(PROJECT_TYPE_NAMES).map(([filter, name]) => {
              const filterInt = parseInt(filter, 10);

              return (
                <DropdownItem
                  key={filter}
                  onClick={() => {
                    useApp.setState({ projectType: filterInt });
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
  },
);
