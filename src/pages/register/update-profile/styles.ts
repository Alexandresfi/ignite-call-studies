import { Box, Text, styled } from '@ignite-ui/react'

export const ProfileBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  marginTop: '$6',

  borderRadius: '6px',
  border: '1px solid $gray-600',
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',
})
