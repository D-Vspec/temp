import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ClientHeader from "@/components/ClientHeader"
import ClientSelector from "@/components/ClientSelector"
import DataRow from "@/components/DataRow"
import { formatDate } from "@/utils/dateHelpers"
import { Client } from "@/types/client"

interface ViewClientPageProps {
  clients: Client[]
  selectedClientId: string
  clientData: any
  isLoadingClients: boolean
  onClientSelect: (clientId: string) => void
}

export default function ViewClientPage({ 
  clients, 
  selectedClientId, 
  clientData, 
  isLoadingClients, 
  onClientSelect 
}: ViewClientPageProps) {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="w-full mx-auto">
        <ClientHeader />
        <ClientSelector 
          clients={clients}
          selectedClientId={selectedClientId} 
          onClientSelect={onClientSelect}
          isLoadingClients={isLoadingClients}
        />

        {/* Client Data Display */}
        {clientData && (
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

        {/* No Client Selected State */}
        {!selectedClientId && (
          <Card className="border-2 border-black">
            <CardContent className="p-8 text-center">
              <p className="text-gray-600 text-lg">
                Please select a client from the dropdown above to view their information.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}