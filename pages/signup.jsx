import styled from 'styled-components'
import Link from 'next/link'

import ImageWithSpace from '../src/components/layout/ImageWithSpace'
import H1 from '../src/components/typography/H1'
import H2 from '../src/components/typography/H2'
import H4 from '../src/components/typography/H4'
import Button from '../src/components/inputs/Button'
import Input from '../src/components/inputs/Input'

const FormContainer= styled.div `
  margin-top: 60px;
`

const Form= styled.form `
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
`

const Text= styled.p `
  text-align: center;
`

function SignupPage() {
  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev, está aqui!</H4>
      <FormContainer>
        <H2>Crie sua conta</H2>
        <Form>
          <Input label= "Nome" />
          <Input label= "Sobrenome" />
          <Input label= "Usuário" />
          <Input label= "Email" type="email" />
          <Input label= "Senha" type="password"/>
          <Button>Entrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href='/login'>Faça o seu login</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignupPage