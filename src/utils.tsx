import * as React from "react";
interface BackProps {
    children: React.ReactNode
}
export const Back: React.FC<BackProps> = ({children, ...props}) => <a {...props} onClick={(e) => {
    e.preventDefault()
    window.history.back()
}}>{children}</a>
interface LinkProps {
    to: string,
    children: React.ReactNode
}
export const Link: React.FC<LinkProps> = ({to, children, ...props}) => <a href={to} {...props}>{children}</a>
