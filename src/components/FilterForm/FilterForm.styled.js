import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  display: block;

  align-items: center;
  position: relative;
  align-items: center;

  width: 200px;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Select = styled.select`
  padding: 8px 16px;

  background-color: transparent;
  border: none;
  width: 100%;
  height: 40px;
  border-bottom: 2px solid #471ca9;

  font-weight: 400;
  font-size: 18px;
  line-height: 1.22;
  color: #471ca9;

  cursor: inherit;
  outline: none;
  z-index: 1;
`;
