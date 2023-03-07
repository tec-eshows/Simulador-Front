import { Flex, Text } from '@chakra-ui/react'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { Button } from '../../Button'
import { Select } from '../../Form/Select'
interface Props {
  handleNextStep: () => void
}

export function DateStep({ handleNextStep }: Props) {
  const [yearArray, seyYearArray] = useState([])
  const [hours, setHours] = useState([])
  const months = [
    { nome: 'janeiro', numero: 1 },
    { nome: 'fevereiro', numero: 2 },
    { nome: 'março', numero: 3 },
    { nome: 'abril', numero: 4 },
    { nome: 'maio', numero: 5 },
    { nome: 'junho', numero: 6 },
    { nome: 'julho', numero: 7 },
    { nome: 'agosto', numero: 8 },
    { nome: 'setembro', numero: 9 },
    { nome: 'outubro', numero: 10 },
    { nome: 'novembro', numero: 11 },
    { nome: 'dezembro', numero: 12 },
  ]

  function createYearArray() {
    console.log('teste')
    const array = []
    const startYear = 2023
    const endYear = 2050

    for (let i = startYear; i <= endYear; i++) {
      array.push(i)
    }
    console.log(array)
    seyYearArray(array)
    return yearArray
  }
  function createHoursArray() {
    const hours: any = ['Selecione']
    let hour = moment().startOf('day')

    const finalHour = moment().set({
      hour: 23,
      minute: 45,
      seconds: 0,
    })
    while (hour < finalHour) {
      hours.push(moment(hour))
      hour = moment(hour).add(15, 'minutes')
    }

    setHours(hours)
  }
  useEffect(() => {
    createYearArray()
    createHoursArray()
  }, [])

  return (
    <Flex w="100%" h="100%" flexDir="column">
      <Text fontSize="24px" lineHeight="32px" mb="40px">
        Quando será o seu show? Qual a data e hora?
      </Text>
      <Text>
        Vamos fazer deste show um sucesso! Para otimizar a organização dos
        equipamentos e evitar possíveis atrasos, pedimos que os artistas cheguem
        com 40 minutos de antecedência, no mínimo!
      </Text>
      <Flex gridGap="8px" mt="80px" mb="24px">
        <Select name="day" label="Dia" w="152px">
          {[...Array(moment().daysInMonth())].map(
            (_, i) => i !== 0 && <option key={i}>{i}</option>,
          )}
        </Select>
        <Select name="month" label="Mês" w="152px">
          {months.map((item, i) => {
            return <option key={i}>{item.nome}</option>
          })}
        </Select>

        <Select name="year" label="Ano" w="152px">
          {yearArray.map((item, i) => {
            return <option key={i}>{item}</option>
          })}
        </Select>
      </Flex>
      <Select name="hours" label="Horário de inicio do show " w="314px">
        {hours.map((item, i) => {
          return (
            <option key={i}>
              {i === 0 ? item : moment(item).format('HH:mm')}
            </option>
          )
        })}
      </Select>
      <Flex w="100%" h="100%" align="flex-end">
        <Button
          title="Continuar cotação"
          w="380px"
          mt="80px"
          onClick={handleNextStep}
        />
      </Flex>
    </Flex>
  )
}
