/** Legal and registered business details for DAU DAU LLP */

export const company = {
  legalName: 'DAU DAU LLP',
  brandName: 'Dau Dau',
  gstin: '07AAZFD7303A1ZI',
  address: {
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pinCode: '110055',
    country: 'India',
  },
} as const;

export const formattedAddress = `${company.address.city}, ${company.address.state} ${company.address.pinCode}, ${company.address.country}`;
