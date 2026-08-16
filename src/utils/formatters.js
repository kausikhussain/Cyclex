/**
 * Format numbers according to Indian numbering system (e.g., ₹2,49,999)
 */
export const formatINR = (amount, includeSymbol = true) => {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
  
  const num = Math.round(Number(amount));
  const numStr = num.toString();
  
  let result = '';
  if (numStr.length <= 3) {
    result = numStr;
  } else {
    const lastThree = numStr.substring(numStr.length - 3);
    const otherNumbers = numStr.substring(0, numStr.length - 3);
    const formattedOther = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    result = `${formattedOther},${lastThree}`;
  }
  
  return includeSymbol ? `₹${result}` : result;
};

/**
 * Calculate standard Indian No-Cost / Low-Cost EMI
 */
export const calculateEMI = (principal, months = 24, interestRate = 0) => {
  if (!principal) return 0;
  if (interestRate === 0) {
    return Math.round(principal / months);
  }
  const monthlyRate = interestRate / 12 / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  return Math.round(emi);
};
