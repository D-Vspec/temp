"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Eye, Edit } from "lucide-react"
import ViewClientPage from "@/components/loan-approver-section/ViewClientPage"
import EnterAssessmentPage from "@/components/loan-approver-section/EnterAssessmentPage"
import { Toaster } from "sonner"
import { Client, ClientsResponse } from "@/types/client"
import { toast } from "sonner"

type ViewMode = 'view' | 'enter'

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('view')
  const [clients, setClients] = useState<Client[]>([])
  const [selectedClientId, setSelectedClientId] = useState<string>("")
  const [clientData, setClientData] = useState<any>(null)
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
        return data
      } else {
        throw new Error(`Failed to fetch client data: ${response.status}`)
      }
    } catch (error) {
      console.error("Error fetching client data:", error)
      toast.error("Failed to load client data", {
        description: "Please try selecting the client again.",
      })
      return null
    }
  }

  const handleClientSelect = async (clientId: string) => {
    setSelectedClientId(clientId)
    if (clientId) {
      const data = await fetchClientData(clientId)
      setClientData(data)
    } else {
      setClientData(null)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mode Toggle */}
      <div className="sticky top-0 z-50 bg-white border-b-2 border-black p-4">
        <div className="flex justify-center">
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
      </div>

      {/* Page Content */}
      {viewMode === 'view' ? (
        <ViewClientPage 
          clients={clients}
          selectedClientId={selectedClientId}
          clientData={clientData}
          isLoadingClients={isLoadingClients}
          onClientSelect={handleClientSelect}
        />
      ) : (
        <EnterAssessmentPage 
          clients={clients}
          selectedClientId={selectedClientId}
          clientData={clientData}
          isLoadingClients={isLoadingClients}
          onClientSelect={handleClientSelect}
        />
      )}

      {/* Toast Notifications */}
      <Toaster />
    </div>
  )
}