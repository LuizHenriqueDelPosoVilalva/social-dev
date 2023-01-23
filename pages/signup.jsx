import styled from 'styled-components'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from 'next/router'

import { signupSchema } from '../modules/user/user.schema'

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
  const router= useRouter()
  const { control,handleSubmit, formState: { errors }, setError }= useForm({
    resolver: joiResolver(signupSchema)
  }) 

  const handleForm= async(data)=> {
    try {
      const { status }= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
      if(status === 201) {
        router.push('/')
      }
   }catch (err){
      if(err.response.data.code === 11000) {
        setError(err.response.data.duplicatedKey, {
          type: 'duplicated'
        })
      }
   }
  }


  return (
    <ImageWithSpace>
      <H1># Social Dev</H1>
      <H4>Tudo que acontece no mundo dev, está aqui!</H4>
      <FormContainer>
        <H2>Crie sua conta</H2>
        <Form onSubmit={handleSubmit(handleForm)}>
          <Input label= "Nome" name= 'firstName' control={control}/>
          <Input label= "Sobrenome" name= 'lastName' control={control}/>
          <Input label= "Usuário" name= 'user' control={control}/>
          <Input label= "Email" type="email" name= 'email' control={control}/>
          <Input label= "Senha" type="password" name= 'password' control={control}/>
          <Button type= 'submit' disabled={Object.keys(errors).length > 0}>Cadastrar</Button>
        </Form>
        <Text>Já possui uma conta? <Link href='/login'>Faça o seu login</Link></Text>
      </FormContainer>
    </ImageWithSpace>
  )
}

export default SignupPage