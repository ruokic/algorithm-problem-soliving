function solution(num_teams, remote_tasks, office_tasks, employees) {
  let answer = [];
  let office = [];
  const officeTasksSet = new Set(office_tasks);
  const isOffice = Array(num_teams).fill(false);
  const employeeTeam = Array(num_teams)
    .fill()
    .map((_) => []);
  const answerSet = new Set(
    Array(employees.length)
      .fill()
      .map((_, i) => i + 1)
  );

  employees.forEach((e, i) => {
    const [tn, ...tasks] = e.split(" ");
    let isO = false;
    tasks.forEach((el) => {
      if (officeTasksSet.has(el)) {
        isO = true;
      }
    });
    if (isO) {
      isOffice[parseInt(tn) - 1] = true;
      office.push(i + 1);
    } else {
      employeeTeam[parseInt(tn) - 1].push(i + 1);
    }
  });

  isOffice.forEach((e, i) => {
    if (!e) {
      office.push(employeeTeam[i][0]);
    }
  });

  office.forEach((e) => {
    answerSet.delete(e);
  });
  answer = [...answerSet].sort((a, b) => a - b);

  return answer;
}
