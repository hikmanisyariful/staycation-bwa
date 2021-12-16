import formatNumber from "utils/formatNumber";

const formatUSDToIDR = str => {
  const USD = parseInt(str);
  const IDR = USD * 15000;
  return formatNumber(IDR);
};

export default formatUSDToIDR;
