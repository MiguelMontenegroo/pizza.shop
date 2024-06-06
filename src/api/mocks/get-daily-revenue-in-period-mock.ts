import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '06/06/2024', receipt: 2000 },
    { date: '07/06/2024', receipt: 800 },
    { date: '08/06/2024', receipt: 8000 },
    { date: '09/06/2024', receipt: 540 },
    { date: '10/06/2024', receipt: 400 },
    { date: '11/06/2024', receipt: 700 },
    { date: '11/06/2024', receipt: 1000 },
  ])
})
