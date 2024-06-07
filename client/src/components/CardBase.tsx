import { Card, Flex, Metric, ProgressBar, Text } from '@tremor/react'

export function CardBase() {
  return (
    <Card>
      <Text>Sales</Text>
      <Metric>$ 171.564</Metric>
      <Flex>
        <span>32% of annual taget</span>
        <span>$ 225,000</span>
      </Flex>
      <ProgressBar value={45} className='mt-3' />
    </Card>
  )
}
