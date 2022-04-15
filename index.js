let superbowlWin =  (records) => {
    let searchResult = records.find(record => record.result==="W");
    return searchResult && searchResult.year
}

