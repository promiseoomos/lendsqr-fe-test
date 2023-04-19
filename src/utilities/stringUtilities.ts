export const capitalize = (str : string) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

export const formatNumber = (val: string | number) => {
    let confirmedValue = Number(val)
    let formatter =  new Intl.NumberFormat('en-US', {
      style: 'decimal',
      useGrouping: true
    });
  
    return formatter.format(confirmedValue)
  }
