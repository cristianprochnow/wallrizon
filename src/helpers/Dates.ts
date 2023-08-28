class Dates {
  formatDate(date:  Date, format: string = 'Y-M-D'): string {
    if (!date) return ''

    const dateObject = new Date(date)

    const day = dateObject.getDate().toString().padStart(2, '0')
    const month = dateObject.getMonth().toString().padStart(2, '0')
    const year = dateObject.getFullYear().toString().padStart(4, '0')

    let dateText = format

    dateText = dateText.replace('Y', year)
    dateText = dateText.replace('M', month)
    dateText = dateText.replace('D', day)

    return dateText
  }

  incrementDate(date: Date): Date {
    return new Date(date.setDate(date.getDate() + 1))
  }

  decrementDate(date: Date): Date {
    return new Date(date.setDate(date.getDate() - 1))
  }
}

export default Dates;