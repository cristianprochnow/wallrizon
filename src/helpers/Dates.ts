class Dates {
  formatDate(date:  Date): string {
    if (!date) return ''

    const dateObject = new Date(date)

    const day = dateObject.getDate().toString().padStart(2, '0')
    const month = dateObject.getMonth().toString().padStart(2, '0')
    const year = dateObject.getFullYear().toString().padStart(4, '0')

    return `${year}-${month}-${day}`
  }
}

export default Dates;