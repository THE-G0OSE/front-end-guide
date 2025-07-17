import { useAppSelector } from "@hooks"
import { ThemeSelection } from "../model"
import type { FC, ReactNode } from "react"

interface IProps {
    children: ReactNode
}

const ThemeProvider: FC<IProps> = ({children}) => {

  const theme = useAppSelector(ThemeSelection).theme

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
        {children}
    </div>
  )
}

export default ThemeProvider