import weiXinJSSdk from 'weixin-js-sdk'

let env = ''

export const getEnv = () => {
  return env
}

export const updateEnv = (newEnv: string) => {
  env = newEnv
}

// 格式化日期，返回值示例：2023-12-15 14:35:16
export const parseTime = (time?: string | number | Date, cFormat?: string) => {
  if (!time) {
    time = Date.now()
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time, 10)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  }
  // @ts-ignore
  const timeStr = format.replace(/{([ymdhisa])+}/g, (_result, key) => {
    const value = formatObj[key as keyof typeof formatObj]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return timeStr
}

export const toast = (title: string, duration?: number) => {
  uni.showToast({
    title,
    icon: 'none',
    duration: duration || 3000,
  })
}

const logFunc = (level: string) => {
  return (...args: any[]) => {
    ;(console as any)[level](...args)
    const result = [`${parseTime()} ${level.toUpperCase()}`, ...args]
    const hash = location.hash.split('?')[0]
    weiXinJSSdk.miniProgram?.postMessage({ data: { result, hash } })
  }
}

export const logger = {
  debug: logFunc('debug'),
  log: logFunc('log'),
  info: logFunc('info'),
  warn: logFunc('warn'),
  error: logFunc('error'),
}
