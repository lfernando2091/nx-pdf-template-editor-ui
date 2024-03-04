import styled from '@emotion/styled'

type FillContentProps = {
  h?: number
  w?: number
  borderBottom?: boolean
  borderRight?: boolean
}

export const FillContent = styled('div')<FillContentProps>`
  background-color: var(--gray-a3);
  height: ${props => props.h ? `${props.h}px`: "100%" };
  width: ${props => props.w ? `${props.w}px`: "100%" };
  background-clip: padding-box;
  border-bottom: ${props => props.borderBottom ? "0.5px dashed var(--accent-a11)": "" };
  border-right: ${props => props.borderRight ? "0.5px dashed var(--accent-a11)": "" };
`