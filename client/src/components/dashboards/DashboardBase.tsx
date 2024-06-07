import { Card, Grid, Tab, TabGroup, TabList, Text, Title } from '@tremor/react'
import { useState } from 'react'
import { CardGripMap } from '../CardGripMap'
import { ChartDonut } from '../ChartDonut'
import { TableBase } from '../TableBase'

export function DashboardBase() {
  const [selectedView, setSelectedView] = useState(0)

  const handleTabChange = (value) => {
    console.log('Tab seleccionada:', value)
    setSelectedView(value)
  }

  return (
    <main className='bg-slate-200 p-6 sm:p-10'>
      <Title>Dashboard</Title>
      <Text>Ejemplo de Dashboard con Tremor y React</Text>

      <TabGroup onChange={handleTabChange}>
        <TabList
          defaultValue={1}
        >
          <Tab value={1}>Principal</Tab>
          <Tab value={2}>Detalles</Tab>
        </TabList>
      </TabGroup>

      {selectedView === 0
        ? <>
            <CardGripMap />
            <ChartDonut />
          </>
        : <>
            <TableBase />
          </>
      }
    </main>
  )
}
