import React from "react";
import { useRouter } from "next/router";

function TICKER() {
  const router = useRouter();

  /*   const {
    query: { itens, quantities, comentary },
  } = router; */
  const ticker = router.query.ticker;

  return <div>TICKER: {ticker}</div>;
}

export default TICKER;
