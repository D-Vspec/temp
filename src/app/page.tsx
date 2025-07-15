import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 border-2 border-black p-4">
          <h1 className="text-xl font-bold mb-2">BAYANIHAN BANK</h1>
          <h2 className="text-lg font-semibold">111 QUEZON ST. ATIMONAN, QUEZON</h2>
          <p className="text-lg font-bold mt-4">BANKING FORMS SYSTEM</p>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Loan Application */}
          <Card className="border-2 border-black hover:shadow-lg transition-shadow">
            <CardHeader className="bg-blue-100">
              <CardTitle className="text-center font-bold text-blue-800">LOAN APPLICATION</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-gray-600 mb-4">
                Submit a new loan application with complete borrower information and financial details.
              </p>
              <Link href="/loan-application">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">New Loan Application</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Client Information */}
          <Card className="border-2 border-black hover:shadow-lg transition-shadow">
            <CardHeader className="bg-green-100">
              <CardTitle className="text-center font-bold text-green-800">CLIENT INFORMATION</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-gray-600 mb-4">
                Register new client information including personal details and beneficiaries.
              </p>
              <Link href="/client-information">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">New Client Registration</Button>
              </Link>
            </CardContent>
          </Card>

          {/* View Clients */}
          <Card className="border-2 border-black hover:shadow-lg transition-shadow">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-center font-bold text-purple-800">VIEW CLIENTS</CardTitle>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <p className="text-gray-600 mb-4">View and review existing client information and submitted forms.</p>
              <Link href="/view">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">View Client Data</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="border-2 border-black mt-8">
          <CardHeader className="bg-gray-100">
            <CardTitle className="text-center font-bold">INSTRUCTIONS</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-bold text-blue-600 mb-2">Loan Application</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Complete all required fields</li>
                  <li>• Provide accurate financial information</li>
                  <li>• Include spouse details if married</li>
                  <li>• Review before submitting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-green-600 mb-2">Client Registration</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Fill personal information completely</li>
                  <li>• Add all beneficiaries</li>
                  <li>• Include business/household income</li>
                  <li>• Accept data privacy consent</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-purple-600 mb-2">View Clients</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Select client from dropdown</li>
                  <li>• Review submitted information</li>
                  <li>• All data is read-only</li>
                  <li>• Use for verification purposes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
