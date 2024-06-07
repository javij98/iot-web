import { Card, Tab, TabGroup, TabList } from '@tremor/react'
import { HandThumbDownIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export function TabListBase() {
  const [selectedView, setSelectedView] = useState(2)

  return (
    <div className='mx-auto max-w-lg space-y-12 mt-6'>
      <TabGroup>
        <TabList
          // onChange={(value: number | undefined) => {
          //   if (value !== undefined) {
          //     setSelectedView(value)
          //   }
          // }}
          variant='solid'
          defaultValue={selectedView}
        >
          <Tab value='1' icon={HandThumbUpIcon}>tremor.so</Tab>
          <Tab value='2' icon={HandThumbDownIcon}>github.com</Tab>
          <Tab value='3'>strava.com</Tab>
        </TabList>
      </TabGroup>

      {
        selectedView === 1
          ? <Card className='h-28 bg-emerald-300'></Card>
          : <Card></Card>
      }
    </div>
  )
}
