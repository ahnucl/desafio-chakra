import { ChevronLeftIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import Link from 'next/link'

export function BackButton() {
  return (
    <Link href="/">
      <IconButton
        position="absolute"
        left="140px"
        variant="link"
        fontSize="2rem"
        size="sm"
        _hover={{
          transition: 'filter 0.2s',
          '&:hover': {
            filter: 'opacity(0.8)',
          },
        }}
        icon={<ChevronLeftIcon />}
        aria-label="Voltar"
      />
    </Link>
  )
}
