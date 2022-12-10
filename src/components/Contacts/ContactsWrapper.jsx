import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.div`
  font-family: ${p => p.theme.fonts.heading};
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
`;
const Caption = styled.h2`
  font-size: ${p => p.theme.fontSizes.l};
  display: flex;
  flex-direction: column;
  align-items:center;
  color: #e1d80d;
`;
const Find = styled.div`
color: whitesmoke;
`
export const ContactsWrapper = ({ title, children }) => {
  return (
    <Section>
      {title && <Caption>{title}</Caption>}
      <Find>{children}</Find>
    </Section>
  );
};

ContactsWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
