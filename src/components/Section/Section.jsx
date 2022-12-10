import {Wrapper,Caption} from './Section.styled';

export const Section = ({title}) => {
    return (
        <Wrapper>
            {title && <Caption>{title}</Caption>} 
            
    </Wrapper>
)
}