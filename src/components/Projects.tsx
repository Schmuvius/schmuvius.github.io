import { projects } from 'constants/projects';
import { Ref } from 'preact';
import { Search, SearchItem } from 'react-fuzzysort';
import { styled, theme } from 'stitches.config';
import {
  PROJECT_TYPE_ICONS,
  PROJECT_TYPE_NAMES,
  ProjectType,
} from 'stores/app';

export interface Projects {
  input: Ref<HTMLInputElement>;
}

const ITEM_SIZE = 8;

const Container = styled('div', {
  display: 'grid',
  gap: theme.space.gapUnrelatedRegular,
  gridTemplateColumns: 'repeat(1, 1fr)',
  overflowY: 'scroll',
  flex: 1,
  maxHeight: '100%',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '@twoRowSearch': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
});
const Item = styled('div', {
  height: `${ITEM_SIZE}rem`,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.componentInteractive_glass,
  borderRadius: theme.radii.regular,
  border: theme.borderStyles.interactive_glass,
});
const Content = styled('div', {
  display: 'flex',
  boxSizing: 'border-box',
  padding: theme.space.paddingMajor,
  gap: theme.space.gapUnrelatedMajor,
  flex: 1,
});
const IconContainer = styled('div', {
  width: `${ITEM_SIZE}rem`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const Icon = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});
const Info = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  fontSize: theme.fontSizes.paragraph,
  gap: theme.space.gapRelatedRegular,
  overflow: 'hidden',
});
const Title = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: theme.space.gapRelatedMajor,
});
const Name = styled('span', {
  color: theme.colors.textHighContrast_glass,
  fontWeight: 'bold',
});
const Type = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.space.gapRelatedRegular,
  color: theme.colors.textLowContrast_glass,
  fontSize: theme.fontSizes.label,

  '& svg': {
    width: '1em',
    height: '1em',
  },
});
const Description = styled('span', {
  color: theme.colors.textLowContrast_glass,
});
const Actions = styled('div', {
  display: 'flex',
  borderTop: theme.borderStyles.interactive_glass,
});
const Action = styled('a', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.space.gapRelatedRegular,
  color: theme.colors.textLowContrast_glass,
  textDecoration: 'none',
  padding: theme.space.paddingRegular,

  '&:hover': {
    textDecoration: 'underline',
    backgroundColor: theme.colors.componentInteractiveHover_glass,
  },
  '& + &': {
    borderLeft: theme.borderStyles.interactive_glass,
  },
});

export function Projects({ input }: Projects) {
  return (
    <Container>
      <Search
        input={input}
        list={projects.map(
          (project) =>
            ({
              query: `${project.name} ${project.description} ${
                ProjectType[project.type]
              }`,
              node: (
                <Item>
                  <Content>
                    <Info>
                      <Title>
                        <Name>{project.name}</Name>
                        <Type>
                          {PROJECT_TYPE_ICONS[project.type]}
                          {PROJECT_TYPE_NAMES[project.type]}
                        </Type>
                      </Title>

                      <Description>{project.description}</Description>
                    </Info>

                    {project.icon !== undefined && (
                      <IconContainer>
                        <Icon src={project.icon} />
                      </IconContainer>
                    )}
                  </Content>

                  {project.actions !== undefined && (
                    <Actions>
                      {project.actions.map((action) => (
                        <Action
                          href={action.url}
                          target="_blank"
                          key={action.url}
                        >
                          {action.icon}
                          {action.label}
                        </Action>
                      ))}
                    </Actions>
                  )}
                </Item>
              ),
            } satisfies SearchItem),
        )}
      />
    </Container>
  );
}
