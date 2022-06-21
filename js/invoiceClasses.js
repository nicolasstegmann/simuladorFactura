class InvoiceDetail {
    constructor(subzoneId, categoryId, subcategoryId, rateId, conceptId, rateAmount, m3Consumption) {
        this.subzoneId = subzoneId,
            this.categoryId = categoryId,
            this.subcategoryId = subcategoryId,
            this.rateId = rateId,
            this.conceptId = conceptId,
            this.subTotal = this.amountCalculator(rateAmount, m3Consumption),
            this.taxDetails = this.taxesCalculator(),
            this.taxTotal = this.taxTotalCalculator(),
            this.total = round(this.subTotal + this.taxTotal, 2)
    }
    amountCalculator = (rateAmount, m3Consumption) => {
        const amount = getObjectArrayValuebyId(accountingConcepts, this.conceptId, 'type') == 'C' ? rateAmount * m3Consumption : rateAmount
        return amount
    }
    taxesCalculator = () => {
        let taxes = []
        let taxesAccountingConcepts = accountingConcepts.filter((accounting_concept) => accounting_concept.type == 'I')
        taxes = taxesAccountingConcepts.map((taxesAccountingConcept) => {
            return {
                taxId: taxesAccountingConcept.id,
                taxAmount: round(taxesAccountingConcept.rate * this.subTotal, 2)
            }
        })
        return taxes
    }
    taxTotalCalculator = () => round(this.taxDetails.reduce((acumulator, taxDetail) => acumulator + taxDetail.taxAmount, 0), 2)
}
