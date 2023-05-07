function solution(D) {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let daySums = {};
    let dayCounts = {};
    let result = {};
  
    // Initialize daySums and dayCounts
    for (let i = 0; i < 7; i++) {
      daySums[daysOfWeek[i]] = 0;
      dayCounts[daysOfWeek[i]] = 0;
    }
  
    // Iterate over the entries in D and accumulate sums for each day
    for (let [date, value] of Object.entries(D)) {
      let dayOfWeek = daysOfWeek[new Date(date).getDay() - 1];
      daySums[dayOfWeek] += value;
      dayCounts[dayOfWeek]++;
    }
  
    // Compute mean for missing days
    for (let i = 0; i < 7; i++) {
      let dayOfWeek = daysOfWeek[i];
      if (dayCounts[dayOfWeek] === 0) {
        let prevDayOfWeek = daysOfWeek[(i + 6) % 7];
        let nextDayOfWeek = daysOfWeek[(i + 1) % 7];
        let mean = (daySums[prevDayOfWeek] + daySums[nextDayOfWeek]) / 2;
        daySums[dayOfWeek] = mean;
      }
    }
  
    // Construct result dictionary
    for (let i = 0; i < 7; i++) {
      let dayOfWeek = daysOfWeek[i];
      result[dayOfWeek] = daySums[dayOfWeek];
    }
  
    return result;
  }

  var ds={"2020-01-01":4, "2020-01-02":4, "2020-01-03":6, "2020-01-04": 8, "2020-01-05":2,"2020-01-06":-6, "2020-01-07": 2," 2020-01-08":-2}
  solution(ds); 


