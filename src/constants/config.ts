export const baseURLSetting = {
  DEV: 'https://daas-perf-api.seazonmotor.com',
  UAT: 'https://daas-uat-api.seazonmotor.com',
  PRO: 'https://daas-api.seazonmotor.com',
}

export const getBaseUrl = (env: string) => {
  //@ts-ignore
  return baseURLSetting[env]
}
