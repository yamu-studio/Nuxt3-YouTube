export const useCommentes = () => {
  const getComments = (movieID: number) =>
    new Promise(async (resolve, reject) => {
      const { data, error } = await useFetch(
        `http://127.0.0.1:8000/comments?movie_id=${movieID}`,
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (!error.value) {
        let resList: any = [];
        data.value.forEach((movie) => {
          resList.push(setDataForApi(movie));
        });
        resolve(resList);
      } else {
        reject(error.value);
      }
    });

  return {
    getComments,
  };
};

function setDataForApi(mapData: any) {
  // 含まれているkeyを取得
  let outMap = mapData;
  const keys = Object.keys(mapData);
  keys.forEach((key) => {
    if (mapData[key] != undefined && outMap[key] != undefined) {
      outMap[key] = mapData[key];
    }
    if (key == "created_at") {
      outMap["publishedAt"] = new Date(mapData[key]);
    }

    if (key == "info") {
      const infoKeys = Object.keys(mapData[key]);
      infoKeys.forEach((subKey) => {
        if (subKey == "comment") {
          outMap["comment"] = mapData[key][subKey];
        }
      });
    }
    if (key == "insight") {
      const insightKeys = Object.keys(mapData[key]);
      insightKeys.forEach((subKey) => {
        if (subKey == "view_count") {
          outMap["views"] = mapData[key][subKey];
        } else if (subKey == "good_count") {
          outMap["goods"] = mapData[key][subKey];
        }
      });
    }
    if (key == "channel") {
      const channelKeys = Object.keys(mapData[key]);
      channelKeys.forEach((subKey) => {
        let submapData = mapData[key][subKey];
        if (subKey == "info") {
          const channelInfoKeys = Object.keys(submapData);
          channelInfoKeys.forEach((channelInfoKey) => {
            if (channelInfoKey == "name") {
              outMap["channel"]["name"] = submapData[channelInfoKey];
            } else if (channelInfoKey == "channel_name") {
              outMap["channel"]["channelID"] = submapData[channelInfoKey];
            } else if (channelInfoKey == "thumbnail_path") {
              outMap["channel"]["thumbnail"] = submapData[channelInfoKey];
            }
          });
        }
        if (subKey == "insight") {
          const channelInsightKeys = Object.keys(submapData);
          channelInsightKeys.forEach((channelInsightKey) => {
            if (channelInsightKey == "subscriber_count") {
              outMap["channel"]["subscribers"] = submapData[channelInsightKey];
            }
          });
        }
      });
    }
  });

  return outMap;
}
