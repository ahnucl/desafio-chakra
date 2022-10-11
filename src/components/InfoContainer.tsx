import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import { InfoOutlineIcon } from '@chakra-ui/icons'

interface InfoProps {
  description: string
  count: number
  hasToolTip?: boolean
}

export function Info({ count, description, hasToolTip = false }: InfoProps) {
  return (
    <Flex align="end">
      <Box lineHeight={['30px', '50px']} textAlign={['left', 'center']}>
        <Text fontWeight="semibold" fontSize={['2xl', '5xl']} color="highlight">
          {count}
        </Text>

        <Text fontWeight={['regular', 'semibold']} fontSize={['lg', '2xl']}>
          {description}
        </Text>
      </Box>
      {hasToolTip && (
        <Tooltip
          label="cidades do continente que estão entre as 100 mais visitadas do mundo"
          color="light.headingsAndText"
        >
          <InfoOutlineIcon w={4} h={4} color="dark.info50" mb={2.5} ml={2} />
        </Tooltip>
      )}
    </Flex>
  )
}
