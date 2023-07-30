import { PieChart, Pie, Cell, Label } from 'recharts';


export const ChartComponent1 = ({ percentualTotalProdutosAlta }: Props) => {
  const COLORS = ['#796CE0'];

  const formatLabel = (value: string) => {
    return `${value}%`;
  }
  
  return (
    <div>
      <PieChart width={100} height={100}>
        <Pie
          data={[{ value: percentualTotalProdutosAlta }]}
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="50%"
          stroke="none"
          paddingAngle={70}
          dataKey="value"
        >
          <Cell key={`cell-0`} fill={COLORS[0]} />
          <Label
            value={percentualTotalProdutosAlta}
            position="center"
            fill="#FFF"
            formatter={formatLabel}
          />
        </Pie>
      </PieChart>
    </div>
  );
}



export const ChartComponent2 = ({ percentualTotalProdutosBaixa }: Props) => {
  const COLORS = ['#796CE0'];

  const formatLabel = (value: string) => {
    return `${value}%`;
  };

  return (
    <div>
      <PieChart width={100} height={100}>
        <Pie
          data={[{ value: percentualTotalProdutosBaixa }]}
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="50%"
          stroke="none"
          paddingAngle={60}
          dataKey="value"
        >
          <Cell key={`cell-2`} fill={COLORS[0]} />
          <Label
            value={percentualTotalProdutosBaixa}
            position="center"
            fill="#FFF"
            formatter={formatLabel}
          />
        </Pie>
      </PieChart>
    
    </div>
  );
}

export const ChartComponent3 = ({ percentualTotalClientesAlta }: Props) => {
  const COLORS = ['#796CE0'];

  const formatLabel = (value: string) => {
    return `${value}%`;
  };

  return (
    <div>
      <PieChart width={100} height={100}>
        <Pie
          data={[{ value: percentualTotalClientesAlta }]}
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="50%"
          stroke="none"
          paddingAngle={40}
          dataKey="value"
        >
          <Cell key={`cell-3`} fill={COLORS[0]} />
          <Label
            value={percentualTotalClientesAlta}
            position="center"
            fill="#FFF"
            formatter={formatLabel}
          />
        </Pie>
      </PieChart>
    </div>
  );
}

export const ChartComponent4 = ({ percentualTotalClientesBaixa }: Props) => {
  const COLORS = ['#796CE0'];

  const formatLabel = (value: string) => {
    return `${value}%`;
  };

  return (
    <div>
      <PieChart width={100} height={100}>
        <Pie
          data={[{ value: percentualTotalClientesBaixa }]}
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="50%"
          stroke="none"
          paddingAngle={50}
          dataKey="value"
        >
          <Cell key={`cell-3`} fill={COLORS[0]} />
          <Label
            value={percentualTotalClientesBaixa}
            position="center"
            fill="#FFF"
            formatter={formatLabel}
          />
        </Pie>
      </PieChart>
    </div>
  );
}
