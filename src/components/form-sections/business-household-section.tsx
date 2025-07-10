"use client"

import type { Control } from "react-hook-form"
import { useFieldArray, useWatch } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

interface BusinessHouseholdSectionProps {
  control: Control<any>
}

export function BusinessHouseholdSection({ control }: BusinessHouseholdSectionProps) {
  // Business Income Field Array
  const {
    fields: businessIncomeFields,
    append: appendBusinessIncome,
    remove: removeBusinessIncome,
  } = useFieldArray({
    control,
    name: "businessIncome",
  })

  // Business Expense Field Array
  const {
    fields: businessExpenseFields,
    append: appendBusinessExpense,
    remove: removeBusinessExpense,
  } = useFieldArray({
    control,
    name: "businessExpenses",
  })

  // Household Income Field Array
  const {
    fields: householdIncomeFields,
    append: appendHouseholdIncome,
    remove: removeHouseholdIncome,
  } = useFieldArray({
    control,
    name: "householdIncome",
  })

  // Household Expense Field Array
  const {
    fields: householdExpenseFields,
    append: appendHouseholdExpense,
    remove: removeHouseholdExpense,
  } = useFieldArray({
    control,
    name: "householdExpenses",
  })

  // Watch all fields for real-time calculations
  const businessIncomeData = useWatch({ control, name: "businessIncome" }) || []
  const businessExpenseData = useWatch({ control, name: "businessExpenses" }) || []
  const householdIncomeData = useWatch({ control, name: "householdIncome" }) || []
  const householdExpenseData = useWatch({ control, name: "householdExpenses" }) || []

  // Utility function to parse monetary values
  const parseNumber = (value: string): number => {
    const cleaned = value?.replace(/[^\d.-]/g, "") || "0"
    const parsed = Number.parseFloat(cleaned)
    return isNaN(parsed) ? 0 : parsed
  }

  // Convert any frequency to monthly equivalent
  const convertToMonthly = (item: any): number => {
    if (!item) return 0
    
    const daily = parseNumber(item.daily || "0")
    const weekly = parseNumber(item.weekly || "0")
    const semiMonthly = parseNumber(item.semiMonthly || "0")
    const monthly = parseNumber(item.monthly || "0")
    
    // Return the first non-zero value converted to monthly
    if (daily > 0) return daily * 30
    if (weekly > 0) return weekly * 4.33 // Average weeks per month
    if (semiMonthly > 0) return semiMonthly * 2
    if (monthly > 0) return monthly
    
    return 0
  }

  // Calculate business totals (convert to monthly)
  const totalBusinessIncome = businessIncomeData.reduce(
    (sum: number, item: any) => sum + convertToMonthly(item),
    0
  )

  const totalBusinessExpenses = businessExpenseData.reduce(
    (sum: number, item: any) => sum + convertToMonthly(item),
    0
  )

  const netBusinessIncome = totalBusinessIncome - totalBusinessExpenses

  // Calculate household totals (convert to monthly)
  const totalHouseholdIncome = householdIncomeData.reduce(
    (sum: number, item: any) => sum + convertToMonthly(item),
    0
  )

  const totalHouseholdExpenses = householdExpenseData.reduce(
    (sum: number, item: any) => sum + convertToMonthly(item),
    0
  )

  // Calculate final totals
  const totalNetIncome = netBusinessIncome + totalHouseholdIncome - totalHouseholdExpenses

  // Format currency for display
  const formatCurrency = (value: number): string => {
    return value > 0 
      ? `₱${value.toLocaleString("en-US", { 
          minimumFractionDigits: 2, 
          maximumFractionDigits: 2 
        })}` 
      : ""
  }

  // Clear other fields when one is entered
  const handleFieldChange = (
    fieldName: string,
    index: number,
    frequency: string,
    value: string
  ) => {
    const currentData = control._formValues[fieldName]?.[index] || {}
    
    // Clear other frequency fields
    const clearedData = {
      ...currentData,
      daily: frequency === 'daily' ? value : '',
      weekly: frequency === 'weekly' ? value : '',
      semiMonthly: frequency === 'semiMonthly' ? value : '',
      monthly: frequency === 'monthly' ? value : ''
    }
    
    // Update the form
    control._formValues[fieldName] = control._formValues[fieldName] || []
    control._formValues[fieldName][index] = clearedData
  }

  // Render individual income/expense row
  const renderFinancialRow = (
    fieldName: string,
    index: number,
    removeFunction: (index: number) => void
  ) => (
    <div key={`${fieldName}-${index}`} className="grid grid-cols-5 gap-3 items-end">
      <FormField
        control={control}
        name={`${fieldName}.${index}.description`}
        render={({ field }) => (
          <FormItem className="relative">
            <FormControl>
              <Input
                {...field}
                className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none text-sm pr-8"
              />
            </FormControl>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => removeFunction(index)}
              className="absolute right-0 top-0 h-8 w-8 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`${fieldName}.${index}.daily`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                onChange={(e) => {
                  field.onChange(e)
                  handleFieldChange(fieldName, index, 'daily', e.target.value)
                }}
                className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none text-sm"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`${fieldName}.${index}.weekly`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                onChange={(e) => {
                  field.onChange(e)
                  handleFieldChange(fieldName, index, 'weekly', e.target.value)
                }}
                className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none text-sm"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`${fieldName}.${index}.semiMonthly`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                onChange={(e) => {
                  field.onChange(e)
                  handleFieldChange(fieldName, index, 'semiMonthly', e.target.value)
                }}
                className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none text-sm"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`${fieldName}.${index}.monthly`}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                onChange={(e) => {
                  field.onChange(e)
                  handleFieldChange(fieldName, index, 'monthly', e.target.value)
                }}
                className="border-b border-gray-300 border-t-0 border-l-0 border-r-0 rounded-none text-sm"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )

  // Render table header
  const renderTableHeader = (firstColumnLabel: string) => (
    <div className="grid grid-cols-5 gap-3 font-bold text-sm border-b pb-2">
      <div>{firstColumnLabel}</div>
      <div>Daily</div>
      <div>Weekly</div>
      <div>Semi-Monthly</div>
      <div>Monthly</div>
    </div>
  )

  // Render total row
  const renderTotalRow = (label: string, amount: number) => (
    <div className="mt-4 grid grid-cols-5 gap-3 font-bold border-t pt-2">
      <div>{label}</div>
      <div></div>
      <div></div>
      <div></div>
      <div className="bg-gray-200 p-2 text-center rounded">
        {formatCurrency(amount)}
        <div className="text-xs text-gray-600 mt-1">(Monthly)</div>
      </div>
    </div>
  )

  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">
          BUSINESS AND HOUSEHOLD INCOME/EXPENSES
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-8">
          {/* Borrower Name */}
          <FormField
            control={control}
            name="borrowerNameFinancial"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">BORROWER NAME:</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* BUSINESS SECTION */}
          <div>
            <h3 className="font-bold mb-4 text-center bg-gray-100 p-2">BUSINESS</h3>
            
            {/* Business Income */}
            <div className="mb-6">
              <h4 className="font-bold mb-2">Income from Sales</h4>
              <div className="space-y-2">
                {renderTableHeader("Business Description")}
                
                {businessIncomeFields.map((field, index) =>
                  renderFinancialRow("businessIncome", index, removeBusinessIncome)
                )}
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendBusinessIncome({
                      description: "",
                      daily: "",
                      weekly: "",
                      semiMonthly: "",
                      monthly: "",
                    })
                  }
                  className="bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Business Income
                </Button>
              </div>
              
              {renderTotalRow("Total Business Income", totalBusinessIncome)}
            </div>

            {/* Business Expenses */}
            <div className="mb-6">
              <h4 className="font-bold mb-2">Business Expenses</h4>
              <div className="space-y-2">
                {renderTableHeader("Expense Type")}
                
                {businessExpenseFields.map((field, index) =>
                  renderFinancialRow("businessExpenses", index, removeBusinessExpense)
                )}
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendBusinessExpense({
                      description: "",
                      daily: "",
                      weekly: "",
                      semiMonthly: "",
                      monthly: "",
                    })
                  }
                  className="bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Business Expense
                </Button>
              </div>
              
              {renderTotalRow("Total Business Expenses", totalBusinessExpenses)}
              
              {/* Net Business Income */}
              <div className="mt-2 grid grid-cols-5 gap-3 font-bold">
                <div>Net Business Income</div>
                <div></div>
                <div></div>
                <div></div>
                <div className="bg-gray-300 p-2 text-center rounded">
                  {formatCurrency(netBusinessIncome)}
                  <div className="text-xs text-gray-600 mt-1">(Monthly)</div>
                </div>
              </div>
            </div>
          </div>

          {/* HOUSEHOLD SECTION */}
          <div>
            <h3 className="font-bold mb-4 text-center bg-gray-100 p-2">HOUSEHOLD</h3>
            
            {/* Household Income */}
            <div className="mb-6">
              <h4 className="font-bold mb-2">Regular Household Income</h4>
              <div className="space-y-2">
                {renderTableHeader("Income Source")}
                
                {householdIncomeFields.map((field, index) =>
                  renderFinancialRow("householdIncome", index, removeHouseholdIncome)
                )}
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendHouseholdIncome({
                      description: "",
                      daily: "",
                      weekly: "",
                      semiMonthly: "",
                      monthly: "",
                    })
                  }
                  className="bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Household Income
                </Button>
              </div>
              
              {renderTotalRow("Total Household Income", totalHouseholdIncome)}
            </div>

            {/* Household Expenses */}
            <div className="mb-6">
              <h4 className="font-bold mb-2">Household Expenses</h4>
              <div className="space-y-2">
                {renderTableHeader("Expense Type")}
                
                {householdExpenseFields.map((field, index) =>
                  renderFinancialRow("householdExpenses", index, removeHouseholdExpense)
                )}
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendHouseholdExpense({
                      description: "",
                      daily: "",
                      weekly: "",
                      semiMonthly: "",
                      monthly: "",
                    })
                  }
                  className="bg-blue-50 text-blue-600 hover:bg-blue-100"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Household Expense
                </Button>
              </div>
              
              {renderTotalRow("Total Household Expenses", totalHouseholdExpenses)}
            </div>
          </div>

          {/* FINANCIAL SUMMARY */}
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-bold mb-4 text-center">FINANCIAL SUMMARY</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Left Column - Summary */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Net Income:</span>
                  <span className="font-bold text-green-600">
                    {formatCurrency(totalNetIncome)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Equivalent Daily Income:</span>
                  <span>{formatCurrency(totalNetIncome / 30)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Equivalent Weekly Income:</span>
                  <span>{formatCurrency(totalNetIncome / 4)}</span>
                </div>
              </div>

              {/* Right Column - Loan Details */}
              <div className="space-y-2">
                <FormField
                  control={control}
                  name="estimatedDebtService"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">
                        Estimated Amount of DEBT SERVICE:
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border border-gray-300 rounded text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="repaymentCapacityRate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm">
                        REPAYMENT CAPACITY RATE (50%):
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border border-gray-300 rounded text-sm"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="maximumLoanEntitlement"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-bold">
                        MAXIMUM LOAN ENTITLEMENT:
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-2 border-black rounded text-sm font-bold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            {/* Comments Section */}
            <FormField
              control={control}
              name="comments"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel className="font-bold">Comments:</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      className="w-full border border-gray-300 rounded p-2 min-h-[60px]"
                      rows={3}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}