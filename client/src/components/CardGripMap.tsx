import {
  BadgeDelta,
  Card,
  Flex,
  Grid,
  Metric,
  ProgressBar,
  Text,
} from '@tremor/react'

const data = [
  {
    title: 'Sales',
    metric: '$ 12.699',
    progress: 15.9,
    target: '$ 80.000',
    delta: '13.2%',
    deltaType: 'moderateIncreasse',
  },
  {
    title: 'Revenue',
    metric: '$ 12.699',
    progress: 15.9,
    target: '$ 80.000',
    delta: '13.2%',
    deltaType: 'moderateIncreasse',
  },
  {
    title: 'Orders',
    metric: '$ 12.699',
    progress: 15.9,
    target: '$ 80.000',
    delta: '13.2%',
    deltaType: 'moderateIncreasse',
  },
]

export function CardGripMap() {
  return (
    <main>
      <Grid className='mt-6 gap-x-6 gap-y-6' numItemsMd={2} numItemsLg={3}>
        {data.map((item) => (
          <Card key={item.title} decoration='top'>
            <Flex className='justify-between items-start'>
              <div className='flex flex-col'>
                <Text className='text-left text-tremor-content dark:text-dark-tremor-content'>
                  {item.title}
                </Text>
                <Metric className='text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold'>
                  {item.metric}
                </Metric>
              </div>
              <div className='flex justify-end'>
                <BadgeDelta>{item.delta}</BadgeDelta>
              </div>
            </Flex>
            <Flex className='mt-4 gap-x-2'>
              <span>{`${item.progress}% (${item.metric})`}</span>
              <span>{item.target}</span>
            </Flex>
            <ProgressBar value={item.progress} className='mt-3' />
          </Card>
        ))}
      </Grid>
    </main>
  )
}
