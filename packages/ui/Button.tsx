import { ReactNode } from 'react'
import { Button as ButtonChakra } from '@chakra-ui/react'

type Props = {
  children: ReactNode
}

export const Button = ({ children }: Props) => {
  return <ButtonChakra>{children}</ButtonChakra>
}
