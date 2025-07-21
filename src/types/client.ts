export interface Client {
  id: number
  firstName: string
  lastName: string
  middleName: string
  name: string
  salutation: string
}

export interface ClientsResponse {
  clients: Client[]
  total_count: number
}

export interface AssessmentData {
  // Capacity
  primaryLoanRepayment: string
  otherLoanRepayment: string
  cashFlowAnalysis: string
  forcedSavings: string
  
  // Residency
  lengthOfStay: string
  ownershipOfResidence: string
  barangayRecord: string
  familyStatus: string
  toiletStatus: string
  
  // Record
  timeInProgram: string
  centerCollectionRecord: string
  paymentHistory: string
  numberOfLendingGroups: string
  
  // Center Status
  numberOfCenterMembers: string
  attendanceToMeetings: string
  programBenefitsReceived: string
  yearsInProgram: string
  pastdueRatio: string
  
  // Additional fields
  remarks: string
  assessmentDate: string
}
