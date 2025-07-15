"use client"

import type { Control } from "react-hook-form"
import { useFieldArray } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

interface AssetsLiabilitiesSectionProps {
  control: Control<any>
}

export function AssetsLiabilitiesSection({ control }: AssetsLiabilitiesSectionProps) {
  const {
    fields: stockFields,
    append: appendStock,
    remove: removeStock,
  } = useFieldArray({
    control,
    name: "sharesOfStock",
  })

  const {
    fields: depositFields,
    append: appendDeposit,
    remove: removeDeposit,
  } = useFieldArray({
    control,
    name: "depositAccounts",
  })

  const {
    fields: creditFields,
    append: appendCredit,
    remove: removeCredit,
  } = useFieldArray({
    control,
    name: "creditCards",
  })

  const {
    fields: loanFields,
    append: appendLoan,
    remove: removeLoan,
  } = useFieldArray({
    control,
    name: "loans",
  })

  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">ASSETS AND LIABILITIES</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-8">
          {/* Real Estate */}
          <div>
            <h3 className="font-bold mb-4">REAL ESTATE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="realEstateLocation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LOCATION / LOT AREA</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="realEstateValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EST. MARKET VALUE:</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Automobile */}
          <div>
            <h3 className="font-bold mb-4">AUTOMOBILE</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={control}
                name="automobileDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>YEAR / MAKE / MODEL</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="automobileValue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>EST. MARKET VALUE:</FormLabel>
                    <FormControl>
                      <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Shares of Stock */}
          <div>
            <h3 className="font-bold mb-4">SHARES OF STOCK</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 font-bold border-b-2 pb-2">
                <div>COMPANY</div>
                <div># OF SHARES</div>
                <div>EST. MARKET VALUE:</div>
              </div>
              {stockFields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-3 gap-4 items-end">
                  <FormField
                    control={control}
                    name={`sharesOfStock.${index}.company`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name={`sharesOfStock.${index}.numberOfShares`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <FormField
                      control={control}
                      name={`sharesOfStock.${index}.marketValue`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeStock(index)}
                      className="bg-red-50 text-red-600 hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendStock({ company: "", numberOfShares: "", marketValue: "" })}
                className="bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Stock
              </Button>
            </div>
          </div>

          {/* Deposit Accounts */}
          <div>
            <h3 className="font-bold mb-4">DEPOSIT ACCOUNT (S)</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 font-bold border-b-2 pb-2">
                <div>DEPOSITORY BANK/S</div>
                <div>OUTSTANDING BALANCE</div>
              </div>
              {depositFields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-2 gap-4 items-end">
                  <FormField
                    control={control}
                    name={`depositAccounts.${index}.bank`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <FormField
                      control={control}
                      name={`depositAccounts.${index}.balance`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeDeposit(index)}
                      className="bg-red-50 text-red-600 hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendDeposit({ bank: "", balance: "" })}
                className="bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Deposit Account
              </Button>
            </div>
          </div>

          {/* Credit Cards */}
          <div>
            <h3 className="font-bold mb-4">CREDIT CARD (S)</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 font-bold border-b-2 pb-2">
                <div>BANK/ COMPANY</div>
                <div>OUTSTANDING BALANCE</div>
              </div>
              {creditFields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-2 gap-4 items-end">
                  <FormField
                    control={control}
                    name={`creditCards.${index}.bankCompany`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <FormField
                      control={control}
                      name={`creditCards.${index}.balance`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeCredit(index)}
                      className="bg-red-50 text-red-600 hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendCredit({ bankCompany: "", balance: "" })}
                className="bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Credit Card
              </Button>
            </div>
          </div>

          {/* Loans */}
          <div>
            <h3 className="font-bold mb-4">LOANS (Last 3 years)</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 font-bold border-b-2 pb-2">
                <div>CREDITORS</div>
                <div>OUTSTANDING BALANCE</div>
              </div>
              {loanFields.map((field, index) => (
                <div key={field.id} className="grid grid-cols-2 gap-4 items-end">
                  <FormField
                    control={control}
                    name={`loans.${index}.creditor`}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-2">
                    <FormField
                      control={control}
                      name={`loans.${index}.balance`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input {...field} className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => removeLoan(index)}
                      className="bg-red-50 text-red-600 hover:bg-red-100"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => appendLoan({ creditor: "", balance: "" })}
                className="bg-blue-50 text-blue-600 hover:bg-blue-100"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Loan
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
