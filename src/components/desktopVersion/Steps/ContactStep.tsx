import { Box, Text, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { formatarTelefone } from '../../../utils/masks'
import { Button } from '../../Button'
import { Input } from '../../Form/Input'
interface Props {
  handleNextStep: () => void
  previewMessage: string[]
  setPreviewMessage: (data) => void
  formData: any
  setFormData: (data) => void
}
interface IContactData {
  name: string
  email: string
  tel: string
}
const contactSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  tel: yup
    .string()
    .required('Numero do celular é obrigatório')
    .min(11, 'Numero do celular precisa ter no minimo 11 digitos'),

  email: yup.string().required('Email é obrigatório'),
})
export function ContactStep({
  handleNextStep,
  previewMessage,
  setPreviewMessage,
  setFormData,
  formData,
}: Props) {
  const {
    setValue,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  })
  const onSubmitHandler = async (values: IContactData) => {
    const { name, email, tel } = values
    const telOnlyNumber = tel.replace(/[^0-9]/g, '')
    setFormData({ ...formData, name, email, telOnlyNumber })
    handleNextStep()
  }
  const name = watch('name')
  const tel = watch('tel')
  useEffect(() => {
    if (tel) {
      setValue('tel', formatarTelefone(tel))
    }
  }, [setValue, tel])
  const handleInputNamePreview = () => {
    if (name !== '') {
      setPreviewMessage(
        `<p className="name">Olá, meu nome é <span style='color:#FC4F22;text-decoration:underline;font-weight:bold' id='name'>${name}</span>, vou fazer um(a)</p>`,
      )
    }
  }
  return (
    <Box w="100%" h="100%" as="form" onSubmit={handleSubmit(onSubmitHandler)}>
      <Text fontSize="24px" lineHeight="32px" mb="80px">
        Olá, bem vindo a Eshows. Estamos animados para oferecer a você a
        oportunidade de encontrar os melhores artistas musicais para os seus
        eventos. Vamos começar?
      </Text>
      <VStack spacing="15px" align="flex-start">
        <Input
          name="name"
          w="578px"
          placeholder="Digite seu nome"
          label="Qual o seu nome?"
          error={errors.name}
          {...register('name')}
          onBlur={handleInputNamePreview}
        />
        <Input
          name="email"
          w="380px"
          placeholder="Digite seu email"
          label="Email"
          type="email"
          error={errors.email}
          {...register('email')}
        />
        <Input
          name="tel"
          w="380px"
          placeholder="11 959067792"
          label="Telefone para contato"
          error={errors.tel}
          {...register('tel')}
        />
      </VStack>
      <Button title="Continuar cotação" w="380px" mt="80px" type="submit" />
    </Box>
  )
}
