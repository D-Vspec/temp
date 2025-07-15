"use client"

import { useState, useEffect } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"

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

export default function ViewClientPage() {
  const [clients, setClients] = useState<Client[]>([])
  const [selectedClientId, setSelectedClientId] = useState<string>("")
  const [clientData, setClientData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingClients, setIsLoadingClients] = useState(true)

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

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8 border-2 border-black p-4">
          <h1 className="text-xl font-bold mb-2">BAYANIHAN BANK</h1>
          <h2 className="text-lg font-semibold">111 QUEZON ST. ATIMONAN, QUEZON</h2>
          <p className="text-lg font-bold mt-4">VIEW CLIENT INFORMATION</p>
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
                  <SelectValue placeholder={isLoadingClients ? "Loading clients..." : "Select a client to view"} />
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
              <p className="text-gray-600">Loading client information...</p>
            </CardContent>
          </Card>
        )}

        {/* Client Data Display */}
        {clientData && !isLoading && (
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
        {!selectedClientId && !isLoading && !isLoadingClients && (
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