export function formatMovieTime(time: number) {
  // すること
  // 1時間未満：mm:ss
  // 1時間以上：hh:mm:ss
  // 300 → 60 * 5 → 05:00
  // 3900 → 3600 * 1 + 60 * 5 → 01:05:00

  let hh = Math.floor(time / 3600)
  let remainTime = time % 3600
  let mm = Math.floor(remainTime / 60)
  let ss = time % 60
  if (0 < hh) {
    return `${zeroPadding(hh, 2)}:${zeroPadding(mm, 2)}:${zeroPadding(ss, 2)}`
  } else {
    return `${zeroPadding(mm, 2)}:${zeroPadding(ss, 2)}`
  }
}

/**
 * 0埋めする
 * @param num
 * @param len
 * @returns
 */
function zeroPadding(num: number, len: number) {
  return (Array(len).join('0') + num).slice(-len)
}

export function formatDateAgo(date: Date) {
  // やること
  // ・〜秒前
  // ・〜分前
  // ...
  // ・〜週前
  // ・〜月前
  // ・〜年前
  const nowDate = new Date()
  const diffMilliSec = nowDate.getTime() - date.getTime()
  // →ミリs(1s = 1000ms)

  const diffInSecs = Math.floor(diffMilliSec / 1000)
  if (diffInSecs < 60) {
    return `${diffInSecs}秒前`
  }

  const diffInMins = Math.floor(diffMilliSec / 1000 / 60)
  if (diffInMins < 60) {
    return `${diffInMins}分前`
  }

  const diffInHours = Math.floor(diffMilliSec / 1000 / 60 / 60)
  if (diffInHours < 24) {
    return `${diffInHours}時間前`
  }

  const diffInDays = Math.floor(diffMilliSec / 1000 / 60 / 60 / 24)
  if (diffInDays < 7) {
    return `${diffInDays}日前`
  }

  const diffInWeeks = Math.floor(diffMilliSec / 1000 / 60 / 60 / 24 / 7)
  if (diffInWeeks < 5) {
    return `${diffInWeeks}週間前`
  }

  const diffInMonths =
    (nowDate.getFullYear() - date.getFullYear()) * 12 +
    (nowDate.getMonth() - date.getMonth())
  if (diffInWeeks >= 4 && diffInMonths < 2) {
    return `1ヶ月前`
  } else if (diffInMonths < 12) {
    return `${diffInMonths}ヶ月前`
  }
  const diffInYears = nowDate.getFullYear() - date.getFullYear()
  return `${diffInYears}年前`
}

export function formatMillBillUnit(num: number) {
  // すること
  // ・1→1
  // ・1000→1000
  // ・11000→1.1万
  // ・10000000→1000万
  // ・120000000→1.2億

  let roundingValue = 0
  if (100000000 <= num) {
    roundingValue = Math.floor(num / 10000000) / 10 // →123,456,789 → 12 → 1.2 | 9,876,543,210 → 987 → 98.7 →98
    if (10 <= roundingValue) {
      roundingValue = Math.floor(roundingValue)
    }
    return `${roundingValue.toLocaleString()}億` // 3000 → 3,000
  } else if (10000 <= num) {
    roundingValue = Math.floor(num / 1000) / 10
    if (10 <= roundingValue) {
      roundingValue = Math.floor(roundingValue)
    }
    return `${roundingValue.toLocaleString()}万`
  } else {
    return num.toLocaleString()
  }
}
