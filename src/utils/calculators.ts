/**
 * Financial Calculator Utilities
 * Reusable calculation functions for EMI, SIP, FD
 */

export const calculateEMI = (principal: number, annualRate: number, years: number): number => {
  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;
  
  if (monthlyRate === 0) {
    return Math.round(principal / months);
  }
  
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
              (Math.pow(1 + monthlyRate, months) - 1);
  
  return Math.round(emi);
};

export const calculateSIP = (monthlyAmount: number, annualReturn: number, years: number): number => {
  const monthlyRate = annualReturn / 100 / 12;
  const months = years * 12;
  
  if (monthlyRate === 0) {
    return Math.round(monthlyAmount * months);
  }
  
  const maturityValue = monthlyAmount * 
                       ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
                       (1 + monthlyRate);
  
  return Math.round(maturityValue);
};

export const calculateFD = (principal: number, annualRate: number, years: number): number => {
  const maturityValue = principal * Math.pow((1 + (annualRate / 100)), years);
  return Math.round(maturityValue);
};

export const getCIBILStatus = (score: number): { label: string; color: string; bg: string; border: string } => {
  if (score >= 750) {
    return { label: 'Excellent', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-100' };
  }
  if (score >= 700) {
    return { label: 'Good', color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-100' };
  }
  if (score >= 650) {
    return { label: 'Fair', color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-100' };
  }
  return { label: 'Poor', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-100' };
};
