"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import { Eye, Edit, Save, X } from "lucide-react"

interface Client {
  id: number
  firstName: string
  lastName: string
  middleName: string
  name: string
  salutation: string
}

interface ClientsResponse {
  clients: Client[]
  total_count: number
}

interface AssessmentData {
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

export default function ViewClientPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [selectedClientId, setSelectedClientId] = useState<string>("")
  const [clientData, setClientData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingClients, setIsLoadingClients] = useState(true)
  const [viewMode, setViewMode] = useState<'view' | 'enter'>('view')
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    primaryLoanRepayment: "",
    otherLoanRepayment: "",
    cashFlowAnalysis: "",
    forcedSavings: "",
    lengthOfStay: "",
    ownershipOfResidence: "",
    barangayRecord: "",
    familyStatus: "",
    toiletStatus: "",
    timeInProgram: "",
    centerCollectionRecord: "",
    paymentHistory: "",
    numberOfLendingGroups: "",
    numberOfCenterMembers: "",
    attendanceToMeetings: "",
    programBenefitsReceived: "",
    yearsInProgram: "",
    pastdueRatio: "",
    remarks: "",
    assessmentDate: new Date().toISOString().split('T')[0]
  })

  // Fetch clients list on component mount
  useEffect(() => {
    fetchClients()
  }, [])

  const fetchClients = async () => {
    try {
      setIsLoadingClients(true)
      const response = await fetch("http://localhost:5000/clients", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const data: ClientsResponse = await response.json()
        setClients(data.clients)
        console.log("=== CLIENTS FETCHED ===")
        console.log(JSON.stringify(data, null, 2))
      } else {
        throw new Error(`Failed to fetch clients: ${response.status}`)
      }
    } catch (error) {
      console.error("Error fetching clients:", error)
      toast.error("Failed to load clients", {
        description: "Please check your connection and try again.",
      })
    } finally {
      setIsLoadingClients(false)
    }
  }

  const fetchClientData = async (clientId: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(`http://localhost:5000/client/${clientId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const data = await response.json()
        setClientData(data)

        console.log("=== CLIENT DATA FETCHED ===")
        console.log(JSON.stringify(data, null, 2))

        toast.success("Client data loaded successfully!")
      } else {
        throw new Error(`Failed to fetch client data: ${response.status}`)
      }
    } catch (error) {
      console.error("Error fetching client data:", error)
      toast.error("Failed to load client data", {
        description: "Please try selecting the client again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleClientSelect = (clientId: string) => {
    setSelectedClientId(clientId)
    if (clientId) {
      fetchClientData(clientId)
    } else {
      setClientData(null)
    }
  }

  const handleSaveAssessment = async () => {
    if (!selectedClientId) {
      toast.error("Please select a client first")
      return
    }

    try {
      setIsLoading(true)
      const response = await fetch(`http://localhost:5000/client/${selectedClientId}/assessment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(assessmentData)
      })

      if (response.ok) {
        toast.success("Assessment saved successfully!")
        console.log("=== ASSESSMENT SAVED ===")
        console.log(JSON.stringify(assessmentData, null, 2))
      } else {
        throw new Error(`Failed to save assessment: ${response.status}`)
      }
    } catch (error) {
      console.error("Error saving assessment:", error)
      toast.error("Failed to save assessment", {
        description: "Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleAssessmentChange = (field: keyof AssessmentData, value: string) => {
    setAssessmentData(prev => ({ ...prev, [field]: value }))
  }

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "Not provided"
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return "Invalid date"
    }
  }

  const DataRow = ({ label, value }: { label: string; value: string | number | null | undefined }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
      <span className="font-medium text-gray-700">{label}:</span>
      <span className="text-gray-900">{value || "Not provided"}</span>
    </div>
  )

  const FormSection = ({ title, children, bgColor = "bg-gray-50" }: { title: string; children: React.ReactNode; bgColor?: string }) => (
    <Card className="border-2 border-black">
      <CardHeader className={bgColor}>
        <CardTitle className="text-lg font-bold text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  )

  const ScoreOption = ({ value, label, field }: { value: string; label: string; field: keyof AssessmentData }) => (
    <div className="flex items-center space-x-2 p-2 border rounded hover:bg-gray-50">
      <RadioGroupItem value={value} id={`${field}-${value}`} />
      <Label htmlFor={`${field}-${value}`} className="cursor-pointer flex-1 text-sm">
        <span className="font-medium text-blue-600">{value}</span> - {label}
      </Label>
    </div>
  )

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8 border-2 border-black p-4">
          <h1 className="text-xl font-bold mb-2">BAYANIHAN BANK</h1>
          <h2 className="text-lg font-semibold">111 QUEZON ST. ATIMONAN, QUEZON</h2>
          <p className="text-lg font-bold mt-4">CLIENT INFORMATION SYSTEM</p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg border-2 border-black">
            <Button
              variant={viewMode === 'view' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('view')}
              className="mr-1"
            >
              <Eye className="w-4 h-4 mr-2" />
              View Client
            </Button>
            <Button
              variant={viewMode === 'enter' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('enter')}
            >
              <Edit className="w-4 h-4 mr-2" />
              Enter Assessment
            </Button>
          </div>
        </div>

        {/* Client Selection */}
        <Card className="border-2 border-black mb-8">
          <CardHeader className="bg-gray-100">
            <CardTitle className="text-center font-bold">SELECT CLIENT</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="max-w-md mx-auto">
              <Select value={selectedClientId} onValueChange={handleClientSelect} disabled={isLoadingClients}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={isLoadingClients ? "Loading clients..." : "Select a client"} />
                </SelectTrigger>
                <SelectContent>
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id.toString()}>
                      {client.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {clients.length > 0 && (
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {clients.length} client{clients.length !== 1 ? "s" : ""} available
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Loading State */}
        {isLoading && (
          <Card className="border-2 border-black">
            <CardContent className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">
                {viewMode === 'view' ? 'Loading client information...' : 'Saving assessment...'}
              </p>
            </CardContent>
          </Card>
        )}

        {/* View Mode - Existing Client Data Display */}
        {viewMode === 'view' && clientData && !isLoading && (
          <div className="space-y-6">
            {/* Personal Information */}
            <Card className="border-2 border-black">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-lg font-bold text-center">PERSONAL INFORMATION</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <DataRow label="Salutation" value={clientData.data?.salutation} />
                    <DataRow label="First Name" value={clientData.data?.firstName} />
                    <DataRow label="Middle Name" value={clientData.data?.middleName} />
                    <DataRow label="Last Name" value={clientData.data?.lastName} />
                    <DataRow label="Gender" value={clientData.data?.gender} />
                    <DataRow label="Birth Date" value={formatDate(clientData.data?.birthDate)} />
                    <DataRow label="Place of Birth" value={clientData.data?.placeOfBirth} />
                    <DataRow label="Height (ft)" value={clientData.data?.height} />
                    <DataRow label="Weight (kg)" value={clientData.data?.weight} />
                  </div>
                  <div className="space-y-2">
                    <DataRow label="Contact Number" value={clientData.data?.contactNumber} />
                    <DataRow label="Number of Dependents" value={clientData.data?.numberOfDependents} />
                    <DataRow label="Marital Status" value={clientData.data?.maritalStatus} />
                    <DataRow label="Nationality" value={clientData.data?.nationality} />
                    <DataRow label="Education" value={clientData.data?.education} />
                    <DataRow label="Spouse Name" value={clientData.data?.spouseName} />
                    <DataRow label="Spouse Birth Date" value={formatDate(clientData.data?.spouseBirthDate)} />
                    <DataRow label="Spouse Work" value={clientData.data?.spouseWork} />
                    <DataRow label="Spouse Monthly Income" value={clientData.data?.spouseMonthlyIncome} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card className="border-2 border-black">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-lg font-bold text-center">ADDRESS INFORMATION</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <DataRow label="Street Address" value={clientData.data?.streetAddress} />
                    <DataRow label="Barangay" value={clientData.data?.barangay} />
                    <DataRow label="City/Municipality" value={clientData.data?.cityMunicipality} />
                  </div>
                  <div className="space-y-2">
                    <DataRow label="Province" value={clientData.data?.province} />
                    <DataRow label="Region" value={clientData.data?.region} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Beneficiaries Information */}
            {clientData.data?.beneficiaries && clientData.data.beneficiaries.length > 0 && (
              <Card className="border-2 border-black">
                <CardHeader className="bg-yellow-50">
                  <CardTitle className="text-lg font-bold text-center">BENEFICIARIES</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {clientData.data.beneficiaries.map((beneficiary: any, index: number) => (
                      <div key={index} className="p-4 border border-gray-300 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3">Beneficiary {index + 1}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <DataRow label="Name" value={beneficiary.name} />
                          <DataRow label="Age" value={beneficiary.age} />
                          <DataRow label="Birth Date" value={formatDate(beneficiary.birthDate)} />
                          <DataRow label="Relationship" value={beneficiary.relationship} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Co-Insured Information */}
            {clientData.data?.coInsured && clientData.data.coInsured.length > 0 && (
              <Card className="border-2 border-black">
                <CardHeader className="bg-purple-50">
                  <CardTitle className="text-lg font-bold text-center">CO-INSURED</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {clientData.data.coInsured.map((coInsured: any, index: number) => (
                      <div key={index} className="p-4 border border-gray-300 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3">Co-Insured {index + 1}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <DataRow label="Name" value={coInsured.name} />
                          <DataRow label="Age" value={coInsured.age} />
                          <DataRow label="Birth Date" value={formatDate(coInsured.birthDate)} />
                          <DataRow label="Relationship" value={coInsured.relationship} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submission Information */}
            <Card className="border-2 border-black">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-lg font-bold text-center">SUBMISSION DETAILS</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <DataRow label="Form Type" value={clientData.formType} />
                  <DataRow label="Submission Date" value={formatDate(clientData.submissionDate)} />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Enter Mode - Assessment Form */}
        {viewMode === 'enter' && selectedClientId && !isLoading && (
          <div className="space-y-6">
            {/* Assessment Header */}
            <Card className="border-2 border-black">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-lg font-bold text-center">CLIENT ASSESSMENT FORM</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="assessmentDate" className="text-sm font-medium">Assessment Date</Label>
                    <Input
                      id="assessmentDate"
                      type="date"
                      value={assessmentData.assessmentDate}
                      onChange={(e) => handleAssessmentChange('assessmentDate', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="selectedClient" className="text-sm font-medium">Selected Client</Label>
                    <Input
                      id="selectedClient"
                      value={clients.find(c => c.id.toString() === selectedClientId)?.name || ''}
                      disabled
                      className="mt-1 bg-gray-50"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CAPACITY Section */}
            <FormSection title="CAPACITY ASSESSMENT" bgColor="bg-blue-50">
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Primary Source of Loan Repayment</Label>
                  <RadioGroup value={assessmentData.primaryLoanRepayment} onValueChange={(value) => handleAssessmentChange('primaryLoanRepayment', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="From agriculture (fishing, livestock raising, gardening)" field="primaryLoanRepayment" />
                      <ScoreOption value="2" label="Informal business/livelihood (buy & sell, Avon dealer, laundry, manicurist, numbers game collector, tricycle driver, habal-habal)" field="primaryLoanRepayment" />
                      <ScoreOption value="3" label="Occupation or business with regular and stable income (e.g., tricycle or jeepney boundary driving, salary, rental income)" field="primaryLoanRepayment" />
                      <ScoreOption value="4" label="Business with a permanent stall (e.g., sari-sari store, market stall, eatery)" field="primaryLoanRepayment" />
                      <ScoreOption value="5" label="Business with a permanent stall that is legitimately registered with DTI and has a municipal license" field="primaryLoanRepayment" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Other Sources of Loan Repayment</Label>
                  <RadioGroup value={assessmentData.otherLoanRepayment} onValueChange={(value) => handleAssessmentChange('otherLoanRepayment', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="Applicant receives pension or government subsidy (e.g., 4Ps)" field="otherLoanRepayment" />
                      <ScoreOption value="2" label="Applicant has a sideline or side hustle" field="otherLoanRepayment" />
                      <ScoreOption value="3" label="Applicant earns income from land (coconut, rice, banana, or vegetable farming)" field="otherLoanRepayment" />
                      <ScoreOption value="4" label="Applicant's spouse or child contributes income from informal or non-permanent work" field="otherLoanRepayment" />
                      <ScoreOption value="5" label="Applicant regularly receives remittances from parent, sibling, spouse, or child with a permanent/regular job" field="otherLoanRepayment" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Result of Cash Flow Analysis</Label>
                  <RadioGroup value={assessmentData.cashFlowAnalysis} onValueChange={(value) => handleAssessmentChange('cashFlowAnalysis', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="Weekly cash flow is below ₱180.00" field="cashFlowAnalysis" />
                      <ScoreOption value="2" label="Weekly cash flow is exactly ₱180.00" field="cashFlowAnalysis" />
                      <ScoreOption value="3" label="Weekly cash flow is more than ₱180.00" field="cashFlowAnalysis" />
                      <ScoreOption value="4" label="Cash flow is sufficient or matches the desired weekly loan installment" field="cashFlowAnalysis" />
                      <ScoreOption value="5" label="Cash flow exceeds the desired weekly loan installment" field="cashFlowAnalysis" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Amount of Forced Savings</Label>
                  <RadioGroup value={assessmentData.forcedSavings} onValueChange={(value) => handleAssessmentChange('forcedSavings', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="No forced savings" field="forcedSavings" />
                      <ScoreOption value="2" label="Forced savings is 5%–10% of the loan amount" field="forcedSavings" />
                      <ScoreOption value="3" label="Forced savings is 11%–20% of the loan amount" field="forcedSavings" />
                      <ScoreOption value="4" label="Forced savings is 21%–35% of the loan amount" field="forcedSavings" />
                      <ScoreOption value="5" label="Forced savings is more than 35% of the loan amount" field="forcedSavings" />
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </FormSection>

            {/* RESIDENCY Section */}
            <FormSection title="RESIDENCY ASSESSMENT" bgColor="bg-green-50">
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Length of Stay in Barangay</Label>
                  <RadioGroup value={assessmentData.lengthOfStay} onValueChange={(value) => handleAssessmentChange('lengthOfStay', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="Couple has lived in the barangay for 1–2 years" field="lengthOfStay" />
                      <ScoreOption value="2" label="Couple has lived in the barangay for 3–5 years" field="lengthOfStay" />
                      <ScoreOption value="3" label="Couple has lived in the barangay for more than 5 years" field="lengthOfStay" />
                      <ScoreOption value="4" label="Spouse has lived in the barangay since childhood; spouse's parents, siblings, and relatives also reside there" field="lengthOfStay" />
                      <ScoreOption value="5" label="Applicant has lived in the barangay since childhood; parents, siblings, and relatives also reside in same barangay" field="lengthOfStay" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Ownership of Residence</Label>
                  <RadioGroup value={assessmentData.ownershipOfResidence} onValueChange={(value) => handleAssessmentChange('ownershipOfResidence', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="Renting the home" field="ownershipOfResidence" />
                      <ScoreOption value="2" label="Squatter on the land where the home is built" field="ownershipOfResidence" />
                      <ScoreOption value="3" label="Tenant on the land where the home is built" field="ownershipOfResidence" />
                      <ScoreOption value="4" label="Living with parents or in-laws" field="ownershipOfResidence" />
                      <ScoreOption value="5" label="Owns house and lot with title" field="ownershipOfResidence" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Barangay Record</Label>
                  <RadioGroup value={assessmentData.barangayRecord} onValueChange={(value) => handleAssessmentChange('barangayRecord', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="Only spouse is known in the barangay" field="barangayRecord" />
                      <ScoreOption value="2" label="Born and raised in the barangay with no negative record" field="barangayRecord" />
                      <ScoreOption value="3" label="From a well-known and reputable family in the barangay" field="barangayRecord" />
                      <ScoreOption value="4" label="Has a relative in the barangay council (excluding spouse, children, parents, and siblings)" field="barangayRecord" />
                      <ScoreOption value="5" label="Self, spouse, parent, or sibling was elected to barangay office" field="barangayRecord" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Family Status</Label>
                  <RadioGroup value={assessmentData.familyStatus} onValueChange={(value) => handleAssessmentChange('familyStatus', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="Separated and living with a new partner" field="familyStatus" />
                      <ScoreOption value="2" label="Widowed or separated and living alone" field="familyStatus" />
                      <ScoreOption value="3" label="Single" field="familyStatus" />
                      <ScoreOption value="4" label="Living with a partner but not legally married" field="familyStatus" />
                      <ScoreOption value="5" label="Legally married" field="familyStatus" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Toilet Status</Label>
                  <RadioGroup value={assessmentData.toiletStatus} onValueChange={(value) => handleAssessmentChange('toiletStatus', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="No personal toilet in the home" field="toiletStatus" />
                      <ScoreOption value="2" label="Toilet is outside the home" field="toiletStatus" />
                      <ScoreOption value="3" label="Toilet is inside but without a water line" field="toiletStatus" />
                      <ScoreOption value="4" label="Toilet is inside with a water line" field="toiletStatus" />
                      <ScoreOption value="5" label="Toilet is inside, has a water line, and tiled flooring" field="toiletStatus" />
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </FormSection>

            {/* RECORD Section */}
            <FormSection title="RECORD ASSESSMENT" bgColor="bg-yellow-50">
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Time in Program</Label>
                  <RadioGroup value={assessmentData.timeInProgram} onValueChange={(value) => handleAssessmentChange('timeInProgram', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="2nd cycle or earlier" field="timeInProgram" />
                      <ScoreOption value="2" label="3rd to 4th cycle" field="timeInProgram" />
                      <ScoreOption value="3" label="5th to 6th cycle" field="timeInProgram" />
                      <ScoreOption value="4" label="7th to 8th cycle" field="timeInProgram" />
                      <ScoreOption value="5" label="9th cycle and beyond" field="timeInProgram" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Center Collection Record</Label>
                  <RadioGroup value={assessmentData.centerCollectionRecord} onValueChange={(value) => handleAssessmentChange('centerCollectionRecord', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="Weekly payments not completed" field="centerCollectionRecord" />
                      <ScoreOption value="2" label="Payments incomplete on due date but completed within the week" field="centerCollectionRecord" />
                      <ScoreOption value="3" label="Payments completed but more than 2 hours late or after AD follow-up" field="centerCollectionRecord" />
                      <ScoreOption value="4" label="Payments completed on time" field="centerCollectionRecord" />
                      <ScoreOption value="5" label="Payments completed within schedule promptly" field="centerCollectionRecord" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Payment History</Label>
                  <RadioGroup value={assessmentData.paymentHistory} onValueChange={(value) => handleAssessmentChange('paymentHistory', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="No weekly payments and not covered by other members" field="paymentHistory" />
                      <ScoreOption value="2" label="1–2 red marks in passbook" field="paymentHistory" />
                      <ScoreOption value="3" label="Covered by center within time" field="paymentHistory" />
                      <ScoreOption value="4" label="Weekly contributions are up to date" field="paymentHistory" />
                      <ScoreOption value="5" label="Personally pays on time" field="paymentHistory" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Number of Lending Groups</Label>
                  <RadioGroup value={assessmentData.numberOfLendingGroups} onValueChange={(value) => handleAssessmentChange('numberOfLendingGroups', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="Member of more than 4 loan groups" field="numberOfLendingGroups" />
                      <ScoreOption value="2" label="No experience with any loan group" field="numberOfLendingGroups" />
                      <ScoreOption value="3" label="Member of 3 to 4 loan groups" field="numberOfLendingGroups" />
                      <ScoreOption value="4" label="Spouse is a member of another loan group" field="numberOfLendingGroups" />
                      <ScoreOption value="5" label="Member of 1 to 2 loan groups" field="numberOfLendingGroups" />
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </FormSection>

            {/* CENTER STATUS Section */}
            <FormSection title="CENTER STATUS ASSESSMENT" bgColor="bg-purple-50">
              <div className="space-y-6">
                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Number of Center Members</Label>
                  <RadioGroup value={assessmentData.numberOfCenterMembers} onValueChange={(value) => handleAssessmentChange('numberOfCenterMembers', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="5 to 10 members" field="numberOfCenterMembers" />
                      <ScoreOption value="2" label="11 to 15 members" field="numberOfCenterMembers" />
                      <ScoreOption value="3" label="26 or more members" field="numberOfCenterMembers" />
                      <ScoreOption value="4" label="16 to 20 members" field="numberOfCenterMembers" />
                      <ScoreOption value="5" label="21 to 25 members" field="numberOfCenterMembers" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Attendance to Monthly/Quarterly Meetings (past 6 months)</Label>
                  <RadioGroup value={assessmentData.attendanceToMeetings} onValueChange={(value) => handleAssessmentChange('attendanceToMeetings', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="Attended once in 6 months" field="attendanceToMeetings" />
                      <ScoreOption value="2" label="Attended twice in 6 months" field="attendanceToMeetings" />
                      <ScoreOption value="3" label="Attended 3 times in 6 months" field="attendanceToMeetings" />
                      <ScoreOption value="4" label="Attended 4 times in 6 months" field="attendanceToMeetings" />
                      <ScoreOption value="5" label="Attended 5 or more times in 6 months" field="attendanceToMeetings" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Program Benefits Received</Label>
                  <RadioGroup value={assessmentData.programBenefitsReceived} onValueChange={(value) => handleAssessmentChange('programBenefitsReceived', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="No benefits received" field="programBenefitsReceived" />
                      <ScoreOption value="2" label="Received only one benefit" field="programBenefitsReceived" />
                      <ScoreOption value="3" label="Received two or more benefits" field="programBenefitsReceived" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Years in Program</Label>
                  <RadioGroup value={assessmentData.yearsInProgram} onValueChange={(value) => handleAssessmentChange('yearsInProgram', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="2 years or less" field="yearsInProgram" />
                      <ScoreOption value="2" label="3 to 4 years" field="yearsInProgram" />
                      <ScoreOption value="3" label="5 to 6 years" field="yearsInProgram" />
                      <ScoreOption value="4" label="6 to 7 years" field="yearsInProgram" />
                      <ScoreOption value="5" label="8 years or more" field="yearsInProgram" />
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-sm font-semibold text-gray-700 mb-3 block">Pastdue Ratio</Label>
                  <RadioGroup value={assessmentData.pastdueRatio} onValueChange={(value) => handleAssessmentChange('pastdueRatio', value)}>
                    <div className="space-y-2">
                      <ScoreOption value="1" label="4% or higher" field="pastdueRatio" />
                      <ScoreOption value="2" label="3%" field="pastdueRatio" />
                      <ScoreOption value="3" label="2%" field="pastdueRatio" />
                      <ScoreOption value="4" label="1%" field="pastdueRatio" />
                      <ScoreOption value="5" label="0% (no past due)" field="pastdueRatio" />
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </FormSection>

            {/* Additional Remarks */}
            <FormSection title="ADDITIONAL REMARKS" bgColor="bg-orange-50">
              <div>
                <Label htmlFor="remarks" className="text-sm font-medium text-gray-700 mb-2 block">
                  Assessment Notes and Comments
                </Label>
                <Textarea
                  id="remarks"
                  placeholder="Enter any additional observations, notes, or comments about the client assessment..."
                  value={assessmentData.remarks}
                  onChange={(e) => handleAssessmentChange('remarks', e.target.value)}
                  rows={4}
                  className="w-full"
                />
              </div>
            </FormSection>

            {/* Save Button */}
            <div className="flex justify-center space-x-4">
              <Button
                onClick={handleSaveAssessment}
                disabled={isLoading}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Assessment
              </Button>
              <Button
                onClick={() => setViewMode('view')}
                variant="outline"
                className="border-2 border-gray-400 px-8 py-3 text-lg font-semibold"
              >
                <X className="w-5 h-5 mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* No Client Selected State */}
        {!selectedClientId && !isLoading && !isLoadingClients && (
          <Card className="border-2 border-black">
            <CardContent className="p-8 text-center">
              <p className="text-gray-600 text-lg">
                Please select a client from the dropdown above to {viewMode === 'view' ? 'view their information' : 'enter assessment details'}.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}