import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Client } from "@/types/client"

interface ClientSelectorProps {
  clients: Client[]
  selectedClientId: string
  isLoadingClients: boolean
  onClientSelect: (clientId: string) => void
}

export default function ClientSelector({ 
  clients, 
  selectedClientId, 
  onClientSelect, 
  isLoadingClients 
}: ClientSelectorProps) {

  return (
    <Card className="border-2 border-black mb-8">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">SELECT CLIENT</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="max-w-md mx-auto">
          <Select value={selectedClientId} onValueChange={onClientSelect} disabled={isLoadingClients}>
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
  )
}

export { type Client }