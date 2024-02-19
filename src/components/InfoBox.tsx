import { ReactNode } from "react"

interface InfoBoxProps {
    children: ReactNode
    className?: string
}

export default function InfoBox({ children, className }: InfoBoxProps): JSX.Element {
    return (
        <div className={`${className} border-bold-red border-2 bg-background-darkblue`}>
            {children}
        </div>
    )
}