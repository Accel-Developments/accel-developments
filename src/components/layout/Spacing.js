import { createSpacing } from 'spacing-helper';
import styled from "styled-components";
 const spacing = createSpacing({ factor: 8 }); // 8 is default scaling factor
spacing(1,2,3,4); // '8px 16px 24px 32px'

const MODULE = 4;

export const HeaderSpacing = styled.header`
    margin: ${MODULE * 2}px ${MODULE * 3}px;
`;
