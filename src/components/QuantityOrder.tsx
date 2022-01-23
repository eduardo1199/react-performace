import React from 'react';

interface QuantityOrderProps {
  quantity: number;
}

function QuantityOrder ({quantity}: QuantityOrderProps) {
  return (
    <h1>
      {quantity}
    </h1>
  )
}

export default QuantityOrder;
