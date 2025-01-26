import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode;
    className?: string;
}

const Wrapper = ({ children, className = "" }: WrapperProps) => {
    return <div className={`w-full max-w-[1440px] px-4 md:px-6 lg:px-8 mx-auto ${className}`}>{children}</div>;
};

export default Wrapper;
