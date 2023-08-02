import { NextSeo } from 'next-seo'
import Image from 'next/image'

import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'

import PreviewImage from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | iginite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agentamentos no seu tempo livre."
      />
      <Container>
        <Hero>
          <Heading size="4xl">Agendamento descomplicado</Heading>
          <Text size="xl">
            Conecte seu calendário e permita que as pessoas marquem agendamentos
            no seu tempo livre.
          </Text>
          <ClaimUsernameForm />
        </Hero>
        <Preview>
          <Image
            src={PreviewImage}
            height={400}
            quality={100}
            alt="calendário simbolizando aplicação em funcionamento"
            priority
          />
        </Preview>
      </Container>
    </>
  )
}
