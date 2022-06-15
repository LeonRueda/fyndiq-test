import { FC } from "react"

export const Title: FC<{main: boolean}> = ({main, children}) => {
  if (main) return <h1>{children}</h1>
  return <h3>{children}</h3>
}
