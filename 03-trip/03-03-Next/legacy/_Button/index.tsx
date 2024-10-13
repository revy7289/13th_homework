import styled from "styled-components";

const StyledButton = styled.button`
    width: 80px;
    height: 40px;
    color: #222;
    border: 2px solid #9e9e9e;
    border-radius: 8px;
    background-color: #fafafa;
    cursor: pointer;
    margin: 4px 0px;
`;

interface BtnProps {
    className?: string;
    value?: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
}
// 버튼 컴포넌트 - 당장에는 딱히 큰 도움 안되지만 아무튼 컴포넌트
export default function Button({
    className,
    value,
    disabled,
    onClick,
}: BtnProps) {
    return (
        <StyledButton
            className={className}
            onClick={onClick}
            disabled={disabled}
        >
            {value}
        </StyledButton>
    );
}