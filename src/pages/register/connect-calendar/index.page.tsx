import { ArrowRight } from 'phosphor-react'
import { signIn, useSession } from 'next-auth/react'

import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'

import { Container, Header } from '../styles'

// import { api } from '@/lib/axios'
import { ConnectBox, ConnectItem } from './styles'

export default function Register() {
  const session = useSession()
  // async function handleRegister(data: RegisterForm) {
  //   try {
  //     await api.post('/users', {
  //       name: data.name,
  //       username: data.username,
  //     })
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Conecte sua agenda!</Heading>
        <Text>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>
      <ConnectBox>
        <ConnectItem>
          <Text>Google Agenda</Text>

          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Conectar
            <ArrowRight />
          </Button>
        </ConnectItem>

        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
