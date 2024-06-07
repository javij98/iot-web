import { Card, DonutChart, Title } from '@tremor/react'

// Datos de ejemplo
const datahero = [
  {
    name: 'Noche Holding AG',
    value: 9800,
  },
  {
    name: 'Rain Drop AG',
    value: 4567,
  },
  {
    name: 'Push Rail AG',
    value: 3908,
  },
  {
    name: 'Flow Steal AG',
    value: 2400,
  },
  {
    name: 'Tiny Loop Inc.',
    value: 2174,
  },
  {
    name: 'Anton Resorts Holding',
    value: 1398,
  },
];

const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat('us').format(number).toString()}`;

export function ChartDonut() {
  return (
    <>
      <Card className='mt-6'>
        <Title>Sales by city</Title>
        <div className="space-y-3">
          <span className="text-center block font-mono text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Ejemplo de Gráfica Donut
          </span>
          <div className="flex justify-center mt-6">
            <DonutChart
              data={datahero}
              variant="donut"
              valueFormatter={dataFormatter}
              onValueChange={(v) => console.log(v)}
            />
          </div>
        </div>
      </Card>
    </>
  )
}
