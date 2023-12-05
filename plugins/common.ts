export default defineNuxtPlugin(() => {
  /**
   * 単位を万や億に揃える。
   * 10未満は小数点一桁まで
   * @param num
   * @returns
   */
  function millBillUnit(num: number) {
    let RoundingValue = 0;
    if (100000000 < num) {
      RoundingValue = Math.round(num / 10000000) / 10;
      if (10 <= RoundingValue) {
        RoundingValue = Math.round(RoundingValue);
      }
      return `${RoundingValue.toLocaleString()}億`;
    } else if (10000 < num) {
      RoundingValue = Math.round(num / 1000) / 10;
      if (10 <= RoundingValue) {
        RoundingValue = Math.round(RoundingValue);
      }
      return `${RoundingValue.toLocaleString()}万`;
    } else {
      return num.toLocaleString();
    }
  }

  /**
   * ●日前や●年前をだす。
   * @param date
   * @returns
   */
  function dateAgo(date: Date) {
    const nowDate = new Date();
    let diffMilliSec = nowDate.getTime() - date.getTime();

    const diffInSecs = Math.floor(diffMilliSec / 1000);
    if (diffInSecs < 60) {
      return `${diffInSecs}秒前`;
    }

    const diffInMins = Math.floor(diffMilliSec / 1000 / 60);
    if (diffInMins < 60) {
      return `${diffInMins}分前`;
    }

    const diffInHours = Math.floor(diffMilliSec / 1000 / 60 / 60);
    if (diffInHours < 24) {
      return `${diffInHours}時間前`;
    }

    const diffInDays = Math.floor(diffMilliSec / 1000 / 60 / 60 / 24);
    if (diffInDays < 7) {
      return `${diffInDays}日前`;
    }

    const diffInWeeks = Math.floor(diffMilliSec / 1000 / 60 / 60 / 24 / 7);
    if (diffInWeeks < 5) {
      return `${diffInWeeks}週間前`;
    }

    const diffInMonths =
      (nowDate.getFullYear() - date.getFullYear()) * 12 +
      (nowDate.getMonth() - date.getMonth());

    if (diffInWeeks >= 4 && diffInMonths < 2) {
      return `1ヶ月前`;
    } else if (diffInMonths < 12) {
      return `${diffInMonths}ヶ月前`;
    }

    const diffInYears = nowDate.getFullYear() - date.getFullYear();

    return `${diffInYears}年前`;
  }
  return {
    provide: {
      common: {
        millBillUnit,
        dateAgo,
      },
    },
  };
});
