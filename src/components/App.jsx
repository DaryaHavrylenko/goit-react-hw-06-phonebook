import {Container} from './Container.styled';
import { ThemeProvider } from 'styled-components';
import {theme} from './ThemeProvider/theme';
import {Section} from './Section/Section';


export const App = () => {
  return (
    <Container>
     <ThemeProvider theme={theme}>
        <Section title="Phonebook"></Section>
     </ThemeProvider>
    </Container>
  );
};
