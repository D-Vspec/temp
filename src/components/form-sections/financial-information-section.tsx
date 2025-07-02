"use client"

import type { Control } from "react-hook-form"
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useWatch } from "react-hook-form"

interface FinancialInformationSectionProps {
  control: Control<any>
}

export function FinancialInformationSection({ control }: FinancialInformationSectionProps) {
  // Watch all financial fields for automatic calculation
  const borrowerBasicSalary = useWatch({ control, name: "borrowerBasicSalary" }) || ""
  const spouseBasicSalary = useWatch({ control, name: "spouseBasicSalary" }) || ""
  const borrowerAllowances = useWatch({ control, name: "borrowerAllowances" }) || ""
  const spouseAllowances = useWatch({ control, name: "spouseAllowances" }) || ""
  const borrowerBusinessIncome = useWatch({ control, name: "borrowerBusinessIncome" }) || ""
  const spouseBusinessIncome = useWatch({ control, name: "spouseBusinessIncome" }) || ""
  const borrowerRentalIncome = useWatch({ control, name: "borrowerRentalIncome" }) || ""
  const spouseRentalIncome = useWatch({ control, name: "spouseRentalIncome" }) || ""
  const borrowerOtherIncome = useWatch({ control, name: "borrowerOtherIncome" }) || ""
  const spouseOtherIncome = useWatch({ control, name: "spouseOtherIncome" }) || ""

  // Watch expense fields
  const livingExpenses = useWatch({ control, name: "livingExpenses" }) || ""
  const rentUtilities = useWatch({ control, name: "rentUtilities" }) || ""
  const education = useWatch({ control, name: "education" }) || ""
  const transportation = useWatch({ control, name: "transportation" }) || ""
  const loanAmortizations = useWatch({ control, name: "loanAmortizations" }) || ""
  const otherExpenses = useWatch({ control, name: "otherExpenses" }) || ""

  // Helper function to parse number from string
  const parseNumber = (value: string): number => {
    const cleaned = value.replace(/[^\d.-]/g, "")
    const parsed = Number.parseFloat(cleaned)
    return isNaN(parsed) ? 0 : parsed
  }

  // Helper function to format currency
  const formatCurrency = (value: number): string => {
    return value > 0 ? `₱${value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : ""
  }

  // Calculate totals for each income row
  const basicSalaryTotal = parseNumber(borrowerBasicSalary) + parseNumber(spouseBasicSalary)
  const allowancesTotal = parseNumber(borrowerAllowances) + parseNumber(spouseAllowances)
  const businessIncomeTotal = parseNumber(borrowerBusinessIncome) + parseNumber(spouseBusinessIncome)
  const rentalIncomeTotal = parseNumber(borrowerRentalIncome) + parseNumber(spouseRentalIncome)
  const otherIncomeTotal = parseNumber(borrowerOtherIncome) + parseNumber(spouseOtherIncome)

  // Calculate column totals
  const borrowerTotal =
    parseNumber(borrowerBasicSalary) +
    parseNumber(borrowerAllowances) +
    parseNumber(borrowerBusinessIncome) +
    parseNumber(borrowerRentalIncome) +
    parseNumber(borrowerOtherIncome)

  const spouseTotal =
    parseNumber(spouseBasicSalary) +
    parseNumber(spouseAllowances) +
    parseNumber(spouseBusinessIncome) +
    parseNumber(spouseRentalIncome) +
    parseNumber(spouseOtherIncome)

  const grandTotal = borrowerTotal + spouseTotal

  // Calculate total expenses
  const totalExpenses =
    parseNumber(livingExpenses) +
    parseNumber(rentUtilities) +
    parseNumber(education) +
    parseNumber(transportation) +
    parseNumber(loanAmortizations) +
    parseNumber(otherExpenses)

  return (
    <Card className="border-2 border-black">
      <CardHeader className="bg-gray-100">
        <CardTitle className="text-center font-bold">FINANCIAL INFORMATION</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Monthly Income */}
          <div>
            <h3 className="font-bold mb-4 text-center">MONTHLY INCOME</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4 mb-4 font-bold text-center border-b-2 pb-2">
                <div>Borrower</div>
                <div>Spouse</div>
                <div>Total</div>
              </div>

              {/* Basic Salary Row */}
              <div className="grid grid-cols-3 gap-4 items-end">
                <FormField
                  control={control}
                  name="borrowerBasicSalary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Basic Salary</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseBasicSalary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-transparent">Basic Salary</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col">
                  <div className="text-sm font-medium text-transparent mb-2">Total</div>
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                    {formatCurrency(basicSalaryTotal)}
                  </div>
                </div>
              </div>

              {/* Allowances Row */}
              <div className="grid grid-cols-3 gap-4 items-end">
                <FormField
                  control={control}
                  name="borrowerAllowances"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Allowances</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseAllowances"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-transparent">Allowances</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col">
                  <div className="text-sm font-medium text-transparent mb-2">Total</div>
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                    {formatCurrency(allowancesTotal)}
                  </div>
                </div>
              </div>

              {/* Business Income Row */}
              <div className="grid grid-cols-3 gap-4 items-end">
                <FormField
                  control={control}
                  name="borrowerBusinessIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Business Income</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseBusinessIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-transparent">Business Income</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col">
                  <div className="text-sm font-medium text-transparent mb-2">Total</div>
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                    {formatCurrency(businessIncomeTotal)}
                  </div>
                </div>
              </div>

              {/* Rental Income Row */}
              <div className="grid grid-cols-3 gap-4 items-end">
                <FormField
                  control={control}
                  name="borrowerRentalIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Rental Income</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseRentalIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-transparent">Rental Income</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col">
                  <div className="text-sm font-medium text-transparent mb-2">Total</div>
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                    {formatCurrency(rentalIncomeTotal)}
                  </div>
                </div>
              </div>

              {/* Other Income Row */}
              <div className="grid grid-cols-3 gap-4 items-end">
                <FormField
                  control={control}
                  name="borrowerOtherIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Income from other sources</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="spouseOtherIncome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-transparent">Income from other sources</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                          placeholder="0.00"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col">
                  <div className="text-sm font-medium text-transparent mb-2">Total</div>
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                    {formatCurrency(otherIncomeTotal)}
                  </div>
                </div>
              </div>

              {/* Total Row - Fixed alignment */}
              <div className="grid grid-cols-3 gap-4 items-center font-bold border-t-2 pt-4">
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                  {formatCurrency(borrowerTotal)}
                </div>
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                  {formatCurrency(spouseTotal)}
                </div>
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                  {formatCurrency(grandTotal)}
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Expenses */}
          <div>
            <h3 className="font-bold mb-4 text-center">MONTHLY EXPENSES</h3>
            <div className="space-y-4">
              <FormField
                control={control}
                name="livingExpenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Living Expenses</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="0.00"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="rentUtilities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rent and Utilities</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="0.00"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="education"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Education</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="0.00"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="transportation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Transportation</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="0.00"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="loanAmortizations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loan Amortizations</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="0.00"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="otherExpenses"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loans/ Credit cards/ Insurance / other expenses</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="border-b-2 border-t-0 border-l-0 border-r-0 rounded-none"
                        placeholder="0.00"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="font-bold border-t-2 pt-4">
                <div className="mb-2">Total Expenses</div>
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                  {formatCurrency(totalExpenses)}
                </div>
              </div>

              {/* Net Income Calculation */}
              <div className="font-bold border-t-2 pt-4">
                <div className="mb-2">Net Monthly Income</div>
                  <div className="border-b-2 border-t-0 border-l-0 border-r-0 h-10 flex items-center px-3 bg-gray-50 text-sm font-medium">
                  {formatCurrency(grandTotal - totalExpenses)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}