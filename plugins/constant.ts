export default defineNuxtPlugin(() => {
  /**
   * 公開状態リスト
   */
  const statusList = [
    { title: '準備中', value: 0 },
    // { title: "申請中", value: 1 },
    { title: '公開中', value: 3 },
    { title: '非公開', value: 9 },
  ]
  /**
   * (共通)対象の名称(title)を取得する
   * @param list
   * @param cd
   * @returns
   */
  const commonGetValue = function (list: any, cd: number) {
    let returnValue = ''

    let preList = list.filter(function (vl: { value: number }) {
      return vl.value == cd
    })

    if (0 < preList.length) {
      returnValue = preList[0].title
    } else {
      returnValue = 'その他'
    }

    return returnValue
  }

  /**
   * 対象の状態名を取得
   * @param {Num} cd コード値
   * @returns status名
   */
  const getStatus = function (cd: number) {
    return commonGetValue(statusList, cd)
  }

  return {
    provide: {
      constants: {
        statusList,

        getStatus,
      },
      // 直書きも可能
      hello: (msg: string) => `Hello ${msg}!`,
    },
  }
})
