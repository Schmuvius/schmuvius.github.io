import {
  CaretDownIcon,
  CaretUpIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'preact/compat';
import { useImperativeHandle, useRef, useState } from 'preact/hooks';
import { styled, theme } from 'stitches.config';
import {
  PROJECT_TYPE_ICONS,
  PROJECT_TYPE_NAMES_PLURAL,
  ProjectType,
  useApp,
} from 'stores/app';

const Container = styled('div', {
  backgroundColor: theme.colors.componentInteractive_glass,
  border: theme.borderStyles.interactive_glass,
  borderRadius: theme.radii.blunter,
  display: 'flex',
  position: 'relative',
  cursor: 'text',
  transition: theme.transitions.regular,
  overflow: 'hidden',

  '&:focus-within, &:active': {
    outline: theme.borderStyles.interactiveActive_glass,
  },
  '@verticalNavbar': {
    width: '100%',
  },

  variants: {
    expanded: {
      true: {
        flex: 1,
        opacity: 1,
      },
      false: {
        flex: 0,
        width: 0,
        opacity: 0,
      },
    },
  },
});
const InputContainer = styled('div', {
  display: 'flex',
  flex: 1,
  padding: `${theme.space.paddingRegular} ${theme.space.paddingMajor}`,
  alignItems: 'center',
  gap: theme.space.gapRelatedMajor,
  justifyContent: 'center',
});
const SearchIcon = styled(MagnifyingGlassIcon, {
  width: '1rem',
  height: '1rem',
  color: theme.colors.textLowContrast_glass,
});
const Input = styled('input', {
  padding: '0',
  outline: 'none',
  border: 'none',
  flex: 1,
  backgroundColor: 'transparent',
  fontSize: theme.fontSizes.input,
  color: theme.colors.textHighContrast_glass,
  width: 0,
  textOverflow: 'ellipsis',

  '&::placeholder': { color: theme.colors.textLowContrast_glass },
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
  borderLeft: theme.borderStyles.interactive_glass,
});
const DropdownIconDown = styled(CaretDownIcon, {
  width: '1rem',
  height: '1rem',
  color: theme.colors.textHighContrast_glass,
});
const DropdownIconUp = styled(CaretUpIcon, {
  width: '1rem',
  height: '1rem',
  color: theme.colors.textHighContrast_glass,
});
const DropdownText = styled('span', {
  fontSize: theme.fontSizes.paragraph,
  color: theme.colors.textHighContrast_glass,
});
const Dropdown = styled('div', {
  position: 'absolute',
  top: '100%',
  right: 0,
  transform: `translateY(${theme.space.gapRelatedMajor})`,
  backgroundColor: theme.colors.componentInteractive_glass,
  border: theme.borderStyles.interactive_glass,
  borderRadius: theme.radii.blunter,
  padding: theme.space.paddingRegular,
  display: 'flex',
  flexDirection: 'column',
  backdropFilter: 'blur(1rem)',
});
const DropdownItem = styled('button', {
  textAlign: 'left',
  padding: theme.space.paddingRegular,
  fontSize: theme.fontSizes.paragraph,
  cursor: 'pointer',
  border: 'none',
  borderRadius: theme.radii.blunter,
  color: theme.colors.textHighContrast_glass,
  backgroundColor: 'transparent',
  display: 'flex',
  alignItems: 'center',
  gap: theme.space.gapRelatedMajor,

  '&:hover': {
    backgroundColor: theme.colors.componentInteractiveHover_glass,
  },
  '&:focus, &:active': {
    backgroundColor: theme.colors.componentInteractiveActive_glass,
  },
});
const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& svg': {
    width: '1rem',
    height: '1rem',
    color: theme.colors.textHighContrast_glass,
  },
});
const Name = styled('span', {
  flex: 1,
});
const DropdownSelectIcon = styled(CheckIcon, {
  width: '1rem',
  height: '1rem',
  color: theme.colors.textHighContrast_glass,

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
    const currentType = useApp((state) => state.projectType);
    const input = useRef<HTMLInputElement>(null);
    const showProjects = useApp((state) => state.showProjects);

    useImperativeHandle(ref, () => input.current as HTMLInputElement);

    return (
      <Container expanded={showProjects} onClick={() => input.current?.focus()}>
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
          <IconContainer>
            {currentType === undefined ? (
              <RocketIcon />
            ) : (
              PROJECT_TYPE_ICONS[currentType]
            )}
          </IconContainer>
          <DropdownText>
            {currentType === undefined
              ? 'All'
              : PROJECT_TYPE_NAMES_PLURAL[currentType]}
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
              <RocketIcon />
              <Name>All</Name>
              <DropdownSelectIcon selected={currentType === undefined} />
            </DropdownItem>

            {Object.entries(PROJECT_TYPE_NAMES_PLURAL).map(([filter, name]) => {
              const filterInt = parseInt(filter, 10);

              return (
                <DropdownItem
                  key={filter}
                  onClick={() => {
                    useApp.setState({ projectType: filterInt });
                    setOpen(false);
                  }}
                >
                  <IconContainer>
                    {PROJECT_TYPE_ICONS[filterInt as ProjectType]}
                  </IconContainer>
                  <Name>{name}</Name>
                  <DropdownSelectIcon selected={currentType === filterInt} />
                </DropdownItem>
              );
            })}
          </Dropdown>
        )}
      </Container>
    );
  },
);
