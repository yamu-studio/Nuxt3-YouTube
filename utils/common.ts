export const commonCutText = function (text: string, len: number) {
  if (len < text.length) {
    return text.substring(0, len) + '...'
  } else {
    return text
  }
}

/**
 * 単位を万や億に揃える。
 * 10未満は小数点一桁まで
 * @param num
 * @returns
 */
export function commonMillBillUnit(num: number) {
  let RoundingValue = 0
  if (100000000 < num) {
    RoundingValue = Math.round(num / 10000000) / 10
    if (10 <= RoundingValue) {
      RoundingValue = Math.round(RoundingValue)
    }
    return `${RoundingValue.toLocaleString()}億`
  } else if (10000 < num) {
    RoundingValue = Math.round(num / 1000) / 10
    if (10 <= RoundingValue) {
      RoundingValue = Math.round(RoundingValue)
    }
    return `${RoundingValue.toLocaleString()}万`
  } else {
    return num.toLocaleString()
  }
}

export function commonMovieTimeLong(sec: number) {
  // やること
  // 1時間未満：mm:ss
  // 1時間以上：hh:mm:ss(hhは24以上もブッコム)

  // 300 → 60 *5 → 05:00
  // 3900 → 3600 * 1 + 60 * 5 → 01:05:00

  let hh = Math.floor(sec / 3600)
  let aaa = sec % 3600
  let mm = Math.floor(aaa / 60)
  let ss = sec % 60
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

/**
 * 表示用に文字を...にする
 * @param {string} word
 * @param {number} len
 * @returns {string}
 */
export const commonCutWordLengthStr = function (word: string, len: number) {
  // let values = [];
  let returnValue = word
  // console.log(word.length);

  if (len < word.length) {
    returnValue = word.slice(0, len) + '...'
  }
  return returnValue
}

/**
 * ●日前や●年前をだす。
 * @param date
 * @returns
 */
export function commonDateAgo(date: Date) {
  const nowDate = new Date()
  let diffMilliSec = nowDate.getTime() - date.getTime()

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
