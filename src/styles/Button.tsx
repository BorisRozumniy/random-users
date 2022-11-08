import styled from "styled-components";

export const Button = styled.button<{ bg?: "blue" | "red" }>`
  appearance: none;
  background-color: ${({ theme, bg }) =>
    bg === "red" ? theme.colors.red : theme.colors.main};
  border: ${({ theme }) => `${theme.colors.black1} 1px solid`};
  border-radius: 6px;
  box-shadow: ${({ theme }) => `${theme.colors.black2} 0 1px 0`};
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;

  &:focus:not(:focus-visible):not(.focus-visible) {
    box-shadow: none;
    outline: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.strong};
  }

  &:focus {
    box-shadow: ${({ theme }) => `${theme.colors.outline} 0 0 0 3px`};
    outline: none;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.light};
    border-color: ${({ theme }) => theme.colors.black2};
    color: ${({ theme }) => theme.colors.white};
    cursor: default;
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.strong};
    box-shadow: ${({ theme }) => `${theme.colors.black3} 0 1px 0 inset`};
  }
`;
